import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: "IN",
    name: "India",
  });

  const countries = [
    { code: "IN", name: "India" },
    { code: "SG", name: "Singapore" },
    { code: "US", name: "United States" },
  ];
  return (
    <div className="w-full max-w-[2400px] h-full flex bg-gray-50">
      <img
        src="../../../public/images/login-bg1.avif"
        className="absolute  w-full left-0 z-0 h-full object-fill "
        alt="banner"
      />

      <div className="w-1/2  ">
        <div className="absolute top-10  w-7/12  flex flex-col   text-white">
          <div className="ml-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
              className="w-36 mb-6"
              alt="logo"
            />
            <div className="mt-60  w-full">
              <h1 className="w-full text-xl text-left font-semibold leading-normal">
                Join <span className="text-green-400">8 Million</span>{" "}
                Businesses that Trust Razorpay to Supercharge their Business
              </h1>
            </div>
            <div className="flex gap-6 mt-6 text-lg">
              <div className="flex items-center gap-2">
                ✔ <span>100+ Payment Methods</span>
              </div>
              <div className="flex items-center gap-2">
                ✔ <span>Easy Integration</span>
              </div>
              <div className="flex items-center gap-2">
                ✔ <span>Powerful Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-20 w-5/12 z-10 flex items-center justify-center px-8">
        <div className="w-[440px] h-[370px] overflow-scroll scrollbar-hide bg-white rounded-3xl px-10 py-2">
          <div className="grid gap-2 h-[400px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
              className="w-32  "
              alt="logo-small"
            />

            <h2 className="text-left text-md text-gray-600 ">
              Welcome to <span className="font-semibold">Razorpay</span>
            </h2>

            <h1 className="text-2xl text-left font-semibold  ">
              Get started with your <br /> email or phone number
            </h1>

            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="w-full h-12 px-4 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="w-full relative">
              <label className="text-gray-600 text-sm mb-1 block">
                Where is your company registered?
              </label>

              
              <div
                className={`w-full border rounded-lg px-4 py-2 flex items-center justify-between 
    cursor-pointer transition-all duration-400 bg-white
    ${open ? "border-blue-500 shadow-sm" : "border-gray-300"}`}
                onClick={() => setOpen(!open)}
              >
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-xs font-semibold uppercase">
                    {selected.code}
                  </span>
                  {selected.name}
                </span>

                {open ? (
                  <ChevronUp size={18} className="text-gray-500" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500" />
                )}
              </div>

             
              {open && (
                <div
                  className="absolute top- left-0 w-full mt-1 border border-gray-200 rounded-lg 
      shadow-lg bg-white overflow-hidden z-50 
      animate-dropdown"
                >
                  <div className="relative h-full z-50">
                    {countries.map((c) => (
                      <div
                        key={c.code}
                        onClick={() => {
                          setSelected(c);
                          setOpen(false);
                        }}
                        className={`px-4 py-2 flex items-center gap-2 cursor-pointer 
          hover:bg-blue-50 transition ${
            selected.code === c.code ? "bg-blue-50" : ""
          }`}
                      >
                        <span className="text-xs font-semibold uppercase">
                          {c.code}
                        </span>
                        {c.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={()=>{navigate("/")}}
              className="w-[360px] h-12 bg-blue-600 text-white rounded-xl text-lg font-medium relative z-10">
              Continue
            </button>

            <div className="text-center text-gray-500">or</div>

            <button className="w-full h-12 border border-gray-300 rounded-xl flex items-center justify-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                className="w-6"
                alt="Google"
              />
              Continue with Google
            </button>
            <p className="pb-16">
              By continuing you agree to our <span>privacy policy</span>and{" "}
              <span> terms of use</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}