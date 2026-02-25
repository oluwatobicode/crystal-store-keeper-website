import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Transition } from "motion/react";

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const CTA: React.FC = () => {
  return (
    <section className="relative bg-[#1A1A1A] w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="text-[48px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[0.9] tracking-tight mb-6"
        >
          READY TO <br />
          TRANSFORM<span className="text-[#1A47FE]">?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="text-[15px] md:text-[18px] text-[#878A92] leading-[150%] max-w-xl mb-10"
        >
          Join hundreds of businesses already using Crystal Stock Keeper to
          streamline operations and boost revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto"
        >
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 bg-[#1A47FE] text-white px-10 py-4 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide hover:bg-blue-700 transition-colors">
            START FREE TRIAL <ArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center bg-transparent border border-[#333333] text-white px-10 py-4 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide hover:bg-[#212121] transition-colors">
            TALK TO SALES
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.4 }}
          className="text-[12px] md:text-[13px] text-[#5A5C63] tracking-wide"
        >
          No credit card • 14-day trial • Cancel anytime
        </motion.p>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        src="/stock-keeper.svg"
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none select-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default CTA;
