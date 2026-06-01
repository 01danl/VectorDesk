import os
import openai
from dotenv import load_dotenv

load_dotenv()

client = openai.OpenAI(
    api_key=os.getenv('OPENAI_API_KEY'),
    base_url="https://api.vsellm.ru/v1"
)

def create_embedding(text : str) -> list[float]:
    response = client.embeddings.create(
        model='text-embedding-3-small',
        input=text
    )

    return response.data[0].embedding