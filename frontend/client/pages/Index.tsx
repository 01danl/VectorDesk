import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function UpArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" className={className}>
      <path d="M0.227985 6.50195C-0.0490677 6.25966 -0.0776851 5.83871 0.164508 5.56152L4.82466 0.228516C4.95816 0.075737 5.14399 0.000193596 5.32955 0.000976562C5.33082 0.000969887 5.33218 0 5.33345 0C5.55887 3.05176e-05 5.75676 0.112904 5.8774 0.28418L10.5014 5.56055C10.7441 5.83747 10.7158 6.2593 10.4389 6.50195C10.162 6.74425 9.74103 6.71625 9.49849 6.43945L6.00045 2.44727L6.00045 11.333C6.00045 11.7012 5.7016 11.9999 5.33345 12C4.96526 12 4.66646 11.7012 4.66646 11.333L4.66646 2.43652L1.16841 6.43848C0.926156 6.71574 0.505247 6.74421 0.227985 6.50195Z" fill="#54CC8B"/>
    </svg>
  );
}

function SmallUpArrowIcon() {
  return (
    <svg width="6" height="7" viewBox="0 0 6 6" fill="none">
      <path d="M0.110487 3.13889C-0.0234137 3.02189 -0.0377592 2.81771 0.0792373 2.68381L2.33021 0.108613C2.40659 0.0212049 2.5181 -0.0125561 2.62318 0.0041213C2.71441 0.0176349 2.79347 0.0676346 2.84291 0.14084L5.07142 2.68381C5.18851 2.81742 5.17553 3.02068 5.04213 3.13791C4.90841 3.25508 4.70424 3.24229 4.58705 3.10861L2.8976 1.17893L2.8976 5.47189C2.8976 5.64956 2.75392 5.79392 2.57631 5.79416C2.39849 5.79416 2.25404 5.64971 2.25404 5.47189L2.25404 1.17404L0.564589 3.10764C0.44769 3.24143 0.244392 3.25557 0.110487 3.13889Z" fill="#54CC8B"/>
    </svg>
  );
}

function UserBotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5.94174 7.68451C8.1296 7.68451 9.90322 5.96428 9.90322 3.84228C9.90322 1.72028 8.1296 0 5.94174 0C3.75387 0 1.98026 1.72028 1.98026 3.84228C1.98026 5.96428 3.75387 7.68451 5.94174 7.68451Z" stroke="#3575FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0 17.2893V15.3682C0 14.3492 0.417369 13.3719 1.16029 12.6514C1.90321 11.9308 2.91083 11.526 3.96148 11.526H7.92296C8.97361 11.526 9.98123 11.9308 10.7242 12.6514C11.4671 13.3719 11.8844 14.3492 11.8844 15.3682V17.2893" stroke="#3575FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.8749 0.126709C13.7271 0.33832 14.4823 0.818982 15.0217 1.49292C15.5611 2.16685 15.8538 2.99572 15.8538 3.84886C15.8538 4.702 15.5611 5.53087 15.0217 6.20481C14.4823 6.87874 13.7271 7.3594 12.8749 7.57101" stroke="#3575FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.8263 17.2909V15.3698C17.8213 14.5218 17.5271 13.6992 16.9897 13.0302C16.4523 12.3613 15.7018 11.8836 14.8552 11.6716" stroke="#3575FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TokenUsageChart() {
  return (
    <div className="relative w-full" style={{ height: "200px" }}>
      <svg
        viewBox="0 0 503 220"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tokenGradient" x1="305.5" y1="10" x2="299.5" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#54CC8B" stopOpacity="0.35"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path
          d="M152.319 101C95.9491 98.5 37.8277 124.5 15.8132 138L0 145L15.8132 220H503V0H466.258C440.445 7 385.517 28.5 372.308 57C355.798 92 293.475 78 255.802 80.5C218.129 83 222.78 104 152.319 101Z"
          fill="url(#tokenGradient)"
        />
        <path
          d="M16.2783 138.5C38.2928 125 96.4142 99 152.784 101.5C223.246 104.5 218.595 83 256.267 80.5C293.94 78 356.263 93 372.773 57C385.982 28.5 440.91 7 466.723 0"
          stroke="#54CC8B"
          strokeWidth="1.86038"
        />
        {/* Peak indicator dot */}
        <circle cx="412" cy="20" r="5" fill="#54CC8B" stroke="#F9FBFD" strokeWidth="2"/>
        {/* Dashed vertical line */}
        <line x1="412" y1="25" x2="412" y2="220" stroke="#54CC8B" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="9 9"/>
      </svg>

      {/* Tooltip */}
      <div className="absolute" style={{ right: "18%", top: "2px" }}>
        <div className="rounded-[7.5px] bg-[#E8EFF7]/90 px-2 py-1.5 text-center min-w-[56px]">
          <p className="font-poppins text-[8px] text-[#082567]/50 tracking-[0.25px]">23. May</p>
          <p className="font-poppins font-semibold text-[15px] text-[#082567] tracking-[0.25px] leading-tight">305k</p>
        </div>
        <div className="flex justify-center">
          <svg width="5" height="8" viewBox="0 0 5 13" fill="none">
            <path d="M2.3379 6.20856L4.67581 6.22157L2.3428 12.4171L-1.68039e-07 6.19555L2.3379 6.20856Z" fill="#E8EFF7" opacity="0.9"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TotalRequestSparkline() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "66px" }}>
      <svg viewBox="0 0 151 66" fill="none" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="reqGradient" x1="75" y1="0" x2="75" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#54CC8B" stopOpacity="0.35"/>
            <stop offset="0.52" stopColor="#54CC8B" stopOpacity="0.2"/>
            <stop offset="0.89" stopColor="#54CC8B" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 50 C15 45 30 25 50 32 C70 40 90 18 130 12 L151 10 L151 66 L0 66 Z" fill="url(#reqGradient)"/>
        <path d="M0 50 C15 45 30 25 50 32 C70 40 90 18 130 12 L151 10" stroke="#54CC8B" strokeWidth="1.5" fill="none"/>
        <circle cx="130" cy="12" r="4" fill="#54CC8B" stroke="#F9FBFD" strokeWidth="2"/>
      </svg>
    </div>
  );
}

