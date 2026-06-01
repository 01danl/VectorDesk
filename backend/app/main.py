from fastapi import FastAPI
from pydantic import BaseModel
from app.services.llm import generate_answer
from app.services.embeddings import create_embedding
from app.database import engine
from app.models.chunk import Chunk
from app.database import Base
from app.services.chunking import split_text
from app.services.embeddings import create_embedding
from app.services.rag import save_chunk

Base.metadata.create_all(bind=engine)

app = FastAPI(title='VectorDesk API')

class ChatRequest(BaseModel):
    message : str

class IngestRequest(BaseModel):
    text: str

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
            content=chunk,
            embedding=embedding
        )

        saved_chunks.append(saved.id)

    return {
        "message": "Text ingested successfully",
        "chunks_saved": len(saved_chunks),
        "chunk_ids": saved_chunks
    }