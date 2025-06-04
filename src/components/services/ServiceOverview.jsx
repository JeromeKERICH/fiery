import { FiTarget, FiBarChart2, FiUser, FiBriefcase } from "react-icons/fi";

const ServicesOverview = () => {
  return (
    <section className="py-24 px-4 bg-[#FFF8F0]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Content That </span>
            <span className="text-[#FF4040]">Builds Authority</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic ghostwriting for leaders who want to dominate LinkedIn without sacrificing focus.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <FiTarget className="text-[#FF4040] text-3xl mb-4" />,
              title: "Investor Attention",
              desc: "Position yourself for funding rounds"
            },
            {
              icon: <FiBarChart2 className="text-[#DAA520] text-3xl mb-4" />,
              title: "Lead Generation",
              desc: "Attract ideal clients passively"
            },
            {
              icon: <FiUser className="text-[#FF4040] text-3xl mb-4" />,
              title: "Talent Magnet",
              desc: "Draw top-tier team members"
            },
            {
              icon: <FiBriefcase className="text-[#DAA520] text-3xl mb-4" />,
              title: "Strategic Alliances",
              desc: "Spark partnerships & collaborations"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-b-4 border-transparent hover:border-[#FF4040]"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Explanation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="bg-[#FFE4C4] min-h-80 flex items-center justify-center p-10">
              <img 
                src="assets/services.jpg" 
                alt="Content creation process" 
                className="w-full max-w-md"
              />
            </div>
            
            {/* Right Column - Steps */}
            <div className="p-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                <span className="text-[#DAA520]">How We </span>
                Make It Effortless
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Voice Extraction",
                    desc: "We immerse in your tone through interviews and past content"
                  },
                  {
                    step: "2",
                    title: "Strategic Blueprint",
                    desc: "Custom content plan aligned to your business goals"
                  },
                  {
                    step: "3",
                    title: "Ghostwriting",
                    desc: "Posts drafted, revised, and scheduled for you"
                  },
                  {
                    step: "4",
                    title: "Performance Tracking",
                    desc: "Monthly reports with optimization insights"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="bg-[#FF4040] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;