function TotalBotsSparkline() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "66px" }}>
      <svg viewBox="0 0 151 66" fill="none" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="botGradient" x1="75" y1="0" x2="75" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#54CC8B" stopOpacity="0.35"/>
            <stop offset="0.52" stopColor="#54CC8B" stopOpacity="0.25"/>
            <stop offset="0.89" stopColor="#54CC8B" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 38 C20 34 40 48 65 42 C85 37 105 52 120 38 C132 27 140 18 151 14 L151 66 L0 66 Z" fill="url(#botGradient)"/>
        <path d="M0 38 C20 34 40 48 65 42 C85 37 105 52 120 38 C132 27 140 18 151 14" stroke="#54CC8B" strokeWidth="1.5" fill="none"/>
        <circle cx="140" cy="17" r="4" fill="#54CC8B" stroke="#F9FBFD" strokeWidth="2"/>
      </svg>
    </div>
  );
}

interface BotCardProps {
  name: string;
  tokens: string;
}

function BotCard({ name, tokens }: BotCardProps) {
  return (
    <div className="bg-white rounded-[10px] shadow-bot-card p-4 flex flex-col gap-4 min-w-0">
      {/* Icon */}
      <div className="w-16 h-[62px] rounded-[10px] bg-[#3575FF]/10 flex items-center justify-center flex-shrink-0">
        <UserBotIcon />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p className="font-roboto font-bold text-[14px] text-[#5A5881] capitalize">{name}</p>
        <p className="font-roboto font-medium text-[22px] text-[#15134B] capitalize leading-tight">{tokens} Tokens</p>
      </div>

      {/* Open button */}
      <button className="w-full rounded-[10px] bg-[#1E2875] py-2 text-white font-roboto font-bold text-[16px] capitalize hover:bg-[#162060] transition-colors mt-auto">
        Open
      </button>
    </div>
  );
}

const bots: BotCardProps[] = [
  { name: "Support bot", tokens: "1.2k" },
  { name: "Sales bot", tokens: "10k" },
  { name: "Analytics bot", tokens: "5k" },
  { name: "FAQ bot", tokens: "7k" },
];

