const paymentsMenu = [
  {
    section: "ACCEPT PAYMENTS ONLINE",
    items: [
      {
        icon: "🧾",
        title: "Payment Aggregator",
        desc: "Accepting payments made easy for businesses",
      },
      {
        icon: "💳",
        title: "Payment Gateway",
        desc: "Payments on your Website & App",
      },
      {
        icon: "🔗",
        title: "Payment Links",
        desc: "Create & send links to collect money",
      },
      {
        icon: "📄",
        title: "Payment Pages",
        desc: "Get paid with personalized page",
      },
      {
        icon: "🔢",
        title: "QR Codes",
        desc: "Multi-feature QR for your business",
      },
      {
        icon: "⚡",
        title: "UPI Payments",
        desc: "Discover the complete UPI stack",
        badge: "NEW",
      },
    ],
  },
  {
    section: null,
    items: [
      {
        icon: "🛒",
        title: "Magic Checkout",
        desc: "Improve Order Conversions & Reduce RTOs",
        badge: "NEW",
      },
      {
        icon: "🔁",
        title: "Subscriptions",
        desc: "Collect recurring subscription payments",
      },
      {
        icon: "⚡",
        title: "Instant Settlement",
        desc: "Customer payments settled faster",
      },
      {
        icon: "🧰",
        title: "Optimizer",
        desc: "Manage multiple payment gateways",
      },
    ],
  },
  {
    section: "ACCEPT PAYMENTS OFFLINE",
    items: [
      { icon: "🧾", title: "Razorpay POS", desc: "Accept Payments In-Store" },
    ],
  },
  {
    section: "ALL-IN-ONE PAYMENTS",
    items: [
      {
        icon: "🔄",
        title: "Omnichannel Payments",
        desc: "One Payment Platform for All Channels",
        badge: "NEW",
      },
    ],
  },
  {
    section: "ACCEPT INTERNATIONAL PAYMENTS",
    items: [
      {
        icon: "🌐",
        title: "International Payments",
        desc: "Accept payments from across the globe",
      },
      {
        icon: "✈️",
        title: "International Bank Transfers",
        desc: "Accept USD, GBP, EUR payments",
      },
    ],
  },
  {
    section: "BUILT FOR GLOBAL BUSINESSES",
    items: [
      {
        icon: "🇮🇳",
        title: "Accept Payments from India",
        desc: "Seamless INR collections via UPI & cards",
        badge: "NEW",
      },
    ],
  },
];

export default function PaymentsDropdown() {
  return (
    <div className="absolute -left-48 top-6 w-[1250px] bg-white shadow-xl rounded-xl p-8 z-30 animate-fade">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="text-sm text-start  text-gray-700 mb-2">
            ACCEPT PAYMENTS ONLINE
          </div>
          <div className="space-y-4">
            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>Payment Aggregator</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Accepting payments made easy for businesses
                </p>
              </div>
            </div>

            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>Payment Gateway</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Payments on your Website & App
                </p>
              </div>
            </div>
            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>Payment Links</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Create & send links to collect money
                </p>
              </div>
            </div>
            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>Payment Pages</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Get paid with personalized page
                </p>
              </div>
            </div>
            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>QR Codes</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Multi-feature QR for your business
                </p>
              </div>
            </div>
            <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
              <img src="" className="h-8 w-8" alt="logo" />
              <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
              <div className="flex-col justify-items-start">
                <h1>UPI Payments</h1>

                <p className="text-xs whitespace-nowrap text-gray-500">
                  Discover the complete UPI stack
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8">
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Magic Checkout</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
              Improve Order Conversions & Reduce RTOs
              </p>
            </div>
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Subscriptions</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
               Collect recurring subscription payments
              </p>
            </div>
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Instant Settlement</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
               Customer payments settled faster
              </p>
            </div>
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Optimizer</h1>

              <p className="text-xs text-start whitespace-nowrap text-gray-500">
                Manage multiple payment gateways
              </p>
            </div>
          </div>

          <div>
            ACCEPT PAYMENTS OFFLINE
          </div>

          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Razorpay POS</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
                Accept Payments In-Store
              </p>
            </div>
          </div>

         
        </div>

        <div className="flex-1  ">
         

           
           <div>
            ALL-IN-ONE PAYMENTS
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100  hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Omnichannel Payments</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
                One Payment Platform for All Channels
              </p>
            </div>
          </div>
          <div>
            ACCEPT INTERNATIONAL PAYMENTS
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>International Bank Transfers</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
                Accept USD, GBP, EUR payments
              </p>
            </div>
          </div>

          <div>
            BUILT FOR GLOBAL BUSINESSES
          </div>
          <div className="group cursor-pointer flex hover:bg-gray-100 hover:border border-gray-200 hover:bg-opacity-60 p-2 rounded-lg transition">
            <img src="" className="h-8 w-8" alt="logo" />
            <div className="font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600"></div>
            <div className="flex-col justify-items-start">
              <h1>Accept Payments from India</h1>

              <p className="text-xs whitespace-nowrap text-gray-500">
               Seamless INR collections via UPI & cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}