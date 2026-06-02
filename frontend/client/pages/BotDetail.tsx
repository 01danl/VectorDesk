import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import { getBot, ragChat, uploadFile } from "../lib/api";

type Bot = {
  id: string;
  name: string;
  description?: string;
  system_prompt?: string;
  created_at: string;
};

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

export default function BotDetail() {
  const { bot_id } = useParams();

  const [bot, setBot] = useState<Bot | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [answering, setAnswering] = useState(false);

  useEffect(() => {
    if (!bot_id) return;

    getBot(bot_id).then(setBot);
  }, [bot_id]);

  const handleUpload = async () => {
    if (!bot_id || !file) return;

    setUploading(true);

    try {
      await uploadFile(bot_id, file);
      alert("File uploaded and indexed successfully");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSend = async () => {
    if (!bot_id || !input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: userMessage },
    ]);

    setInput("");
    setAnswering(true);

    try {
      const response = await ragChat({
        bot_id,
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: response.answer,
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Error getting answer from backend.",
        },
      ]);
    } finally {
      setAnswering(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="rounded-[16px] border border-[#D7DEE8] bg-white px-8 py-7 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-poppins text-sm font-medium text-[#6B7280]">
                Bot Details
              </p>

              <h1 className="mt-2 font-poppins text-[34px] font-semibold text-[#111827]">
                {bot?.name || "Loading bot..."}
              </h1>

              <p className="mt-2 max-w-[720px] font-poppins text-[15px] text-[#6B7280]">
                {bot?.description || "No description added yet."}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#EEF4FF] px-4 py-2 font-poppins text-sm font-medium text-[#1E2875]">
                  ID: {bot?.id || bot_id}
                </span>
                <span className="rounded-full bg-[#F2F6FA] px-4 py-2 font-poppins text-sm font-medium text-[#373B5C]">
                  RAG enabled
                </span>
                <span className="rounded-full bg-[#F2F6FA] px-4 py-2 font-poppins text-sm font-medium text-[#373B5C]">
                  pgvector
                </span>
              </div>
            </div>

            <div className="rounded-[14px] bg-[#1E2875] px-6 py-5 text-white">
              <p className="font-poppins text-sm opacity-80">Status</p>
              <p className="mt-1 font-poppins text-[24px] font-semibold">
                Active
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
          <section className="flex flex-col gap-6">
            <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-7 shadow-sm">
              <h2 className="font-poppins text-[22px] font-semibold text-[#111827]">
                Knowledge Base
              </h2>

              <p className="mt-2 font-poppins text-sm text-[#6B7280]">
                Upload PDF, DOCX, or TXT files. They will be chunked, embedded,
                and stored for this bot only.
              </p>

              <label className="mt-5 flex h-[160px] cursor-pointer flex-col items-center justify-center rounded-[12px] border-2 border-dashed border-[#3575FF] bg-[#F8FBFF] text-center transition hover:bg-[#F3F8FF]">
                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                <div className="mb-3 text-[#3575FF]">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V8M12 8L8.5 11.5M12 8L15.5 11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 16.5C20 18.9853 17.9853 21 15.5 21H8.5C6.01472 21 4 18.9853 4 16.5C4 14.294 5.5871 12.4591 7.68002 12.073C8.44974 9.12602 11.1275 7 14.25 7C17.9779 7 21 10.0221 21 13.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="font-poppins text-sm text-[#374151]">
                  Drag your file or{" "}
                  <span className="font-semibold text-[#3575FF]">browse</span>
                </p>

                <p className="mt-2 font-poppins text-sm text-[#8B8B8B]">
                  pdf, docx, txt
                </p>
              </label>

              {file && (
                <div className="mt-4 rounded-[10px] bg-[#F2F6FA] px-4 py-3 font-poppins text-sm text-[#373B5C]">
                  Selected: {file.name}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="mt-5 h-12 w-full rounded-[8px] bg-[#1E2875] font-poppins font-semibold text-white transition hover:bg-[#17205f] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload & Index"}
              </button>
            </div>

            <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-7 shadow-sm">
              <h2 className="font-poppins text-[22px] font-semibold text-[#111827]">
                System Prompt
              </h2>

              <p className="mt-4 rounded-[12px] bg-[#F2F6FA] p-4 font-poppins text-sm leading-6 text-[#373B5C]">
                {bot?.system_prompt ||
                  "No system prompt provided. The default assistant behavior will be used."}
              </p>
            </div>
          </section>

          <section className="rounded-[16px] border border-[#D7DEE8] bg-white shadow-sm">
            <div className="border-b border-[#D7DEE8] px-7 py-5">
              <h2 className="font-poppins text-[22px] font-semibold text-[#111827]">
                Test Chat
              </h2>
              <p className="mt-1 font-poppins text-sm text-[#6B7280]">
                Ask questions and test how this bot answers using its knowledge
                base.
              </p>
            </div>

            <div className="flex h-[560px] flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto px-7 py-6">
                {messages.length === 0 && (
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <p className="font-poppins text-[26px] font-semibold text-[#111827]">
                        Start testing your bot
                      </p>
                      <p className="mt-2 font-poppins text-sm text-[#6B7280]">
                        Upload knowledge first, then ask a question.
                      </p>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[78%] rounded-[16px] px-5 py-3 font-poppins text-sm leading-6 ${
                      message.role === "user"
                        ? "ml-auto bg-[#1E2875] text-white"
                        : "bg-[#F2F6FA] text-[#111827]"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}

                {answering && (
                  <div className="max-w-[78%] rounded-[16px] bg-[#F2F6FA] px-5 py-3 font-poppins text-sm text-[#6B7280]">
                    Thinking...
                  </div>
                )}
              </div>

              <div className="border-t border-[#D7DEE8] px-7 py-5">
                <div className="flex h-[56px] items-center gap-4 rounded-[14px] border border-[#D7DEE8] bg-white px-5">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                    placeholder="Ask something about this bot knowledge..."
                    className="flex-1 bg-transparent font-poppins text-sm outline-none placeholder:text-[#B8B8B8]"
                  />

                  <button
                    onClick={handleSend}
                    disabled={answering}
                    className="rounded-[8px] bg-[#1E2875] px-5 py-2 font-poppins text-sm font-semibold text-white transition hover:bg-[#17205f] disabled:opacity-50"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}