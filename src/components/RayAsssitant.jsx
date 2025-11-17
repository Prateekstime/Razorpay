import { Search, ShoppingCart, Globe, Settings, PenLine } from "lucide-react";
import { useState } from "react";
import { MessageSquare, Send, Menu, Minus, Globe2 } from "lucide-react";

export default function RayAssistant() {
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const options = [
    { icon: <Search className="w-5 h-5" />, label: "Help me find a product" },
    { icon: <ShoppingCart className="w-5 h-5" />, label: "Use Razorpay checkout" },
    { icon: <span className="text-lg">₹</span>, label: "Know about product pricing" },
    { icon: <Globe className="w-5 h-5" />, label: "Accept Payments on Website" },
    { icon: <Settings className="w-5 h-5" />, label: "How do I integrate Razorpay?" },
    { icon: <PenLine className="w-5 h-5" />, label: "Something else?" },
  ];

  return (
    <div   >
     
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-4 right-10 bg-white rounded-xl shadow-lg border border-gray-100  transition-all duration-300 z-50"
      >
       
        <div
          className={`transition-all duration-500 overflow-hidden opacity-0 ${
            isHovered ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 flex-col "
          }`}
        >
          <p className="text-sm text-gray-500 p-3">
            Looking for something? Let me help you!
          </p>

          <div className="space-y-2 mx-3">
            {options.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 
                hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

       
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-4 right-10 w-full sm:w-[300px] bg-blue-600 text-white rounded-xl py-2 font-semibold hover:bg-blue-700 transition"
        >
          ✦ Ask RAY
        </button>
      </div>

     
      {showChat && (
        <div className="fixed bottom-16  sm:bottom-16 z-50 right-6 md:right-6 w-[90%] sm:w-[380px] max-h-fit  bg-white rounded-t-2xl   ">
          
     
          <div className="flex justify-between items-center ">
           
          
          </div>

         
          <div className="p-5 bg-white mx-4 rounded-xl shadow-sm">
            <div className="flex justify-between">

             <div className="flex items-center gap-2">
              <img
                src="https://razorpay.com/favicon.png"
                className="w-4 h-4"
                alt="logo"
              />
              <h1 className="text-lg font-semibold text-slate-800">RAY</h1>
            </div>

              <div className="flex items-center gap-4 text-slate-500">
              <Globe2 className="w-5 h-5 cursor-pointer hover:text-slate-700" />
              <Minus
                onClick={() => setShowChat(false)}
                className="w-5 h-5 cursor-pointer hover:text-slate-700"
              />
            </div>
            </div>
            
            <p className="text-slate-600 text-xs mt-1">
              I'm RAY, I will be assisting you with your Razorpay journey.
              How can I help you today?
            </p>

            
            <div className="mt-4 space-y-3 ">
              {[
                "Accept Payments",
                "Make Payouts",
                "Do Business Banking",
                "Automate Payroll",
                "Get Credit",
                "Other",
              ].map((label, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-4 px-4 py-1 bg-white border rounded-lg hover:bg-blue-50 transition"
                >
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 px-4 flex items-center gap-3 bg-white p-2 mx-4 rounded-xl shadow-inner border">
            <Menu className="w-4 h-4 text-slate-600 cursor-pointer" />
            <input
              type="text"
              placeholder="Type your question here..."
              className="flex-1 outline-none bg-transparent text-slate-700 text-sm"
            />
            <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>

         
        </div>
      )}
    </div>
  );
}
