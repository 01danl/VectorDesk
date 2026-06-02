from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime

from app.database import Base 

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    bot_id = Column(Integer, index=True, nullable=False)
    role = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    from datetime import datetime
