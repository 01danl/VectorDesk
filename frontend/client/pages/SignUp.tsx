import { useState } from "react";
import { Link } from "react-router-dom";

export default function signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("balamia@gmail.com");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen w-full bg-black flex overflow-hidden">
      <section className="hidden lg:flex w-1/2 bg-[#020817] text-white relative px-20 py-16 flex-col justify-between">
        <div className="font-bold italic tracking-[0.1em] text-[28px]">
          BALA<span className="text-[#007DFA]">.</span>
        </div>

        <h1 className="text-[56px] leading-[1.25] font-light italic text-white/75 max-w-[600px]">
          Welcome. <br />
          Start your journey <br />
          now with our <br />
          management <br />
          system!
        </h1>
      </section>

      <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-[430px]">
          <h1 className="text-[30px] font-semibold text-[#101828] mb-8">
            Create an account
          </h1>

          <div className="flex flex-col gap-6">
            <div>
              <label className="block mb-3 text-[#344054]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-[3px] border-[#D1E9FF] outline-none"
              />
            </div>

            <div>
              <label className="block mb-3 text-[#344054]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-12 rounded-lg border border-[#D0D5DD] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                >
                  👁
                </button>
              </div>
            </div>

            <button className="w-full h-[52px] rounded-lg bg-[#0088FF] text-white font-semibold">
              Create account
            </button>

            <button className="w-full h-[52px] rounded-lg bg-[#D1E9FF] text-[#1570EF] font-semibold">
              Continue with Google
            </button>

            <p className="text-center text-[#98A2B3]">
              Already Have An Account ?{" "}
              <Link to="/login" className="text-[#1570EF]">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}