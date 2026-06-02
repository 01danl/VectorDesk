import { useState } from "react";
import Layout from "../components/Layout";
import { createBot, uploadFile } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function CreateBot() {
  const [botName, setBotName] = useState("");
  const [description, setDescription] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const botId = botName.toLowerCase().replace(/ /g, "_");
    await createBot({
        id: botId,
        name: botName,
        description,
        system_prompt: systemPrompt,
    });
    for (const file of files) {
        await uploadFile(botId, file);
    }
    setLoading(false);
    navigate("/my-bots");
};
  
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full max-w-[980px] rounded-[16px] border border-[#D7DEE8] bg-white px-14 py-12 shadow-sm">
          <h1 className="mb-8 text-center font-poppins text-[32px] font-semibold text-black">
            Create your chat-bot
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="mb-2 block font-poppins text-sm font-semibold text-[#111827]">
                Bot Name <span className="text-red-500">*</span>
              </label>
              <input
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                placeholder="(support-bot e.g)"
                className="h-12 w-full rounded-[8px] border border-[#CBD5E1] px-4 font-poppins text-sm outline-none focus:border-[#3575FF]"
              />
            </div>

            <div>
              <label className="mb-2 block font-poppins text-sm font-semibold text-[#111827]">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Your message"
                className="h-[130px] w-full resize-none rounded-[8px] border border-[#CBD5E1] px-4 py-3 font-poppins text-sm outline-none focus:border-[#3575FF]"
              />
            </div>

            <div>
              <label className="mb-2 block font-poppins text-sm font-semibold text-[#111827]">
                System prompt
              </label>
              <textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder="e.g You are a helpful AI assistant for business customer support"
                className="h-[130px] w-full resize-none rounded-[8px] border border-[#CBD5E1] px-4 py-3 font-poppins text-sm outline-none focus:border-[#3575FF]"
              />
            </div>

            <div className="text-center">
              <h2 className="font-poppins text-[18px] font-semibold text-black">
                Knowledge Upload
              </h2>
              <p className="mt-1 font-poppins text-sm text-[#6B7280]">
                Add your documents here, and you can upload up to 20 files...
              </p>

              <label className="mt-3 flex h-[130px] cursor-pointer flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-[#3575FF] bg-white">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                  onChange={(e) => setFiles(Array.from(e.target.files || []))}
                />

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full text-[#3575FF]">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V8M12 8L8.5 11.5M12 8L15.5 11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 16.5C20 18.9853 17.9853 21 15.5 21H8.5C6.01472 21 4 18.9853 4 16.5C4 14.294 5.5871 12.4591 7.68002 12.073C8.44974 9.12602 11.1275 7 14.25 7C17.9779 7 21 10.0221 21 13.75C21 14.7347 20.7891 15.6702 20.41 16.513"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="font-poppins text-sm text-[#374151]">
                  Drag your file(s) or{" "}
                  <span className="font-semibold text-[#3575FF]">browse</span>
                </p>
                <p className="mt-2 font-poppins text-sm text-[#8B8B8B]">
                  pdf, word, txt
                </p>
              </label>

              {files.length > 0 && (
                <div className="mt-3 text-left font-poppins text-sm text-[#374151]">
                  {files.map((file) => (
                    <p key={file.name}>• {file.name}</p>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 h-[56px] rounded-[8px] bg-[#1E2875] font-poppins text-[24px] font-semibold text-white transition hover:bg-[#17205f]"
            >
                {loading ? "Creating..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}