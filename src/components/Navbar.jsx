import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PaymentsDropdown from "./PaymentDropDown";
import BankDropdown from "./bankingDropdown";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);




  const bankingMenu = [
    {
      section: "AWARENESS",
      items: [
        { title: "Blog" },
        { title: "Learn" },
        { title: "Events" },
        { title: "White Papers" },
        { title: "Customer Stories" },
      ],
    },
    {
      section: "DEVELOPERS",
      items: [
        { title: "Developer Docs" },
        { title: "Integrations" },
        { title: "API Reference" },
        { title: "API Playground" },
        { title: "Onboarding APIs" },
      ],
    },

    {
      section: "SOLUTIONS",
      items: [
        { title: "SaaS" },
        { title: "E-Commerce" },
        { title: "Education" },
        { title: "BFSI" },
        { title: "Freelance" },
      ],
    },

    {
      section: "FREE TOOLS",
      items: [
        { title: "GST Calculator" },
        { title: "Online TDS Payment" },
        { title: "GST Number Search" },
        { title: "GST Search by PAN" },
        { title: "ROI Calculator", badge: "NEW" },
        { title: "CAGR Calculator", badge: "NEW" },
        { title: "EBITDA Calculator", badge: "NEW" },
      ],
    },
  ];

  const resourcesMenu = [
    {
      section: "AWARENESS",
      items: [
        { title: "Blog" },
        { title: "Learn" },
        { title: "Events" },
        { title: "White Papers" },
        { title: "Customer Stories" },
      ],
    },
    {
      section: "DEVELOPERS",
      items: [
        { title: "Developer Docs" },
        { title: "Integrations" },
        { title: "API Reference" },
        { title: "API Playground" },
        { title: "Onboarding APIs" },
      ],
    },

    {
      section: "SOLUTIONS",
      items: [
        { title: "SaaS" },
        { title: "E-Commerce" },
        { title: "Education" },
        { title: "BFSI" },
        { title: "Freelance" },
      ],
    },

    {
      section: "FREE TOOLS",
      items: [
        { title: "GST Calculator" },
        { title: "Online TDS Payment" },
        { title: "GST Number Search" },
        { title: "GST Search by PAN" },
        { title: "ROI Calculator", badge: "NEW" },
        { title: "CAGR Calculator", badge: "NEW" },
        { title: "EBITDA Calculator", badge: "NEW" },
      ],
    },
  ];




  return (
    <nav className="bg-white shadow-sm w-full max-w-[1400px] px-10 py-3 flex items-center justify-between relative">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
          className="w-32"
          alt="Razorpay Logo"
        />

        <ul className="flex items-center gap-6 text-[15px] font-medium text-gray-700">
          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("payments")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Payments
         {activeMenu === "payments" && (
 
          <PaymentsDropdown />
  
)}

          </li>

          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("banking")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Banking+
            {activeMenu === "banking" && (
            <BankDropdown />
            )}
          </li>
          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("payroll")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Payroll
            {activeMenu === "payroll" && (
              <div className="absolute  top-6 right-40 w-[1000px] bg-white shadow-xl rounded-xl p-8 z-30 animate-fade">
                <div className="grid grid-cols-3 gap-14">
                  
                </div>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-blue-600">Engage</li>
          <li className="cursor-pointer hover:text-blue-600">Partners</li>
          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("resource")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Resource
            {activeMenu === "resource" && (
              <div className="absolute left-0 top-6 w-[1000px] h-screen bg-white shadow-xl rounded-xl p-8 z-30 animate-fade">
                <div className="grid grid-cols-3 gap-14">
                  {resourcesMenu.map((column, colIndex) => (
                    <div key={colIndex}>
                     

                     
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        <img
          src="https://flagsapi.com/IN/flat/64.png"
          alt="India"
          className="w-6 h-4 rounded-sm"
        />
        <ChevronDown size={18} className="mt-1 text-gray-600" />

        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-50">
          Login
        </button>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700">
          Sign Up →
        </button>
      </div>
    </nav>
  );
}
