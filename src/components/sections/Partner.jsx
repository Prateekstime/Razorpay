'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'Swiggy', category: 'Food Delivery' },
  { name: 'Unacademy', category: 'EdTech' },
  { name: 'Cred', category: 'FinTech' },
  { name: 'AJIO', category: 'E-commerce' },
  { name: 'Myntra', category: 'Fashion' },
  { name: 'Dream11', category: 'Gaming' },
  { name: 'Booking.com', category: 'Travel' },
  { name: 'Flipkart', category: 'E-commerce' },
  { name: 'Zomato', category: 'Food Delivery' },
  { name: 'Urban Company', category: 'Services' },
  { name: 'OYO', category: 'Hospitality' },
  { name: 'PharmEasy', category: 'Healthcare' },
]

export default function Partners() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const scroll = scrollRef.current
    const scrollWidth = scroll.scrollWidth
    const clientWidth = scroll.clientWidth

    const tl = gsap.timeline({ repeat: -1 })
    tl.to(scroll, {
      scrollLeft: scrollWidth - clientWidth,
      duration: 80,
      ease: 'none',
    })
    .set(scroll, { scrollLeft: 0 }, '+=0')

    if (window.innerWidth < 768) {
      tl.timeScale(0.7)
    }
  }, [])

  useEffect(() => {
    gsap.fromTo(
      containerRef.current?.querySelector('h2'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Razorpay grows with you!
          </h2>
          <p className="text-lg text-slate-600">
            1,50,000+ Businesses from startups to enterprises trust Razorpay
          </p>
        </div>

    
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4 mb-16"
          style={{ scrollBehavior: 'auto', scrollbarWidth: 'none' }}
        >
       
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 min-w-max border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-slate-900 mb-1">{partner.name}</div>
                <div className="text-sm text-slate-500">{partner.category}</div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '150K+', label: 'Businesses' },
            { value: '$500B+', label: 'Payments Processed' },
            { value: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-3">{stat.value}</div>
              <div className="text-slate-600 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}