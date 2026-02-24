import { ArrowUpRight } from "lucide-react";

const Features = () => {
  const features = [
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
    <main className="min-h-screen flex flex-col items-center p-6 md:p-12 lg:p-20 overflow-hidden bg-[#F8F9FA]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <div className="flex flex-col">
          <h1 className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase">
            Features
          </h1>
          <h2 className="text-[36px] md:text-[50px] mt-2 w-[250px] font-bold leading-[0.9] tracking-[-2px] text-black mb-4 md:mb-10">
            EVERYTHING YOU NEED <span className="text-[#1A47FE]">.</span>
          </h2>
        </div>

        <div className="flex items-start md:items-end w-full md:w-[500px] pb-10">
          <p className="text-[14px] md:text-[18px] leading-[100%] tracking-tight text-[#21242C]">
            From the moment a customer walks in to end-of-day reconciliation,
            every step is handled with precision.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              flex flex-col p-6 md:p-10 border-[#E5E7EB]
              ${index % 2 !== 0 ? "border-r-0 md:border-r" : "md:border-r border-r-0"}
              ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""}
              ${index >= 4 ? "border-b-0" : "border-b"}
              ${index >= 3 ? "md:border-b-0 border-b-1" : ""}
            `}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-[12px] font-bold text-[#878A92]">
                00{index + 1}
              </span>
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>

            <img
              src={feature.icon}
              className="w-[25px] h-[25px] mb-4"
              alt={feature.title}
            />
            <h3 className="text-[20px] font-bold leading-[0.9] tracking-[-2px] text-black mb-3">
              {feature.title}
            </h3>
            <p className="text-[14px] leading-[100%] tracking-tight text-[#21242C]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Features;
