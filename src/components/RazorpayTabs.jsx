export default function RazorpayTabs() {
  const tabs = [
    "Accept Payments",
    "Make Payouts",
    "Start Business Banking",
    "Automate Payroll",
    "Credit & Loans",
  ];

  const activeTab = "Accept Payments"; // make dynamic if needed

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white">
      
     
      <div className="flex items-center gap-10">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-col cursor-pointer">
            
            <span
              className={`
                text-sm font-semibold 
                transition-colors 
                ${
                  tab === activeTab
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }
              `}
            >
              {tab}
            </span>

        
            {tab === activeTab && (
              <div className="h-[2px] bg-green-500 mt-1 rounded-full w-full"></div>
            )}
          </div>
        ))}
      </div>

   
      <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started Now
      </button>
    </div>
  );
}
