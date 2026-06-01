from app.database import SessionLocal
from app.models.chunk import Chunk
from sqlalchemy import text

def save_chunk(content : str, embedding : list[float]):
    db = SessionLocal()

    chunk = Chunk(
        content=content,
        embedding=embedding
    )

    db.add(chunk)
    db.commit()
    db.refresh(chunk)

    db.close()

    return chunk

def search_similar_chunks(query_embedding: list[float], limit: int = 3):
    db = SessionLocal()

    embedding_str = "[" + ",".join(map(str, query_embedding)) + "]"

    sql = text("""
        SELECT
            id,
            content,
            embedding <=> CAST(:embedding AS vector) AS distance
        FROM chunks
        ORDER BY embedding <=> CAST(:embedding AS vector)
        LIMIT :limit
    """)

    result = db.execute(
        sql,
        {
            "embedding": embedding_str,
            "limit": limit
        }
    )

    rows = result.fetchall()
    db.close()

    return rows