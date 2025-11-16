import React, { useEffect, useRef, useState } from "react";

const stackingData = [
  {
    title: "Payment Gateway",
    description: "Offer a seamless payment experience on your website or app",
    color: "from-teal-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-teal-50 to-cyan-100",
    icon: "💳",
    image: "/payment-gateway-dashboard.jpg",
  },
  {
    title: "Payment Button",
    description: "Effortlessly add a Pay Now button without any coding required.",
    color: "from-cyan-500 to-blue-500",
    gradient: "bg-gradient-to-br from-cyan-50 to-blue-100",
    icon: "🔘",
    image: "/payment-button-interface.jpg",
  },
  {
    title: "Payment Links",
    description:
      "Create and share links over email, text and social to accept payments instantly",
    color: "from-blue-500 to-indigo-500",
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    icon: "🔗",
    image: "/payment-links-qr-code.jpg",
  },
  {
    title: "Razorpay POS",
    description: "Accept seamless in-store payments with India's best POS solution",
    color: "from-indigo-500 to-purple-500",
    gradient: "bg-gradient-to-br from-indigo-50 to-purple-100",
    icon: "📱",
    image: "/razorpay-pos-payment-terminal.jpg",
  },
  {
    title: "Smart Invoicing",
    description:
      "Create professional invoices and track payments automatically.",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-50 to-pink-100",
    icon: "📄",
    image: "/invoice-management-system.jpg",
  },
];

export default function StackingCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollStart = containerTop - windowHeight + 100;
      const scrollEnd = containerTop + containerHeight - 200;
      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - scrollStart) / (scrollEnd - scrollStart))
      );

      setScrollProgress(progress);

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const totalCards = stackingData.length;
        const cardProgress = Math.max(
          0,
          Math.min(1, progress * (totalCards + 1) - index)
        );

        const stackOffset = 16;
        const maxStack = totalCards - 1;

        const yOffset = Math.min(
          index * stackOffset,
          cardProgress * stackOffset * maxStack
        );
        const yPosition = cardProgress * 100;

        const scale =
          1 - Math.max(0, cardProgress - (1 - 1 / totalCards)) * 0.08;

        const opacity = cardProgress >= 1 ? 0.2 : 1;

        const zIndex = 100 - index + Math.floor(cardProgress * 50);

        card.style.transform = `translateY(-${yPosition}px) translateY(${yOffset}px) scale(${scale}) rotateX(${Math.min(
          5,
          cardProgress * 10
        )}deg)`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
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
        className="relative min-h-[400vh]"
        style={{ perspective: "1200px" }}
      >
        <div className="sticky top-20 text-center py-12 z-0 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Accept Payments
          </h2>
          <p className="text-lg text-slate-600">Top Products</p>
        </div>

        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
          <div
            className="w-full max-w-2xl px-4 relative"
            style={{ height: "600px" }}
          >
            {stackingData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`absolute inset-x-0 mx-auto w-full h-80 ${item.gradient} rounded-2xl p-8 border-2 border-teal-200 shadow-xl hover:shadow-2xl hover:border-teal-400 transition-all duration-300 pointer-events-auto cursor-pointer`}
                style={{
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  willChange: "transform, opacity, z-index",
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`}
                ></div>

                <div className="relative z-10 h-full flex items-center gap-6">
                  <div className="hidden md:block w-1/3 h-full">
                    <div className="w-full h-full bg-white/50 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <span
                        className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                      >
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {stackingData.length.toString().padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-700 mb-5 leading-relaxed">
                      {item.description}
                    </p>

                    <button
                      className={`px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Order Now
                    </button>
                  </div>
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
