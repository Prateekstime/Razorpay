import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import PaymentsDropdown from "./PaymentDropDown";
import BankDropdown from "./bankingDropdown";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  return (
    <nav className="bg-white shadow-sm w-full px-5 py-3 flex items-center justify-between relative">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
          className="w-28"
          alt="Logo"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
          {/* PAYMENTS */}
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

          {/* BANKING */}
          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("banking")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Banking+
            {activeMenu === "banking" && <BankDropdown />}
          </li>

          {/* PAYROLL */}
          <li
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setActiveMenu("payroll")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            Payroll
          </li>

          <li className="cursor-pointer hover:text-blue-600">Engage</li>
          <li className="cursor-pointer hover:text-blue-600">Partners</li>
          <li className="cursor-pointer hover:text-blue-600">Resource</li>
          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        </ul>
      </div>

      {/* RIGHT SECTION (DESKTOP) */}
      <div className="hidden lg:flex items-center gap-4">
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
            <div className="flex align-middle">

     <button className="sm:hidden flex border mx-5  border-blue-600 text-blue-600 px-3 py-[2px] rounded-md font-medium hover:bg-blue-50">
        Login
      </button>
      <button
        className="lg:hidden h-"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
            </div>

        
{mobileOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg p-5 lg:hidden z-50 
                  max-h-[80vh] overflow-y-auto">
    <ul className="flex flex-col gap-3 text-[16px] text-gray-800">
      {[
        "Payments",
        "Banking+",
        "Payroll",
        "Engage",
        "Partners",
        "Resource",
        "Pricing",
      ].map((item) => (
        <li
          key={item}
          className="py-2 border-b flex justify-between items-center"
          onClick={() =>
            setMobileSubMenu(mobileSubMenu === item ? null : item)
          }
        >
          {item}
          <ChevronDown size={18} />
        </li>
      ))}
    </ul>

   
    <div className="mt-5 flex flex-col gap-3">
    
      <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700">
        Sign Up →
      </button>
    </div>
  </div>
)}

    </nav>
  );
}
