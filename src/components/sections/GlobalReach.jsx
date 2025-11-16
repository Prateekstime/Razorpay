import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Zap, Users, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalReach() {
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  const statsData = [
    { icon: Globe, label: "Countries", value: "150", suffix: "+" },
    { icon: Zap, label: "Transactions Daily", value: "50", suffix: "M+" },
    { icon: Users, label: "Businesses Served", value: "150", suffix: "K+" },
    { icon: Clock, label: "Uptime", value: "99", suffix: ".9%" },
  ];

  // 🔵 Heading Fade Animation
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  // 🔵 Stats Counting Animation
  useEffect(() => {
    statsRef.current.forEach((element, index) => {
      if (!element) return;

      const { value } = statsData[index];
      const numericValue = parseInt(value);

      gsap.fromTo(
        element,
        { innerText: 0 },
        {
          innerText: numericValue,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            const current = Math.floor(this.targets()[0].innerText);
            this.targets()[0].innerText = current.toString();
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative"
    >
      {/* Background Accent Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global Infrastructure, Local Expertise
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Serving millions of customers across 150+ countries with world-class
            reliability and support
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-blue-300 mb-4" />

                  {/* Number Counter */}
                  <div
                    ref={(el) => (statsRef.current[index] = el)}
                    className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"
                  >
                    {stat.value}
                  </div>

                  <div className="text-sm font-semibold text-blue-100 inline">
                    {stat.label}{" "}
                    <span className="text-cyan-300">{stat.suffix}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bank-Grade Security",
              description:
                "PCI-DSS Level 1 certified infrastructure with 256-bit encryption",
            },
            {
              title: "Lightning Fast",
              description:
                "Transactions processed in milliseconds with zero latency",
            },
            {
              title: "Always Available",
              description:
                "99.9% uptime guarantee with redundant systems across regions",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
