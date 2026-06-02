from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from pydantic import BaseModel
from app.services.embeddings import create_embedding
from app.models.chunk import Chunk
from app.database import engine, Base,SessionLocal 
from app.services.chunking import split_text
from app.services.embeddings import create_embedding
from app.services.rag import save_chunk, search_similar_chunks
from app.services.llm import generate_rag_answer, generate_answer
from app.models.bots import Bot
from app.services.file_loader import extract_text_from_file

Base.metadata.create_all(bind=engine)

app = FastAPI(title='VectorDesk API')

class CreateBotRequest(BaseModel):
    id : str
    name : str
    description : str | None = None,
    system_promt : str | None = None

class ChatRequest(BaseModel):
    message : str

class IngestRequest(BaseModel):
    bot_id: str
    text: str

class RagChatRequest(BaseModel):
    bot_id: str
    message: str


@app.get("/")
def root():
    return {"status" : "Vectordesk backend is running"}

@app.post("/chat")
def chat(request : ChatRequest):
    answer = generate_answer(request.message)
    return {"answer" : answer}

@app.post("/test-embedding")
def test_embedding(request : ChatRequest):
    embedding = create_embedding(request.message)

    return {
        "text" : request.message,
        "embedding_size" : len(embedding),
        "first_5_values" : embedding[:5]
    }

@app.post("/ingest")
def ingest(request: IngestRequest):
    chunks = split_text(request.text)

    saved_chunks = []

    for chunk in chunks:
        embedding = create_embedding(chunk)

        saved = save_chunk(
            bot_id=request.bot_id,
            content=chunk,
            embedding=embedding
        )

        saved_chunks.append(saved.id)

    return {
        "message": "Text ingested successfully",
        "bot_id": request.bot_id,
        "chunks_saved": len(saved_chunks),
        "chunk_ids": saved_chunks
    }

@app.post("/rag-chat")
def rag_chat(request: RagChatRequest):
    query_embedding = create_embedding(request.message)

    results = search_similar_chunks(
        bot_id=request.bot_id,
        query_embedding=query_embedding,
        limit=3
    )

    context = "\n\n".join([row.content for row in results])

    answer = generate_rag_answer(
        question=request.message,
        context=context
    )

    return {
        "bot_id": request.bot_id,
        "question": request.message,
        "answer": answer,
        "sources": [
            {
                "id": row.id,
                "bot_id": row.bot_id,
                "content": row.content,
                "distance": row.distance
            }
            for row in results
        ]
    }

@app.post("/bots")
def create_bot(request : CreateBotRequest):
    db = SessionLocal()

    bot = Bot(
        id = request.id,
        name = request.name,
        description = request.description,
        system_promt = request.system_promt
    )

    db.add(bot)
    db.commit()
    db.refresh(bot)
    db.close()

    return {
        "id" : bot.id,
        "name" : bot.name,
        "description" : bot.description,
        "system_promt" : bot.system_promt,
        "created_at" : bot.created_at
    }

@app.get("/bots")
def get_bots():
    db = SessionLocal()

    bots = db.query(Bot).all()

    db.close()

    return [
        {
            "id": bot.id,
            "name": bot.name,
            "description": bot.description,
            "system_prompt": bot.system_prompt,
            "created_at": bot.created_at
        }
        for bot in bots
    ]

@app.get("/bots/{bot_id}")
def get_bot(bot_id: str):
    db = SessionLocal()

    bot = db.query(Bot).filter(Bot.id == bot_id).first()

    db.close()

    if not bot:
        return {"error": "Bot not found"}

    return {
        "id": bot.id,
        "name": bot.name,
        "description": bot.description,
        "system_prompt": bot.system_prompt,
        "created_at": bot.created_at
    }

@app.post("/upload-file")
async def upload_file(bot_id: str = Form(...), file: UploadFile = File(...)):
    try:
        file_bytes = await file.read()

        text = extract_text_from_file(
            filename=file.filename,
            file_bytes=file_bytes
        )

        if not text.strip():
            raise HTTPException(status_code=400, detail="File has no readable text")

        chunks = split_text(text)

        saved_chunks = []

        for chunk in chunks:
            embedding = create_embedding(chunk)

            saved = save_chunk(
                bot_id=bot_id,
                content=chunk,
                embedding=embedding
            )

            saved_chunks.append(saved.id)

        return {
            "message": "File uploaded and indexed successfully",
            "bot_id": bot_id,
            "filename": file.filename,
            "chunks_saved": len(saved_chunks),
            "chunk_ids": saved_chunks
        }

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
