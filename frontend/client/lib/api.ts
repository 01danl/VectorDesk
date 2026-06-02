const API_URL = "http://127.0.0.1:8000";

export async function getBots() {
  const response = await fetch(`${API_URL}/bots`);
  return response.json();
}

export async function createBot(data: {
  id: string;
  name: string;
  description?: string;
  system_prompt?: string;
}) {
  const response = await fetch(`${API_URL}/bots`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function uploadFile(botId: string, file: File) {
  const formData = new FormData();
  formData.append("bot_id", botId);
  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload-file`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export async function ragChat(data: {
  bot_id: string;
  message: string;
}) {
  const response = await fetch(`${API_URL}/rag-chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getBot(botId: string) {
  const response = await fetch(`${API_URL}/bots/${botId}`);
  return response.json();
}