export default function Login() {
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

      <div className="absolute right-0 top-10 w-5/12 z-10 flex items-center justify-center px-8">
        <div className="w-[440px] h-[450px] overflow-scroll scrollbar-hide bg-white rounded-3xl px-10 py-16">
          <div className="grid gap-6 h-[400px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
              className="w-32  mb-6"
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

            <button className="w-full h-12 bg-blue-600 text-white rounded-xl  text-lg font-medium">
              Continue
            </button>

            <div className="text-center  text-gray-500">or</div>

            <button className="w-full h-12 border border-gray-300 rounded-xl flex items-center justify-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                className="w-6"
                alt="Google"
              />
              Continue with Google
            </button>
            <p className="pb-16">By continuing you agree to our <span>privacy policy</span>and  <span> terms of use</span>
                    </p>
          </div>
        </div>
      </div>
    </div>
  );
}
