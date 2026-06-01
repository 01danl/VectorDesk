from app.database import SessionLocal
from app.models.chunks import Chunk

def save_chunk(content : str, embedding : list[float]):
    db = SessionLocal

    chunk = Chunk(
        content=content,
        embedding=embedding
    )

    db.add(chunk)
    db.commit()
    db.refresh(chunk)

    db.close()

    return chunk
