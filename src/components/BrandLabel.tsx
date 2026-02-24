const BrandLabel = () => {
  const brands: string[] = [
    "Crystal Store Keeper",
    "Paystack",
    "Flutterwave",
    "Square",
    "Shopify",
    "QuickBooks",
    "Moniepoint",
    "Kuda",
    "Bumpa",
    "UBA",
  ];

  return (
    <div className="h-[79px] w-full bg-[#E5E6EA] border-y border-[#DDDDDD] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="mx-8 text-[14px] font-bold uppercase tracking-[0.1em] text-[#999999]"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};
export default BrandLabel;
