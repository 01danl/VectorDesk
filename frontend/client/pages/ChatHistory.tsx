import { useState } from "react";
import Layout from "../components/Layout";

type Chat = {
  id: number;
  title: string;
};

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const chats: Chat[] = [
  { id: 1, title: "AI Chat Tool Ethics" },
  { id: 2, title: "AI Chat Tool Impact Writing" },
  { id: 3, title: "New chat" },
];

export default function ChatHistory() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: input },
    ]);

    setInput("");
  };

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-130px)] w-full">
        <aside className="w-[320px] border-r border-[#D7DEE8] pr-8">
          <button className="mb-6 flex h-10 w-full items-center justify-center gap-3 rounded-[10px] bg-[#1E2875] font-poppins text-white">
            <span className="text-2xl leading-none">+</span>
            New chat
          </button>

          <div className="flex flex-col gap-5">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className="flex items-center gap-3 text-left font-poppins text-[15px] text-black"
              >
                <span>▣</span>
                {chat.title}
              </button>
            ))}
          </div>

          <div className="mt-28 border-t border-[#D7DEE8] pt-8">
            <button className="flex items-center gap-3 font-poppins text-[15px] text-black">
              <span>🗑</span>
              Clear conversations
            </button>
          </div>
        </aside>

        <section className="relative flex flex-1 flex-col px-10">
          <div className="flex-1 space-y-4 overflow-y-auto pb-24">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[70%] rounded-2xl px-5 py-3 font-poppins text-sm ${
                  message.role === "user"
                    ? "ml-auto bg-[#1E2875] text-white"
                    : "bg-white text-[#111827]"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-10 right-10">
            <div className="flex h-[56px] items-center gap-4 rounded-[14px] border border-[#D7DEE8] bg-white px-5">
              <button className="text-lg">♙</button>
              <button className="text-lg">▧</button>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type message"
                className="flex-1 bg-transparent font-poppins text-sm outline-none placeholder:text-[#B8B8B8]"
              />

              <button onClick={sendMessage} className="text-xl text-[#8B8B8B]">
                ▷
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}