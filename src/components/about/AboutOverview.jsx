import { FiZap, FiFeather, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";

const AboutOverview = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#FFF8F0] to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF4040] opacity-5 -rotate-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#DAA520] opacity-5 rotate-12 -translate-x-20"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Headline + mission */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="block text-gray-800 mb-3">Your Voice Is</span>
              <span className="bg-gradient-to-r from-[#DAA520] to-[#FF4040] bg-clip-text text-transparent">
                Your Power
              </span>
            </h1>
            
            <div className="prose-xl text-gray-600 space-y-6 mb-8">
              <p>
                Fiery Network was born from a simple truth: even the most ambitious founders and CEOs get drowned out in the digital noise while building their ventures.
              </p>
              <p className="font-medium text-gray-800 border-l-4 border-[#FF4040] pl-4 py-1">
                "Your story doesn't get told when you're too busy writing the future."
              </p>
              <p>
                We exist to change that - amplifying visionary leaders through strategic storytelling that builds authority and attracts opportunity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-[#FF4040] hover:bg-[#E63939] text-white px-6 py-3 rounded-md font-bold shadow-lg hover:shadow-xl transition-all text-center"
              >
                Explore Our Approach
              </Link>
              <Link 
                to="/team" 
                className="border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-6 py-3 rounded-md font-bold transition-all text-center"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Right column - Visual pillars */}
          <div className="space-y-6">
            {[
              {
                icon: <FiZap className="text-[#FF4040] text-2xl" />,
                title: "Cut Through the Noise",
                desc: "We make your voice heard above the crowd"
              },
              {
                icon: <FiFeather className="text-[#DAA520] text-2xl" />,
                title: "Authentic Storytelling",
                desc: "Content that sounds unmistakably like you"
              },
              {
                icon: <FiTarget className="text-[#FF4040] text-2xl" />,
                title: "Strategic Impact",
                desc: "Every post drives toward business goals"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-transparent hover:border-[#DAA520] transition-all"
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${index % 2 === 0 ? 'bg-[#FFF0F0]' : 'bg-[#FFF8E0]'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;