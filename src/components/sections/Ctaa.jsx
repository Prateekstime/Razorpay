import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import cta2image from "../../../public/images/ctaaImage.png"

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
     

      <div className="relative w-full max-w-6xl mx-auto p-0 overflow-hidden rounded-xl bg-blue-600 text-white flex flex-col md:flex-row items-center shadow-lg">

    
      <div className="w-full md:w-1/2 px-10 py-12 relative">

     
        <div className="hidden md:block absolute right-[-40px] top-0 h-full w-[80px] bg-blue-600"
          style={{
            clipPath: "polygon(0 0, 50% 0%, 100% 100%, 0 100%)"
          }}
        ></div>

        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          ₹30L in benefits <br />
          with <span className="text-white font-bold">Razorpay</span> <br />
          Startup Perks
        </h1>

      
        <div className="w-24 h-[2px] bg-white/70 mt-4 mb-6"></div>

   
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-50 transition">
          Know More
        </button>
      </div>

  
      <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src={cta2image}
          alt="Startup Perks Team"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
    </section>
  );
}
