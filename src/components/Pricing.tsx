import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "STARTER",
      description: "For small shops getting started",
      price: "FREE",
      period: "",
      buttonText: "START FREE TRIAL",
      buttonVariant: "dark",
      features: [
        "1 User account",
        "100 Products",
        "Basic reports",
        "Email support",
        "Single location",
      ],
      isHighlighted: false,
    },
    {
      name: "PRICING", // Matched exactly to your design
      description: "For growing businesses",
      price: "₦15,000",
      period: "/mo",
      buttonText: "START FREE TRIAL",
      buttonVariant: "blue",
      features: [
        "Up to 5 Users",
        "Unlimited Products",
        "Advanced analytics",
        "Priority 24/7 support",
        "Multi-payment",
        "Customer CRM",
        "Barcode scanning",
        "Multi-location",
      ],
      isHighlighted: true,
    },
    {
      name: "ENTERPRISE",
      description: "For chains & empires",
      price: "CUSTOM",
      period: "",
      buttonText: "CONTACT SALES",
      buttonVariant: "dark",
      features: [
        "Unlimited Users",
        "Multi-location",
        "API access",
        "Dedicated manager",
        "Custom Integrations",
        "On-premise option",
        "SLA guarantee",
        "White-label",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <main
      id="pricing"
      className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <p className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase mb-4">
          Pricing
        </p>
        <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-[-2px] text-black">
          SIMPLE<span className="text-[#1A47FE]">.</span>
          <br className="hidden md:block" /> TRANSPARENT
          <span className="text-[#1A47FE]">.</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col w-full lg:w-1/3 p-8 md:p-10 transition-all ${
              tier.isHighlighted
                ? "bg-[#1A1A1A] border-t-[6px] border-[#1A47FE]"
                : "bg-transparent"
            }`}
          >
            <div className="flex flex-col gap-2 mb-8">
              <h3
                className={`text-[12px] font-bold tracking-[1%] uppercase ${
                  tier.isHighlighted ? "text-[#1A47FE]" : "text-black"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-[13px] ${
                  tier.isHighlighted ? "text-[#878A92]" : "text-[#878A92]"
                }`}
              >
                {tier.description}
              </p>
            </div>

            <div className="flex items-baseline mb-8">
              <span
                className={`text-[36px] md:text-[42px] font-bold leading-[100%] tracking-tight ${
                  tier.isHighlighted ? "text-white" : "text-black"
                }`}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-[14px] text-[#878A92] font-medium ml-1">
                  {tier.period}
                </span>
              )}
            </div>

            <button
              className={`w-full py-4 rounded-full text-[13px] font-bold tracking-wide transition-colors mb-10 ${
                tier.buttonVariant === "blue"
                  ? "bg-[#1A47FE] text-white hover:bg-blue-700"
                  : "bg-[#1A1A1A] text-white hover:bg-black"
              }`}
            >
              {tier.buttonText}
            </button>

            <ul className="flex flex-col gap-4 mt-auto">
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3">
                  <Check
                    className="w-[16px] h-[16px] text-[#1A47FE]"
                    strokeWidth={3}
                  />
                  <span
                    className={`text-[14px] leading-[100%] tracking-tight ${
                      tier.isHighlighted ? "text-gray-300" : "text-[#21242C]"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
