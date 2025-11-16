import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTAA() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".cta-element"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Floating behind blob lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-[28rem] h-[28rem] bg-cyan-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Card */}
        <div className="
          bg-gradient-to-r from-blue-600 to-blue-700 
          rounded-3xl p-14 md:p-20 text-white text-center 
          shadow-2xl relative overflow-hidden
          transform transition-transform duration-500 hover:scale-[1.02]
        ">
          {/* Glass Glow Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl opacity-0 hover:opacity-10 transition duration-500"></div>

          {/* Shine Animation */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute top-0 left-[-150%] w-1/2 h-full bg-white/20 rotate-12 blur-2xl transition-all duration-[1600ms] group-hover:left-[150%]"></div>
          </div>

          <h2 className="cta-element text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Scale Your Business?
          </h2>

          <p className="cta-element text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 1,50,000+ businesses that have already transformed their
            payment experience with Razorpay
          </p>

          {/* Buttons */}
          <div className="cta-element flex flex-col sm:flex-row gap-5 justify-center">

            {/* Primary Button */}
            <button className="
              relative px-10 py-4 bg-white text-blue-700 font-bold rounded-xl 
              shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 
              group overflow-hidden
            ">
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />

              {/* Light sweep */}
              <span className="absolute inset-0 bg-white/30 translate-x-[-120%] group-hover:translate-x-[120%] transition-all duration-700 rotate-12"></span>
            </button>

            {/* Secondary Button */}
            <button className="
              px-10 py-4 border-2 border-white text-white font-bold rounded-xl 
              hover:bg-white/10 hover:shadow-xl transition-all duration-300
            ">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
