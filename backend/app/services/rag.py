from sqlalchemy import text
from app.database import SessionLocal
from app.models.chunk import Chunk

def save_chunk(bot_id: str, content: str, embedding: list[float]):
    db = SessionLocal()

    chunk = Chunk(
        bot_id=bot_id,
        content=content,
        embedding=embedding
    )

    db.add(chunk)
    db.commit()
    db.refresh(chunk)
    db.close()

    return chunk


def search_similar_chunks(
    bot_id: str,
    query_embedding: list[float],
    limit: int = 3
):
    db = SessionLocal()

    embedding_str = "[" + ",".join(map(str, query_embedding)) + "]"

    sql = text("""
        SELECT
            id,
            bot_id,
            content,
            embedding <=> CAST(:embedding AS vector) AS distance
        FROM chunks
        WHERE bot_id = :bot_id
        ORDER BY embedding <=> CAST(:embedding AS vector)
        LIMIT :limit
    """)

    result = db.execute(
        sql,
        {
            "bot_id": bot_id,
            "embedding": embedding_str,
            "limit": limit
        }
    )

    rows = result.fetchall()
    db.close()

    return rows