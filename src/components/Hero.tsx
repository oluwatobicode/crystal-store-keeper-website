import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[800px] flex flex-col items-center pt-20 overflow-hidden">
      <div className="w-full max-w-7xl px-8 md:px-12 lg:px-20 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A47FE]"></div>
          <p className="text-[12px] font-bold tracking-[1%] leading-[100%] text-[#666666] uppercase">
            Business Management Platform — 2026
          </p>
        </div>

        <h1 className="text-[64px] md:text-[90px] font-bold leading-[0.9] tracking-[-2px] text-black mb-10">
          RUN YOUR <br />
          <span className="text-[#1A47FE]">ENTIRE</span> <br /> BUSINESS
          <span className="text-[#1A47FE]">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-20 mb-16">
          <div className="flex flex-col gap-8 max-w-[520px]">
            <p className="font-medium text-[16px] md:text-[18px] leading-[100%] tracking-tight text-[#21242C]">
              Point of sale, inventory management, customer tracking, team
              management, and business intelligence — all in a single platform
              designed for entrepreneurs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex cursor-pointer items-center justify-center gap-3 px-8 h-[52px] rounded-full bg-[#1A47FE] text-white text-[12px] uppercase font-bold tracking-wide hover:bg-blue-700 transition-colors">
                Start Free Trial
                <ArrowRight size={18} />
              </button>

              <button className="flex cursor-pointer items-center justify-center gap-3 px-8 h-[52px] rounded-full bg-transparent border border-black text-black text-[12px] uppercase font-bold tracking-wide hover:bg-gray-100 transition-colors">
                <Play size={18} />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-[20px]  md:gap-16 pb-2">
            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-extrabold tracking-tight">99.9%</h3>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Uptime
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-extrabold tracking-tight">&lt;2S</h3>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Speed
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-extrabold tracking-tight">500+</h3>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Businesses
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-extrabold tracking-tight">#2B+</h3>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Processed
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-auto">
          <img
            src="/hero-image.svg"
            alt="Platform Dashboard Interface"
            className="w-full h-auto object-cover  rounded-t-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
