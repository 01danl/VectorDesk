import Layout from "../components/Layout";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-16 h-16 rounded-[16px] bg-[rgba(30,40,117,0.08)] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#1E2875" opacity="0.4"/>
          </svg>
        </div>
        <h2 className="font-poppins font-semibold text-[24px] text-[#272830]">{title}</h2>
        <p className="font-poppins text-[14px] text-[#5B5E6F] text-center max-w-[360px]">
          This page is coming soon. Continue prompting to fill in the content for this section.
        </p>
      </div>
    </Layout>
  );
}
