import { useState, useRef } from 'react'
import { ArrowRight, X, Check, Zap, Shield, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

const productCategories = [
    {
        id: 'payments',
        title: 'Accept Payments',
        subtitle: 'Top Products',
        products: [
            {
                title: 'Payment Gateway',
                description: 'Offer a seamless payment experience on your website or app',
                gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
                badge: 'NO CODE',
                details: ['Easy integration', 'Real-time tracking', '100+ methods', 'Smart routing', 'Auto-retry'],
                stats: { value: '99.9%', label: 'Uptime' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Lightning fast checkout' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Bank-grade security' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Higher conversions' }
                ]
            },
            {
                title: 'Payment Button',
                description: 'Effortlessly add a Pay Now button without any coding required',
                gradient: 'from-emerald-400 via-green-500 to-teal-600',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                badge: 'NO CODE',
                details: ['No coding needed', 'Fast setup', 'Instant notifications', 'Mobile optimized', 'Custom themes'],
                stats: { value: '2 mins', label: 'Setup time' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Quick deployment' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Secure payments' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Boost sales' }
                ]
            },
            {
                title: 'Payment Links',
                description: 'Create and share links over email, text and social',
                gradient: 'from-amber-400 via-orange-500 to-red-600',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                badge: 'NO CODE',
                details: ['Share anywhere', 'Track payments', 'Custom branding', 'QR codes', 'Bulk creation'],
                stats: { value: '10M+', label: 'Links created' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Instant creation' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Safe transactions' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Track performance' }
                ]
            },
            {
                title: 'Razorpay POS',
                description: 'Accept seamless in-store payments with industry-best solution',
                gradient: 'from-purple-400 via-pink-500 to-rose-600',
                image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
                details: ['Quick payments', 'Inventory sync', 'Analytics', 'Receipt printing', 'Multi-location'],
                stats: { value: '50K+', label: 'Merchants' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Rapid checkout' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Offline mode' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Sales insights' }
                ]
            },
        ]
    },
    {
        id: 'payouts',
        title: 'Make Payouts',
        subtitle: 'Payout Solutions',
        products: [
            {
                title: 'API & Bulk Payouts',
                description: 'Make multiple payouts with a single click from your dashboard',
                gradient: 'from-blue-400 via-indigo-500 to-purple-600',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                details: ['Bulk processing', 'API integration', 'Automated workflows', 'Real-time status', 'Smart routing'],
                stats: { value: '1M+', label: 'Payouts/day' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Instant transfers' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Secure platform' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Cost efficient' }
                ]
            },
            {
                title: 'Source to Pay',
                description: 'Control and optimize vendor payments with an integrated solution',
                gradient: 'from-cyan-400 via-teal-500 to-green-600',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
                details: ['Vendor management', 'Payment scheduling', 'Invoice tracking', 'Approval workflows', 'GST compliance'],
                stats: { value: '5K+', label: 'Vendors' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Streamlined process' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Audit trails' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Better control' }
                ]
            },
            {
                title: 'Payout Links',
                description: 'Share payout links for instant payments, no bank details needed',
                gradient: 'from-orange-400 via-red-500 to-pink-600',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                details: ['No bank details', 'Instant payments', 'Custom branding', 'Track status', 'Multiple channels'],
                stats: { value: '100K+', label: 'Links sent' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Quick sharing' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Secure links' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Fast payouts' }
                ]
            },
            {
                title: 'Tax Payments',
                description: 'Online tax payments in a single click',
                gradient: 'from-emerald-400 via-green-500 to-teal-600',
                image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop',
                details: ['GST payments', 'TDS payments', 'Advance tax', 'Auto-calculation', 'Compliance reports'],
                stats: { value: '99%', label: 'Success rate' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'One-click filing' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Fully compliant' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Save time' }
                ]
            },
        ]
    },
    {
        id: 'banking',
        title: 'Start Business Banking',
        subtitle: 'Banking Solutions',
        products: [
            {
                title: 'Account Insights',
                description: 'Get deep insights into your business finances',
                gradient: 'from-blue-400 via-cyan-500 to-teal-600',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                details: ['Real-time analytics', 'Cash flow tracking', 'Expense categorization', 'Custom reports', 'Forecasting'],
                stats: { value: '24/7', label: 'Access' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Live updates' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Secure data' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Smart insights' }
                ]
            },
            {
                title: 'Corporate Cards',
                description: 'Smart corporate cards for your team expenses',
                gradient: 'from-purple-400 via-indigo-500 to-blue-600',
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
                details: ['Virtual & physical', 'Spend controls', 'Real-time tracking', 'Rewards program', 'Easy reconciliation'],
                stats: { value: '2%', label: 'Cashback' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Instant issuance' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Fraud protection' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Better control' }
                ]
            },
            {
                title: 'Current Account',
                description: 'Open a zero-balance current account in minutes',
                gradient: 'from-green-400 via-emerald-500 to-teal-600',
                image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
                details: ['Zero balance', 'Instant activation', 'Free transfers', 'API access', 'Integrated banking'],
                stats: { value: '0₹', label: 'Balance required' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Quick setup' },
                    { icon: <Shield className="w-5 h-5" />, text: 'RBI approved' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'No fees' }
                ]
            },
            {
                title: 'Integrations',
                description: 'Connect with your favorite accounting tools',
                gradient: 'from-amber-400 via-orange-500 to-red-600',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                details: ['Tally integration', 'Zoho Books', 'QuickBooks', 'SAP sync', 'Custom APIs'],
                stats: { value: '50+', label: 'Integrations' },
                features: [
                    { icon: <Zap className="w-5 h-5" />, text: 'Seamless sync' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Data security' },
                    { icon: <TrendingUp className="w-5 h-5" />, text: 'Automated workflows' }
                ]
            },
        ]
    }
]

export default function EnhancedProducts() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const scrollContainerRef = useRef(null)

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const currentCategory = productCategories[activeCategory]

    return (
        <>
            <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            Everything your business needs
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Powerful solutions to grow and scale your business
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {productCategories.map((category, index) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(index)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === index
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Products Horizontal Scroll */}
                    <div className="relative group">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-50 -translate-x-6"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-700" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-50 translate-x-6"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-700" />
                        </button>

                        {/* Scrollable Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {currentCategory.products.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-80 snap-center group/card cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                                        {/* Image with Gradient Overlay */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40 group-hover/card:opacity-40 transition-opacity duration-500`}></div>

                                          

                                           
                                         
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover/card:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                                {product.description}
                                            </p>

                                            {/* Quick features */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.details.slice(0, 3).map((detail, i) => (
                                                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                                        {detail}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                                <span className="text-blue-600 font-semibold text-sm">Learn More</span>
                                                <ArrowRight className="w-5 h-5 text-blue-600 group-hover/card:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-blue-400 rounded-2xl transition-colors duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Get Started CTA */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Enhanced Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with Image */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${selectedProduct.gradient} opacity-80`}></div>

                            <div className="absolute inset-0 flex items-center justify-between p-8 text-white">
                                <div>
                                    <div className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                                        {selectedProduct.stats.value} {selectedProduct.stats.label}
                                    </div>
                                    <h3 className="text-4xl font-bold mb-2">{selectedProduct.title}</h3>
                                    <p className="text-white/90 text-lg">{selectedProduct.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {/* Features grid */}
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {selectedProduct.features.map((feature, i) => (
                                        <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                                            <div className="text-blue-600 mb-3">
                                                {feature.icon}
                                            </div>
                                            <span className="text-slate-700 font-semibold">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mb-">
                                <h4 className="text-2xl font-bold text-slate-900 mb-6">Everything You Need</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedProduct.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="flex-1 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                                    View Documentation
                                </button>
                            </div>
                        </div>
                    </div>
      
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
}