import os
import openai
from dotenv import load_dotenv

load_dotenv()

client = openai.OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.vsellm.ru/v1"  # Это прокси сервер
)

def generate_answer(message: str) -> str:
    response = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant for business customer support."},
            {"role": "user", "content": message},
        ],
    )
    return response.choices[0].message.content