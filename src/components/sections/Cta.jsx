import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Nikita Gujral",
    company: "Founder, AN Fashions",
    text: "Razorpay has helped us increase our conversion rate by 30%. The seamless integration made everything smooth.",
    rating: 5,
    avatar: "👩‍💼",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Anusree Goenka",
    company: "Co-founder, Spark Studio",
    text: "Best payment solution for our business. Fast settlements and reliable infrastructure.",
    rating: 5,
    avatar: "👩‍🔬",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "Nischay AG",
    company: "Co-founder, Jar",
    text: "From payment processing to customer support, everything is top-notch.",
    rating: 5,
    avatar: "👨‍💼",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Aditya Shankar",
    company: "Co-founder, Doughnut",
    text: "The APIs are well-documented and the technical team is incredibly responsive.",
    rating: 5,
    avatar: "👨‍🎓",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Neha Tandon",
    company: "Founder, Isadora Life",
    text: "Razorpay scaled with us from day one. Platform is reliable and support unmatched.",
    rating: 5,
    avatar: "👩‍🎨",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
  {
    name: "Harshil Mathur",
    company: "CEO, Razorpay",
    text: "We've built Razorpay to be the most customer-centric platform in the industry.",
    rating: 5,
    avatar: "👨‍💻",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
];

export default function Cta() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        position -= speed;

        const cardWidth = 320 + 24;
        const totalWidth = cardWidth * reviews.length;

        if (Math.abs(position) >= totalWidth) position = 0;

        marquee.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-blue-200">Hover to reveal their stories</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 py-8">
          <div ref={marqueeRef} className="flex gap-6">
            {[...reviews, ...reviews, ...reviews].map((review, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-96 perspective-1000"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setIsPaused(false);
                  }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                      isHovered ? "rotate-y-180" : ""
                    }`}
                  >
                 
                    <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 p-6 text-white">
                    
                        <h3 className="text-xl font-bold">{review.name}</h3>
                        <p className="text-sm text-blue-200">
                          {review.company}
                        </p>
                      </div>
                    </div>

                   
                    <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 shadow-2xl rotate-y-180 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-300 text-yellow-300"
                            />
                          ))}
                        </div>

                        <p className="text-white text-lg italic mb-6 leading-relaxed">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                     
                        <div>
                          <div className="font-bold text-white text-lg">
                            {review.name}
                          </div>
                          <div className="text-sm text-blue-200">
                            {review.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
      <style>
        {`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}
      </style>
    </section>
  );
}
