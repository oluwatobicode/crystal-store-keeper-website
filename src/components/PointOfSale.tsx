const PointOfSale = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-[500px] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="flex flex-row gap-[80px] items-center justify-center">
        <div className="">
          <img src="/pos-image.svg" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] text-[#1A47FE] font-bold tracking-[1%] leading-[100%] uppercase">
              Point of Sale
            </p>
            {/* Note: I left your existing classes exactly as they were here */}
            <h1 className="text-[16px] w-[300px] text-white font-bold md:text-[48px] leading-[100%] tracking-tight text-[#21242C]">
              CHECKOUT THAT FLIES <span className="text-[#1A47FE]">.</span>
            </h1>
            <p className="text-[16px] text-white md:text-[18px] leading-[100%] tracking-tight text-[#21242C]">
              Process transactions in under 2 seconds. Built for speed — barcode
              scanning, smart search, multi-payment splitting, instant receipts.
            </p>

            {/* I added mt-4 to give a little space between the paragraph and the list */}
            <div className="mt-4">
              {/* Added list-disc (for circles), marker:text-[#1A47FE] (for circle color), text-white, and some spacing */}
              <ul className="list-disc pl-5 space-y-2 marker:text-[#1A47FE] text-white text-[14px] md:text-[16px]">
                <li>Sub-2-second checkout processing</li>
                <li>Split payments across cash, POS & transfers</li>
                <li>Instant digital & printable receipts</li>
                <li>Built-in barcode scanning support</li>
                <li>Built-in barcode scanning support</li>
                <li>Works offline, auto-syncs when online</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointOfSale;
