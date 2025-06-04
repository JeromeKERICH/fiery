import { FiMic, FiFileText, FiVideo, FiUsers, FiGlobe } from "react-icons/fi";

const StrategicServices = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Beyond </span>
            <span className="text-[#FF4040]">Ghostwriting</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete authority-building solutions for elite founders and CEOs.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <FiMic className="text-[#FF4040] text-4xl mb-4" />,
              title: "Executive Thought Leadership",
              description: "Position yourself as the go-to expert in your space with our signature frameworks:",
              features: [
                "Industry trend commentary",
                "Contrarian position pieces",
                "Signature story development",
                "Media-ready talking points"
              ],
              cta: "Build Your IP"
            },
            {
              icon: <FiFileText className="text-[#DAA520] text-4xl mb-4" />,
              title: "Investor-Ready Profiles",
              description: "Optimize your digital presence for funding rounds:",
              features: [
                "Fundraising narrative development",
                "Board-friendly content strategy",
                "Due diligence prep materials",
                "Investor update templates"
              ],
              cta: "Attract Capital"
            },
            {
              icon: <FiVideo className="text-[#FF4040] text-4xl mb-4" />,
              title: "Launch Content Systems",
              description: "Coordinated campaigns for key business moments:",
              features: [
                "Product launch sequences",
                "Funding announcement strategy",
                "Executive promotion campaigns",
                "Crisis comms frameworks"
              ],
              cta: "Amplify Launches"
            },
            {
              icon: <FiUsers className="text-[#DAA520] text-4xl mb-4" />,
              title: "Talent Magnet Content",
              description: "Become the leader top performers want to work for:",
              features: [
                "Employer branding strategy",
                "Team culture storytelling",
                "Recruitment hooks development",
                "Leadership philosophy pieces"
              ],
              cta: "Win Top Talent"
            },
            {
              icon: <FiGlobe className="text-[#FF4040] text-4xl mb-4" />,
              title: "Global Expansion Narratives",
              description: "Establish authority in new markets:",
              features: [
                "Market-entry storytelling",
                "Cross-cultural positioning",
                "Localized content adaptation",
                "International media pitching"
              ],
              cta: "Go Global"
            },
            {
              icon: <div className="text-[#DAA520] text-4xl mb-4 font-bold">VIP</div>,
              title: "1:1 Executive Coaching",
              description: "For leaders who want to eventually write themselves:",
              features: [
                "Monthly strategy intensives",
                "Messaging masterclasses",
                "Media training",
                "Real-time content review"
              ],
              cta: "Get Coached"
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-[#FF4040] group"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 group-hover:text-[#FF4040] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 text-center">{service.description}</p>
              <ul className="mb-6 space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#FF4040] rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button className="border border-[#FF4040] text-[#FF4040] hover:bg-[#FF4040] hover:text-white px-6 py-2 rounded-md font-medium transition-colors">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-[#DAA520] to-[#FF4040] rounded-xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            For enterprise clients and executive teams, we build completely bespoke authority programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#FF4040] hover:bg-gray-100 px-8 py-3 rounded-md font-bold shadow-lg">
              Book Scoping Call
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF4040] px-8 py-3 rounded-md font-bold">
              Download Enterprise Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;