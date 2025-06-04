import { FiCheckCircle, FiZap, FiTrendingUp, FiLayers } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";

const ServicesPricing = () => {
  const packages = [
    {
      name: "Spark Package",
      tagline: "Brand Ignition",
      price: "$620",
      bestFor: "Founders starting their personal brand journey",
      ctaText: "Request Spark",
      featured: false,
      icon: <FiZap className="text-[#DAA520] text-4xl mb-4" />,
      features: [
        "3 ghostwritten LinkedIn posts/week",
        "Brand voice extraction call",
        "Profile optimization",
        "Monthly strategy call",
        "Post scheduling",
        "Monthly performance summary"
      ],
      outcome: "Your brand, visible and consistent, without lifting a finger."
    },
    {
      name: "Flame Package",
      tagline: "Authority Builder",
      price: "$1,070",
      bestFor: "Leaders scaling thought leadership",
      ctaText: "Request Flame",
      featured: true,
      icon: <FiTrendingUp className="text-[#FF4040] text-4xl mb-4" />,
      features: [
        "Everything in Spark PLUS:",
        "Up to 5 posts/week",
        "1 long-form article/month",
        "Personal storytelling series",
        "Bi-monthly carousel design",
        "Comment strategy"
      ],
      outcome: "Become a recognizable voice, trusted and followed."
    },
    {
      name: "Inferno Package",
      tagline: "Leader & Brand Combo",
      price: "$1,700",
      bestFor: "CEOs wanting personal + company page synergy",
      ctaText: "Request Inferno",
      featured: false,
      icon: <FiLayers className="text-[#DAA520] text-4xl mb-4" />,
      features: [
        "Everything in Flame PLUS:",
        "Company page ghostwriting (2-3 posts/week)",
        "Company voice guidelines",
        "Launch campaign content",
        "Team highlight series",
        "Performance analytics"
      ],
      outcome: "Your profiles become a high-converting duo."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
    }
  };

  // Auto-rotate on mobile
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFF8F0] py-10 md:px-30 sm:px-15 px-4" id="services">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-start md:text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">THREE TIERS OF </span> 
                                    <span className="text-[#FF4040]">Influence.</span>
            <span className="block text-[#DAA520]">One Clear Voice.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic content that attracts clients, talent, investors, and media—without you writing a word.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div 
          className="lg:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={sliderRef}
        >
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 "
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#FF4040]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Package Card Component
const PackageCard = ({ pkg }) => {
  return (
    <div className={`relative rounded-xl p-8 shadow-lg h-full ${
      pkg.featured 
        ? "border-2 border-[#FF4040] bg-white" 
        : "bg-white border border-gray-200"
    }`}>
      {pkg.featured && (
        <div className="absolute top-0 right-0 bg-[#FF4040] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        {pkg.icon}
        <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
        <p className="text-[#FF4040] font-medium">{pkg.tagline}</p>
        <p className="text-4xl font-bold my-4 text-gray-900">{pkg.price}</p>
        <p className="text-gray-600 italic">{pkg.bestFor}</p>
      </div>

      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <FiCheckCircle className="text-[#DAA520] mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="text-gray-800 font-medium mb-6">
          <span className="text-[#FF4040]">Outcome: </span>
          {pkg.outcome}
        </p>
        <button
          className={`w-full py-3 px-6 rounded-md font-bold transition-all ${
            pkg.featured
              ? "bg-[#FF4040] hover:bg-[#E63939] text-white shadow-md"
              : "border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white"
          }`}
        >
          {pkg.ctaText}
        </button>
      </div>
    </div>
  );
};

export default ServicesPricing;