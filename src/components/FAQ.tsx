import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer:
        "Setup is extremely fast. You can quickly import your existing inventory via CSV. With built-in default roles (Admin, Manager, Cashier), your staff can start selling almost immediately with zero training.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Crystal Stock Keeper relies on a stable connection to sync inventory, write to the Audit Logs, and generate sequential invoice numbers in real-time to your central database. However, the UI is optimized for fast, sub-2-second checkouts.",
    },
    {
      question: "Can I manage multiple locations?",
      answer:
        "Yes! While our Starter tier covers a single location, our higher tiers fully support multi-location management. You can even track inventory down to the specific physical shelf or area in the store.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We support Cash, POS terminals, and Bank Transfers. You can also process split payments—meaning a customer can pay part in cash and the rest via transfer in a single, unified transaction.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. The system uses JWT for secure authentication, bcrypt for password hashing, and strict Role-Based Access Control (RBAC). Furthermore, every single write operation is permanently recorded in an immutable Audit Log.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes. Administrators can perform manual exports of customers and inventory to CSV, or generate full JSON data dumps. You can also configure automated scheduled backups (daily, weekly, or monthly).",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#EBEBEB] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col">
        <div className="flex flex-col mb-12 md:mb-16">
          <p className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-[-2px] text-black">
            QUESTIONS<span className="text-[#1A47FE]">.</span>
          </h2>
        </div>

        <div className="flex flex-col w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#D4D4D4] py-6 md:py-8 cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] md:text-[18px] font-semibold text-black tracking-tight group-hover:text-[#1A47FE] transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-black transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[200px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[15px] leading-[150%] tracking-tight text-[#5A5C63] md:w-[85%]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
