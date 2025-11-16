import { Search, ShoppingCart, Globe, Settings, PenLine } from "lucide-react";
import { useState } from "react";

export default function RayAssistant() {
  const [isHovered, setIsHovered] = useState(false);

  const options = [
    { icon: <Search className="w-5 h-5" />, label: "Help me find a product" },
    { icon: <ShoppingCart className="w-5 h-5" />, label: "Use Razorpay checkout" },
    { icon: <span className="text-lg">₹</span>, label: "Know about product pricing" },
    { icon: <Globe className="w-5 h-5" />, label: "Accept Payments on Website" },
    { icon: <Settings className="w-5 h-5" />, label: "How do I integrate Razorpay?" },
    { icon: <PenLine className="w-5 h-5" />, label: "Something else?" },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
     bg-white rounded-xl shadow-lg  border border-gray-100
        transition-all duration-300 ease-out cursor-pointer
      "
    >
   
      <div
        className={`
          transition-all duration-700 overflow-hidden p-3 pt-0
          ${isHovered ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"}
        `}
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-6">
          

          <div>
           
            <p className="text-sm text-gray-500 leading-snug">
              Looking for something? Let me help you!
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((item, index) => (
            <button
              key={index}
              className="
                w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 
                hover:bg-blue-50 hover:border-blue-300 transition-all
                hover:shadow-sm hover:translate-z-1
              "
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ASK RAY BUTTON */}
      <button
        className="
           w-full flex items-center justify-center gap-2 
          bg-blue-600 border border-blue-500 text-white 
          py-3 rounded-xl font-semibold 
         hover:shadow-md
          transition-all duration-300
        "
      >
        <span className="text-white-600 font-bold text-lg">✦</span>
        Ask RAY
      </button>
    </div>
  );
}
