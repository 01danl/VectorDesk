import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("balamia@gmail.com");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
      {/* Background glow effects */}
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

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-2 px-8 pt-10 sm:px-16 sm:pt-16">
        <span
          className="font-poppins font-bold italic text-white tracking-[0.1em] text-[28px] leading-none"
        >
          BALA
        </span>
        <span
          className="font-poppins font-bold italic text-[#007DFA] tracking-[0.1em] text-[28px] leading-none"
        >
          .
        </span>
      </div>

      {/* Centered form */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[540px] bg-white rounded-[20px] px-8 py-12 sm:px-[72px] sm:py-12 flex flex-col gap-8 shadow-xl">
          {/* Title */}
          <div className="flex flex-col items-center gap-4">
            <h1
              className="font-poppins font-semibold text-[#101828] text-[22px] sm:text-[28px] leading-none text-center"
            >
              Login to your account
            </h1>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-poppins font-normal text-[#344054] text-base capitalize"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 py-3 rounded-lg border-[3px] border-[#D1E9FF] font-poppins font-normal text-[#344054] text-sm outline-none focus:border-[#0088FF] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-poppins font-normal text-[#344054] text-base capitalize"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="font-poppins font-normal text-[#1570EF] text-base capitalize hover:underline"
                >
                  Forgot？
                </Link>
              </div>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 py-3 pr-12 rounded-lg border border-[#D0D5DD] font-poppins font-normal text-[#344054] text-sm placeholder-[#98A2B3] outline-none focus:border-[#D1E9FF] focus:border-[3px] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#667085] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.73 10.73a3 3 0 0 0 4.1 4.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-6">
            <button
              type="submit"
              className="w-full h-[52px] rounded-lg bg-[#0088FF] hover:bg-[#006FD6] active:bg-[#005EC2] transition-colors font-poppins font-semibold text-[#FCFCFD] text-base flex items-center justify-center"
            >
              Login now
            </button>
            <div className="flex items-center gap-2">
              <span className="font-poppins font-normal text-[#98A2B3] text-base capitalize">
                Don't have an account ?
              </span>
              <Link
                to="/signup"
                className="font-poppins font-normal text-[#101828] text-base capitalize hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
