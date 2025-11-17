export default function Login() {
  return (
    <div className="relative w-full min-h-screen flex bg-gray-50 overflow-hidden">

      {/* Background Image */}
      <img
        src="../../../public/images/login-bg1.avif"
        className="absolute w-full h-full object-cover z-0"
        alt="banner"
      />

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-10 flex flex-col justify-center text-white">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
          className="w-32 md:w-40 mb-10"
          alt="logo"
        />

        <div className="mt-20 md:mt-40 max-w-lg">
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Join <span className="text-green-400">8 Million</span> Businesses
            that Trust Razorpay to Supercharge their Business
          </h1>

          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 text-sm md:text-lg">
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

      {/* RIGHT SIDE LOGIN CARD */}
      <div className="relative w-full lg:w-[40%] xl:w-[35%] flex justify-center items-center px-4 md:px-6 py-20 z-20">

        <div className="
          w-full max-w-sm md:max-w-md 
          bg-white rounded-3xl px-8 py-8 shadow-xl
        ">
          <div className="grid gap-6">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
              className="w-28 mx-auto md:mx-0"
              alt="logo-small"
            />

            <h2 className="text-left text-gray-600 text-sm md:text-md">
              Welcome to <span className="font-semibold">Razorpay</span>
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold leading-snug">
              Get started with your <br /> email or phone number
            </h1>

            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="
                w-full h-12 px-4 
                border border-blue-400 rounded-xl 
                focus:ring-2 focus:ring-blue-400 
                outline-none
              "
            />

            <button className="w-full h-12 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition">
              Continue
            </button>

            <div className="text-center text-gray-500">or</div>

            <button className="
              w-full h-12 border border-gray-300 rounded-xl
              flex items-center justify-center gap-3 hover:bg-gray-50 transition
            ">
              <img
                src="../../../public/images/googleIcon.png"
                className="w-6"
                alt="Google"
              />
              Continue with Google
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <span className="text-blue-600 cursor-pointer">privacy policy</span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">terms of use</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
