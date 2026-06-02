import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getBots } from "../lib/api";
import { Link } from "react-router-dom";

type Bot = {
  id: string;
  name: string;
  description?: string;
  system_prompt?: string;
  created_at: string;
};

export default function MyBots() {
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    getBots().then(setBots);
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="mb-8 font-poppins text-[32px] font-semibold text-[#111827]">
          My Bots
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className="rounded-[16px] bg-white p-6 shadow-sm border border-[#D7DEE8]"
            >
              <h2 className="font-poppins text-xl font-semibold text-[#1E2875]">
                {bot.name}
              </h2>

              <p className="mt-2 font-poppins text-sm text-[#6B7280]">
                {bot.description || "No description"}
              </p>

              <p className="mt-4 font-poppins text-xs text-[#9CA3AF]">
                ID: {bot.id}
              </p>

              {/* 👇 КНОПКА ДОБАВЛЕНА ЗДЕСЬ */}
              <Link
                to={`/bots/${bot.id}`}
                className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-[8px] bg-[#1E2875] px-5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-[#161f5e]"
              >
                Open Bot
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}