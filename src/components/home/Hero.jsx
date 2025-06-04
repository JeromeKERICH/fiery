import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#FFF8F0] pt-32 pb-10 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <path 
            d="M404 0H0v784l404-784z" 
            fill="#FF4040" 
          />
        </svg>
      </div>

      <div className="container mx-auto md:px-30 sm:px-15 px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="block text-gray-800">Build Influence.</span>
              <span className="block text-[#DAA520]">Own the Conversation.</span>
              <span className="block text-[#FF4040]">Lead with Authority.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We ghostwrite bold content for CEOs, founders, and business leaders who want to dominate LinkedIn and build authority that drives growth.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-[#FF4040] hover:bg-[#E63939] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Book a Strategy Call
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 text-center"
              >
                Explore Packages
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#DAA520] rounded-lg z-0"></div>
              <img 
                src="/assets/hero.jpg" 
                alt="CEO building authority on LinkedIn" 
                className="relative z-10 rounded-lg shadow-2xl w-full max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;