export default function Index() {
  return (
    <Layout>
      {/* Statistics Section */}
      <section className="flex flex-col gap-6">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <h2 className="font-poppins font-medium text-[17px] text-[#272830]">Statistics</h2>
          <button className="flex items-center gap-2">
            <span className="font-poppins font-semibold text-[14px] text-[#5B5E6F] tracking-[0.25px]">This month</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 3.05719L6.86193 0.195262C7.12228 -0.0650874 7.54439 -0.0650874 7.80474 0.195262C8.06509 0.455612 8.06509 0.877722 7.80474 1.13807L4.4714 4.4714C4.21105 4.73175 3.78895 4.73175 3.5286 4.4714L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4 3.05719Z" fill="#5B5E6F"/>
            </svg>
          </button>
        </div>

        {/* Charts row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Token Usage Card */}
          <div className="flex-1 lg:max-w-[55%] rounded-[16px] bg-white/50 shadow-card p-4 flex flex-col gap-4 overflow-hidden">
            {/* Tab header */}
            <div className="flex rounded-[8px] bg-[#F4F6FC]/22">
              <div className="flex-1 flex items-center justify-center px-3 py-1 border-b border-[#272830]">
                <span className="font-poppins font-medium text-[12px] text-[#272830] tracking-[0.25px]">
                  Token Usage (Last 30 days)
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center px-3 py-1 opacity-50">
                <span className="font-poppins text-[12px] text-[#272830] tracking-[0.25px]">Week</span>
              </div>
            </div>

            {/* Big number */}
            <div className="flex flex-col gap-2">
              <span className="font-montserrat font-bold text-[56px] lg:text-[77px] text-[#272830] leading-none tracking-[0.332px]">
                1.05m
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-montserrat font-semibold text-[16px] text-[#54CC8B] tracking-[0.25px]">+8.5%</span>
                <UpArrowIcon />
              </div>
            </div>

            {/* Chart */}
            <TokenUsageChart />
          </div>

          {/* Right stat cards */}
          <div className="flex flex-row lg:flex-col gap-4 flex-1">
            {/* Total Request */}
            <div className="flex-1 rounded-[16px] bg-white/50 shadow-card p-4 flex flex-col gap-2 overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="font-poppins font-medium text-[12px] text-[#272830] tracking-[0.25px]">
                  Total Request
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-poppins font-semibold text-[32px] lg:text-[36px] text-[#272830] tracking-[0.25px] leading-none">
                  31.6k
                </span>
                <div className="flex items-center gap-1 pb-1">
                  <span className="font-montserrat font-semibold text-[8px] text-[#54CC8B] tracking-[0.25px]">+22%</span>
                  <SmallUpArrowIcon />
                </div>
              </div>
              <TotalRequestSparkline />
            </div>

            {/* Total Bots */}
            <div className="flex-1 rounded-[16px] bg-white/50 shadow-card p-4 flex flex-col gap-2 overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="font-poppins font-medium text-[12px] text-[#272830] tracking-[0.25px]">
                  Total Bots
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-poppins font-semibold text-[32px] lg:text-[36px] text-[#272830] tracking-[0.25px] leading-none">
                  2.7k
                </span>
                <div className="flex items-center gap-1 pb-1">
                  <span className="font-montserrat font-semibold text-[8px] text-[#54CC8B] tracking-[0.25px]">+8.5%</span>
                  <SmallUpArrowIcon />
                </div>
              </div>
              <TotalBotsSparkline />
            </div>
          </div>
        </div>
      </section>

      {/* MyBots Section */}
      <section className="flex flex-col gap-4 pb-8">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2 className="font-poppins font-medium text-[17px] text-[#272830]">MyBots</h2>
          <Link to="/my-bots" className="flex items-center gap-2">
            <span className="font-poppins font-semibold text-[14px] text-[#5B5E6F] tracking-[0.25px]">View all</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 3.05719L6.86193 0.195262C7.12228 -0.0650874 7.54439 -0.0650874 7.80474 0.195262C8.06509 0.455612 8.06509 0.877722 7.80474 1.13807L4.4714 4.4714C4.21105 4.73175 3.78895 4.73175 3.5286 4.4714L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4 3.05719Z" fill="#5B5E6F"/>
            </svg>
          </Link>
        </div>

        {/* Bot cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bots.map((bot) => (
            <BotCard key={bot.name} {...bot} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
