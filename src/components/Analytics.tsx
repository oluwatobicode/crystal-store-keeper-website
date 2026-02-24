const Analytics = () => {
  return (
    <div className="bg-[#1A47FE] min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center justify-between">
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src="/analytics-image.svg"
            alt="Point of Sale Interface"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <p className="text-[12px] text-[#5093FF] font-bold tracking-[1%] leading-[100%] uppercase mb-2">
                ANALYTICS
              </p>

              <h1 className="text-[36px] md:text-[48px] text-white font-bold leading-[100%] tracking-tight">
                DATA-DRIVEN DECISIONS.
              </h1>
            </div>

            <p className="text-[16px] md:text-[18px] text-white leading-[140%] tracking-tight max-w-lg">
              Beautiful dashboards that tell your business story. Revenue
              trends, top products, payment patterns, opportunities — all at a
              glance.
            </p>

            <div className="mt-2">
              <ul className="list-disc pl-5 space-y-3 marker:text-[#fff] text-white text-[14px] md:text-[16px]">
                <li>Daily, weekly, and monthly revenue trends</li>
                <li>Top-selling products & category performance</li>
                <li>Payment method breakdowns & reconciliation</li>
                <li>Customer purchase patterns & lifetime value</li>
                <li>Export reports in PDF, CSV, or Excel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
