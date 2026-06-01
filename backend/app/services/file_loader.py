from pypdf import PdfReader
from docx import Document
import io


def extract_text_from_file(filename: str, file_bytes: bytes) -> str:
    filename = filename.lower()

    if filename.endswith(".txt"):
        return file_bytes.decode("utf-8")

    if filename.endswith(".pdf"):
        reader = PdfReader(io.BytesIO(file_bytes))
        text = ""

        for page in reader.pages:
            text += page.extract_text() or ""

        return text

    if filename.endswith(".docx"):
        document = Document(io.BytesIO(file_bytes))
        return "\n".join([p.text for p in document.paragraphs])

    raise ValueError("Unsupported file type")