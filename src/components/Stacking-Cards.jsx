import React, { useEffect, useRef } from "react";

const stackingData = [
  {
    title: "Accept Payments",
    
    color: "from-teal-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-teal-50 to-cyan-100",
    icon: "💳",
    images: [
      "/payment-gateway-dashboard.jpg",
      "/payment-button-interface.jpg", 
      "/payment-links-qr-code.jpg"
    ],
    imageTitles: [
      "Dashboard View",
      "Payment Interface",
      "QR Code Payments"
    ]
  },
  {
    title: "Make Payouts",
    color: "from-cyan-500 to-blue-500",
    gradient: "bg-gradient-to-br from-cyan-50 to-blue-100",
    icon: "🔘",
    images: [
      "/payment-button-interface.jpg",
      "/razorpay-pos-payment-terminal.jpg",
      "/invoice-management-system.jpg"
    ],
    imageTitles: [
      "Payment Button",
      "POS Terminal", 
      "Invoice System"
    ]
  },
  {
    title: "Start Business Banking",
    color: "from-blue-500 to-indigo-500",
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    icon: "🔗",
    images: [
      "/payment-links-qr-code.jpg",
      "/payment-gateway-dashboard.jpg",
      "/razorpay-pos-payment-terminal.jpg"
    ],
    imageTitles: [
      "QR Code Generator",
      "Admin Dashboard",
      "Mobile Payments"
    ]
  },
  {
    title: "Automate Payroll",
     color: "from-indigo-500 to-purple-500",
    gradient: "bg-gradient-to-br from-indigo-50 to-purple-100",
    icon: "📱",
    images: [
      "/razorpay-pos-payment-terminal.jpg",
      "/payment-button-interface.jpg",
      "/invoice-management-system.jpg"
    ],
    imageTitles: [
      "POS Hardware",
      "Payment Processing",
      "Billing System"
    ]
  },
  {
    title: "Get Credit & Loans",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-50 to-pink-100",
    icon: "📄",
    images: [
      "/invoice-management-system.jpg",
      "/payment-gateway-dashboard.jpg",
      "/payment-links-qr-code.jpg"
    ],
    imageTitles: [
      "Invoice Management",
      "Payment Tracking",
      "Quick Payments"
    ]
  },
];

export default function StackingCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // ⭐ Razorpay-style Easing Functions
  const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t);
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollStart = containerTop - windowHeight + 500;
      const scrollEnd = containerTop + containerHeight + 200;

      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - scrollStart) / (scrollEnd - scrollStart))
      );

      // Apply easing to the main progress (smoother scroll)
      const easedProgress = easeOutExpo(progress);

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const totalCards = stackingData.length;
        
        // Reverse the index so first card (index 0) starts at the back
        const reversedIndex = totalCards - 1 - index;

        let cardProgress = Math.max(
          0,
          Math.min(1, easedProgress * (totalCards + 1) - reversedIndex)
        );

        const easedCard = easeOutCubic(cardProgress);

        const stackOffset = 8; 
        const initialYOffset = reversedIndex * stackOffset;
        const yPosition = easedCard * 300; 

        const initialScale = 1 - (reversedIndex * 0.08);
        const activeScale = 1;
        const scale = initialScale + (activeScale - initialScale) * easedCard;

        const initialOpacity = 0.7 - (reversedIndex * 0.1);
        const activeOpacity = 1;
        const opacity = initialOpacity + (activeOpacity - initialOpacity) * easedCard;

        const zIndex = Math.floor(easedCard * 100) + reversedIndex;

        card.style.transform = `
          translateY(${initialYOffset - yPosition}px)
          scale(${scale})
          rotateX(${Math.min(5, easedCard * 10)}deg)
        `;
        card.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <div
        ref={containerRef}
        className="relative min-h-[300vh]"
        style={{ perspective: "900px" }}
      >
        <div className="absolute -top-0 text-start py- px-20 md:px-40 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            The all in one <span className="text-green-600"> finance platform 
              </span> you've been looking for
          </h2>
        </div>

        <div className="sticky top-[400px] h-screen flex items-center justify-center pointer-events-none">
          <div
            className="w-full max-w-[95%] md:max-w-[85%] lg:max-w-[90%] px-6 relative"
            style={{ height: "600px" }}
          >
            {stackingData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`
                  absolute inset-x-0 mx-auto w-full
                  h-[380px] md:h-[420px] lg:h-[350px] pb-20
                  ${item.gradient}
                  rounded-2xl p-8 border-2 border-teal-200 shadow-xl
                  transition-all duration-300 pointer-events-auto cursor-pointer
                `}
                style={{
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                  transform: `translateY(${(stackingData.length - 1 - index) * 100}px) scale(${1 - ((stackingData.length - 1 - index) * 0.08)})`,
                  opacity: 1,
                  zIndex: stackingData.length - 1 - index,
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`}
                ></div>

                <div className="relative z-10 h-full flex items-center gap-10 ">
                  {/* First Image */}
                  <div className="hidden md:block w-1/2 sm:w-1/3 h-full group ">
                    <div className="w-full h-full mt-6 sm:mt-10 bg-white rounded-xl overflow-hidden relative">
                      <img
                        src={item.images[0]}
                        alt={item.imageTitles[0]}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h1 className="text-xl font-bold text-white mb-2">{item.imageTitles[0]}</h1>
                          <p className="text-white/90 text-sm mb-4">Explore features and benefits</p>
                          <button className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 text-sm`}>
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Image */}
                  <div className="w-1/2 sm:w-1/3 h-full group">
                    <div className="w-full  h-full bg-white  mt-6 sm:mt-10 rounded-xl p-2 overflow-hidden relative">
                      <img
                        src={item.images[1]}
                        alt={item.imageTitles[1]}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h1 className="text-xl font-bold text-white mb-2">{item.imageTitles[1]}</h1>
                          <p className="text-white/90 text-sm mb-4">Discover how it works</p>
                          <button className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 text-sm`}>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Image */}
                  <div className="w-1/2 sm:w-1/3  h-full group">
                    <div className="w-full  h-full bg-white  mt-6 sm:mt-10 rounded-xl overflow-hidden relative">
                      <img
                        src={item.images[2]}
                        alt={item.imageTitles[2]}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h1 className="text-xl font-bold text-white mb-2">{item.imageTitles[2]}</h1>
                          <p className="text-white/90 text-sm mb-4">Get started today</p>
                          <button className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 text-sm`}>
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-2 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                  
                  
                  </div>
                  <h3 className="text-2xl  md:text-3xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                 
                </div>

                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.color} opacity-15 blur-2xl pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}