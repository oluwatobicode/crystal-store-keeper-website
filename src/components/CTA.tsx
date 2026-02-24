import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative bg-[#1A1A1A] w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center max-w-3xl w-full">
        <h2 className="text-[48px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[0.9] tracking-tight mb-6">
          READY TO <br />
          TRANSFORM<span className="text-[#1A47FE]">?</span>
        </h2>

        <p className="text-[15px] md:text-[18px] text-[#878A92] leading-[150%] max-w-xl mb-10">
          Join hundreds of businesses already using Crystal Stock Keeper to
          streamline operations and boost revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 bg-[#1A47FE] text-white px-10 py-4 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide hover:bg-blue-700 transition-colors">
            START FREE TRIAL <ArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center bg-transparent border border-[#333333] text-white px-10 py-4 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide hover:bg-[#212121] transition-colors">
            TALK TO SALES
          </button>
        </div>

        <p className="text-[12px] md:text-[13px] text-[#5A5C63] tracking-wide">
          No credit card • 14-day trial • Cancel anytime
        </p>
      </div>

      <img
        src="/stock-keeper.svg"
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none select-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default CTA;
