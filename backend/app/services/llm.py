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

def generate_rag_answer(question: str, context: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": """
You are a helpful AI assistant for business customer support.

Answer ONLY using the provided context.
If the answer is not in the context, say:
"I don't know based on the provided knowledge base."
"""
            },
            {
                "role": "user",
                "content": f"""
Context:
{context}

Question:
{question}
"""
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content