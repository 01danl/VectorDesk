from sqlalchemy import Column, Integer, Text, String
from pgvector.sqlalchemy import Vector 

from app.database import Base 

class Chunk(Base):
    __tablename__ = 'chunks'

    id = Column(Integer, primary_key=True, index=True)
    bot_id = Column(String, index=True, nullable=False)
    content = Column(Text)
    embedding = Column(Vector(1536))