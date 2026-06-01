import { Link } from "react-router-dom";

export default function Placeholder({ pageName }: { pageName: string }) {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute"
        style={{
          left: "-370px",
          bottom: "-370px",
          width: "1479px",
          height: "1479px",
          background: "radial-gradient(circle, #2D55FB 0%, transparent 55%)",
          filter: "blur(120px)",
          opacity: 0.55,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          right: "-370px",
          top: "-370px",
          width: "1479px",
          height: "1479px",
          background: "radial-gradient(circle, #2D55FB 0%, transparent 55%)",
          filter: "blur(120px)",
          opacity: 0.55,
        }}
      />
      <div className="relative z-10 flex items-center gap-2 px-8 pt-10 sm:px-16 sm:pt-16">
        <span className="font-poppins font-bold italic text-white tracking-[0.1em] text-[28px] leading-none">
          BALA
        </span>
        <span className="font-poppins font-bold italic text-[#007DFA] tracking-[0.1em] text-[28px] leading-none">
          .
        </span>
      </div>
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-[20px] px-8 py-12 flex flex-col items-center gap-6 text-center shadow-xl">
          <h1 className="font-poppins font-semibold text-[#101828] text-2xl">{pageName}</h1>
          <p className="font-poppins text-[#98A2B3] text-sm">
            This page is coming soon. Continue prompting to fill in the content for this page.
          </p>
          <Link
            to="/"
            className="font-poppins font-semibold text-[#0088FF] text-sm hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
