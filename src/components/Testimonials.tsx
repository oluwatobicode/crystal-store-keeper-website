import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Ogunlesi",
      position: "CEO, OG Paints Lagos",
      testimonial:
        "Crystal Stock Keeper transformed how we run our 3 store locations. Inventory tracking alone saved us ₦2M in the first quarter.",
    },
    {
      name: "Funmilayo Adeyemi",
      position: "Manager, BeautyWorld",
      testimonial:
        "The POS is so fast our checkout time dropped by 60%. Our customers notice the difference and keep coming back.",
    },
    {
      name: "Chukwuemeka Obi",
      position: "Owner, TechZone",
      testimonial:
        "I can see exactly what's selling, what's not, and make smarter buying decisions. This is the tool every retailer needs.",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <main className="min-h-[500px] bg-[#1A1A1A] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col">
        <div className="flex flex-col gap-2 mb-10 md:mb-16">
          <p className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase mb-2">
            Testimonials
          </p>
          <h1 className="text-[36px] md:text-[48px] text-white font-bold leading-[100%] tracking-tight">
            WHAT THEY SAY <span className="text-[#1A47FE]">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#212121] border border-[#333333] rounded-2xl p-8 flex flex-col justify-between min-h-[250px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-[14px] h-[14px] text-[#1A47FE]"
                      fill="#1A47FE"
                    />
                  ))}
                </div>

                <p className="text-[#A1A1AA] text-[15px] leading-[150%] tracking-tight">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                <div className="w-full h-[1px] bg-[#333333]"></div>

                <div className="flex items-center gap-4">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#1A47FE] flex items-center justify-center text-white font-bold text-[14px]">
                    {getInitials(item.name)}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold text-[15px]">
                      {item.name}
                    </h3>
                    <p className="text-[#878A92] text-[13px]">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
