import React from "react";
import { motion, type Transition } from "motion/react";

interface InventoryFeature {
  name: string;
  tag: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const Inventory: React.FC = () => {
  const inventoryFeatures: InventoryFeature[] = [
    {
      name: "Real-time",
      tag: "Stock Tracking",
    },
    {
      name: "Auto",
      tag: "Reorder Alerts",
    },
    {
      name: "Multi loc",
      tag: "Support",
    },
    {
      name: "Batch",
      tag: "Management",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-10 lg:gap-[80px] items-center justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-[60%]">
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springTransition, delay: 0.2 }}
                className="text-[12px] text-[#5093FF] font-bold tracking-[1%] leading-[100%] uppercase mb-2"
              >
                INVENTORY
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springTransition, delay: 0.3 }}
                className="text-[36px] md:text-[48px] w-[250px] md:w-[300px] text-black font-bold leading-[100%] tracking-tight"
              >
                KNOW EVERY ITEM <span className="text-[#1A47FE]">.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="text-[16px] md:text-[18px] text-[#666666] leading-[140%] tracking-tight max-w-lg"
            >
              Real-time stock levels, automatic reorder alerts, batch
              management, and multi-location tracking. Always accurate, always
              up-to-date.
            </motion.p>

            <div className="mt-2 grid grid-cols-2 md:grid-cols-2 gap-10">
              {inventoryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...springTransition, delay: 0.5 + index * 0.1 }}
                  className="flex flex-row items-center gap-2"
                >
                  <div className="flex flex-col w-[176px] md:w-[300px] h-[66px] md:h-[72px] bg-[#EAE8E5] p-3 border border-[#DDDDDD] rounded-[12px]">
                    <p className="text-[16px] md:text-[14px] font-bold text-[#1A47FE] leading-[140%] tracking-tight max-w-lg">
                      {feature.name}
                    </p>
                    <p className="text-[16px] md:text-[14px] font-regular text-[#999999] leading-[140%] tracking-tight max-w-lg">
                      {feature.tag}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="w-full lg:w-[30%] flex justify-center"
        >
          <img
            src="/inventory-image.svg"
            alt="Inventory Management Interface"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Inventory;
