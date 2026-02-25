import React from "react";
import {
  LayoutGrid,
  ShoppingCart,
  TrendingUp,
  ChevronsRight,
} from "lucide-react";
import { motion, type Transition } from "motion/react";

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: (
        <LayoutGrid className="w-6 h-6 text-black mb-4" strokeWidth={1.5} />
      ),
      title: "Set Up",
      description:
        "Add products, categories, pricing and team. Running in under 10 minutes.",
    },
    {
      number: "02",
      icon: (
        <ShoppingCart className="w-6 h-6 text-black mb-4" strokeWidth={1.5} />
      ),
      title: "Start Selling",
      description:
        "Process sales with fast POS. Accept any payment, issue receipts instantly.",
    },
    {
      number: "03",
      icon: (
        <TrendingUp className="w-6 h-6 text-black mb-4" strokeWidth={1.5} />
      ),
      title: "Track & Growth",
      description:
        "Real-time analytics, smart inventory, scale with confidence.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#F8F9FA] min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden"
    >
      <div className="w-full max-w-7xl flex flex-col">
        <div className="flex flex-col mb-16 md:mb-24 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase mb-4"
          >
            how it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-[48px] md:text-[64px] font-bold leading-[1] tracking-[-2px] text-black mb-6"
          >
            EVERYTHING <br />
            YOU NEED<span className="text-[#1A47FE]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-[15px] md:text-[16px] leading-[150%] tracking-tight text-[#5A5C63] max-w-lg"
          >
            Real-time stock levels, automatic reorder alerts, batch management,
            and multi-location tracking. Always accurate, always up-to-date.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springTransition, delay: 0.2 + index * 0.15 }}
              className={`relative flex flex-col py-10 md:py-12 md:px-10 ${
                index !== 2 ? "md:border-r border-[#E5E7EB]" : ""
              } ${index !== 2 ? "border-b border-[#E5E7EB] md:border-b-0" : ""}`}
            >
              {index !== 2 && (
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#F8F9FA] px-2 z-10 text-black">
                  <ChevronsRight
                    className="w-5 h-5 opacity-70"
                    strokeWidth={1.5}
                  />
                </div>
              )}

              <h3 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold leading-[0.8] tracking-[-0.05em] text-black mb-12">
                {step.number}
              </h3>
              {step.icon}
              <h4 className="text-[18px] font-bold text-[#1A47FE] mb-3">
                {step.title}
              </h4>
              <p className="text-[14px] leading-[150%] tracking-tight text-[#878A92] pr-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
