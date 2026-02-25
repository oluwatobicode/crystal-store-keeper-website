import React from "react";
import { motion, type Transition } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: "./cart-icon.svg",
      title: "Point of Sale",
      description:
        "Process sales in seconds. Multi-payment, instant receipts, smart cart.",
    },
    {
      icon: "./inventory-icon.svg",
      title: "Smart Inventory",
      description: "Real-time stock tracking with automatic reorder alerts.",
    },
    {
      icon: "./analytics-icon.svg",
      title: "Deep Analytics",
      description:
        "Revenue trends, top products, payment breakdowns at a glance.",
    },
    {
      icon: "./customer-icon.svg",
      title: "Customer CRM",
      description: "Track history, manage credits, build loyalty programs.",
    },
    {
      icon: "./role-icon.svg",
      title: "Role Access",
      description: "Granular permissions for cashiers, managers, admins.",
    },
    {
      icon: "./wallet-icon.svg",
      title: "Multi-Payment",
      description: "Cash, POS, transfers, split payments in one transaction.",
    },
  ];

  return (
    <main
      id="features"
      className="min-h-[800px] flex flex-col items-center p-6 md:p-12 lg:p-20 overflow-hidden bg-[#F8F9FA]"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase"
          >
            Features
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.4 }}
            className="text-[36px] md:text-[50px] mt-2 w-[250px] font-bold leading-[0.9] tracking-[-2px] text-black mb-4 md:mb-10"
          >
            EVERYTHING YOU NEED <span className="text-[#1A47FE]">.</span>
          </motion.h2>
        </div>

        <div className="flex items-start md:items-end w-full md:w-[500px] pb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-[14px] md:text-[18px] leading-[100%] tracking-tight text-[#21242C]"
          >
            From the moment a customer walks in to end-of-day reconciliation,
            every step is handled with precision.
          </motion.p>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springTransition, delay: 0.2 + index * 0.1 }}
            className={`
              group flex flex-col p-6 md:p-10 border-[#E5E7EB] hover:bg-[#1A1A1A] transition-colors duration-300 cursor-pointer
              ${index % 2 !== 0 ? "border-r-0 md:border-r" : "md:border-r border-r-0"}
              ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""}
              ${index >= 4 ? "border-b-0" : "border-b"}
              ${index >= 3 ? "md:border-b-0 border-b" : ""}
            `}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-[12px] font-bold text-[#878A92] group-hover:text-white transition-colors duration-300">
                00{index + 1}
              </span>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#1A47FE] transition-colors duration-300" />
            </div>

            <img
              src={feature.icon}
              className="w-[25px] h-[25px] mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300"
              alt={feature.title}
            />

            <h3 className="text-[20px] font-bold leading-[0.9] tracking-[-2px] text-black group-hover:text-[#666666] transition-colors duration-300 mb-3">
              {feature.title}
            </h3>
            <p className="text-[14px] leading-[100%] tracking-tight text-[#21242C] group-hover:text-[#666666] transition-colors duration-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Features;
