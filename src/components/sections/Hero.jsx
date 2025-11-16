import { useEffect, useState } from "react"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import banner1 from "../../../public/images/banner1.png"
import banner2 from "../../../public/images/banner2.png"
import banner3 from "../../../public/images/banner3.png"
import banner4 from "../../../public/images/banner4.png"

const carouselSlides = [
  {
    title: "Advanced Payment Solutions",
    subtitle: "for India's boldest disruptors",
    description: "100+ Payment Methods | Easy Integration | Powerful Dashboard",
    image: banner1,
  },
  {
    title: "Global Payment Platform",
    subtitle: "Accept from 150+ countries",
    description: "Process payments in 130+ currencies with instant settlements",
    image: banner2,
  },
  {
    title: "Complete Finance Suite",
    subtitle: "Payments, Payouts & Payroll",
    description: "All-in-one solution for your growing business needs",
    image: banner3,
  },
  {
    title: "Advanced Finance Tools",
    subtitle: "Built for modern teams",
    description: "Streamline operations with automation and insights",
    image: banner4,
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // SMOOTH AUTO SLIDER — every 4 sec with transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        setIsTransitioning(false)
      }, 1000) // Transition duration
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSlideChange = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(newIndex)
      setIsTransitioning(false)
    }, 1000)
  }

  const slide = carouselSlides[currentSlide]

  return (
    <section className="relative min-h-screen pt-8 md:pt-18 pb-12 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with unified X-translate */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 transform ${
            isTransitioning 
              ? 'translate-x-full opacity-0' 
              : 'translate-x-0 opacity-100'
          }`}
        >
          
        
          <div className="space-y-6 md:space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-600">
                Trusted by 10M+ Businesses
              </span>
            </div>

            {/* Title */}
            <div className="relative overflow-hidden">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-900 leading-tight">
                {slide.title}{" "}
                <span className="text-blue-600">{slide.subtitle}</span>
              </h1>
            </div>

        
            <div className="relative overflow-hidden">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                Sign Up Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                <Play className="w-4 h-4" />
                Know More
              </button>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 ">
              <button
                onClick={() => handleSlideChange((currentSlide - 1 + carouselSlides.length) % carouselSlides.length)}
                className="p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-600 w-8 scale-110"
                        : "bg-blue-200 w-3 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleSlideChange((currentSlide + 1) % carouselSlides.length)}
                className="p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-blue-600">150K+</p>
                <p className="text-sm text-slate-600">Businesses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">100+</p>
                <p className="text-sm text-slate-600">Payment Methods</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">₹50B+</p>
                <p className="text-sm text-slate-600">Transactions</p>
              </div>
            </div>
          </div>

        
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden">
            <div 
              className={`w-full mt-8 bg-gradient-to-br from-blue-100 to-cyan-50 border border-blue-100 shadow-xl rounded-3xl overflow-hidden transition-all duration-1000 ${
                isTransitioning 
                  ? 'opacity-0 scale-105' 
                  : 'opacity-100 scale-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>

      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  )
}