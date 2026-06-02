from sqlalchemy import Column, String, Text, DateTime
from datetime import datetime

from app.database import Base

class Bot(Base):
    __tablename__ = "Bots"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    system_prompt = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
