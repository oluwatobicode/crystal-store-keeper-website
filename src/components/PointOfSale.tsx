import React from "react";
import { motion, type Transition } from "motion/react";

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const PointOfSale: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] min-h-[500px] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="w-full lg:w-[40%] flex justify-center"
        >
          <img
            src="/pos-image.svg"
            alt="Point of Sale Interface"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </motion.div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springTransition, delay: 0.3 }}
                className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase mb-2"
              >
                Point of Sale
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springTransition, delay: 0.4 }}
                className="text-[36px] md:text-[48px] text-white font-bold leading-[100%] tracking-tight"
              >
                CHECKOUT THAT FLIES <span className="text-[#1A47FE]">.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springTransition, delay: 0.5 }}
              className="text-[16px] md:text-[18px] text-gray-200 leading-[140%] tracking-tight max-w-lg"
            >
              Process transactions in under 2 seconds. Built for speed — barcode
              scanning, smart search, multi-payment splitting, instant receipts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springTransition, delay: 0.6 }}
              className="mt-2"
            >
              <ul className="list-disc pl-5 space-y-3 marker:text-[#1A47FE] text-white text-[14px] md:text-[16px]">
                <li>Sub-2-second checkout processing</li>
                <li>Split payments across cash, POS & transfers</li>
                <li>Instant digital & printable receipts</li>
                <li>Built-in barcode scanning support</li>
                <li>Works offline, auto-syncs when online</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointOfSale;
