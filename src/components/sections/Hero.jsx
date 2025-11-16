import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const carouselSlides = [
    {
        title: 'Advanced Payment Solutions',
        subtitle: 'for India\'s boldest disruptors',
        description: '100+ Payment Methods | Easy Integration | Powerful Dashboard',
        image: '/payment-processing-dashboard-modern-fintech.jpg',
  },
    {
        title: 'Global Payment Platform',
        subtitle: 'Accept from 150+ countries',
        description: 'Process payments in 130+ currencies with instant settlements',
        image: '/global-payments-world-map-transactions.jpg',
    },
    {
        title: 'Complete Finance Suite',
        subtitle: 'Payments, Payouts & Payroll',
        description: 'All-in-one solution for your growing business needs',
        image: '/finance-dashboard-analytics-charts.jpg',
    },
]

export default function Hero() {
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const ctaRef = useRef(null)
    const badgeRef = useRef(null)
    const imageRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 })
                .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.2)
                .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
                .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
                .fromTo(imageRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, 0.3)
        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current, { opacity: 0.5, y: 10 }, { opacity: 1, y: 0, duration: 0.6 })
            gsap.fromTo(descRef.current, { opacity: 0.5, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
            gsap.fromTo(imageRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.2)
        })
        return () => ctx.revert()
    }, [currentSlide])

    const slide = carouselSlides[currentSlide]

    return (
        <section id="home" className="relative min-h-screen pt-20 md:pt-32 pb-12 overflow-hidden bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content with Carousel */}
                    <div className="space-y-6 md:space-y-8 z-10">
                        <div
                            ref={badgeRef}
                            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs md:text-sm font-medium text-blue-600">Trusted by 10M+ Businesses</span>
                        </div>

                        <div ref={titleRef} className="space-y-4 min-h-24 md:min-h-32">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                                {slide.title}
                                <span className="text-blue-600"> {slide.subtitle}</span>
                            </h1>
                        </div>

                        <div ref={descRef} className="space-y-4 min-h-8 md:min-h-10">
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                {slide.description}
                            </p>
                        </div>

                        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base">
                                Sign Up Now
                                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                                <Play className="w-4 h-4" />
                                Know More
                            </button>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center gap-3 md:gap-4 pt-6 md:pt-8">
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                                className="p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                <ChevronLeft className="w-4 md:w-5 h-4 md:h-5" />
                            </button>
                            <div className="flex gap-2">
                                {carouselSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 md:h-3 rounded-full transition-all ${
                                            index === currentSlide ? 'bg-blue-600 w-6 md:w-8' : 'bg-blue-200 w-2 md:w-3'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
                                className="p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
                            </button>
                        </div>

                        {/* Trust Stats */}
                        <div className="flex flex-col gap-4 pt-6 md:pt-8 border-t border-slate-200">
                            <div className="flex flex-wrap gap-6 md:gap-8">
                                <div>
                                    <p className="text-xl md:text-2xl font-bold text-blue-600">150K+</p>
                                    <p className="text-xs md:text-sm text-slate-600">Businesses</p>
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl font-bold text-blue-600">100+</p>
                                    <p className="text-xs md:text-sm text-slate-600">Payment Methods</p>
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl font-bold text-blue-600">₹50B+</p>
                                    <p className="text-xs md:text-sm text-slate-600">Transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Full-Width Carousel Image */}
                    <div
                        ref={imageRef}
                        className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50 border border-blue-100 shadow-xl"
                    >
                        <img
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none">
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}