from sqlalchemy import Column, Integer, Text
from pgvector.sqlalchemy import Vector 

from app.database import Base 

class Chunk(Base):
    __tablename__ = 'chunks'

    id = Column(Integer, primary_key=True, index=True)

    content = Column(Text)

    embedding = Column(Vector(1536))