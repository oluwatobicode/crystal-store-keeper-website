const Footer = () => {
  const footerLinks = [
    {
      title: "PRODUCT",
      links: ["Features", "Pricing", "Integrations", "Changelog"],
    },
    {
      title: "COMPANY",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "RESOURCES",
      links: ["Docs", "Help Center", "API", "Community"],
    },
    {
      title: "LEGAL",
      links: ["Privacy", "Terms", "Security", "GDPR"],
    },
  ];

  return (
    <footer className="bg-[#F8F9FA] pt-16 md:pt-24 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          <div className="col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-bold text-[#21242C] tracking-tight">
                Crystal Stock Keeper
              </span>
            </div>

            <p className="text-[15px] leading-[150%] tracking-tight text-[#878A92] max-w-xs">
              A full-featured Point-of-Sale (POS), inventory management, and
              business analytics platform built for retail operations.
            </p>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h4 className="text-[12px] font-bold text-[#878A92] uppercase tracking-[1%]">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a
                      href="#"
                      className="text-[15px] text-[#5A5C63] hover:text-[#1A47FE] transition-colors tracking-tight"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] bg-[#E5E7EB] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#878A92]">
            © {new Date().getFullYear()} Crystal Concepts. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-[14px] text-[#878A92] hover:text-[#1A47FE] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
