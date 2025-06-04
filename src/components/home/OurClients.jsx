import { FaAward, FaBriefcase, FaUserSecret } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuZapOff } from "react-icons/lu";

const WhoWeServe = () => {
  const clientTypes = [
    {
      icon: <LuZapOff className="text-[#FF4040] text-3xl" />,
      title: "Early/Growth-Stage Founders",
      description: "You're building fast and need content that attracts investors and talent."
    },
    {
      icon: <FaUserSecret className="text-[#DAA520] text-3xl" />,
      title: "CEOs Building Trust",
      description: "Establish authority with your team and stakeholders through consistent messaging."
    },
    {
      icon: <FaBriefcase className="text-[#FF4040] text-3xl" />,
      title: "Business Owners",
      description: "Scale your influence to attract premium clients without writing yourself."
    },
    {
      icon: <FaAward className="text-[#DAA520] text-3xl" />,
      title: "Thought Leaders",
      description: "Amplify your IP and become the go-to voice in your industry."
    }
  ];

  return (
    <section className="bg-[#FFF8F0] py-10 md:px-30 sm:px-15 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">We Work With </span>
            <span className="text-[#FF4040]">Leaders Who Move Fast</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your voice has power. It matters. Let’s make sure it’s heard clearly, consistently, and strategically.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 border-l-4 border-[#FF4040]"
            >
              <div className="mb-4">{client.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Footnote */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-gray-700">
            <span className="font-semibold text-[#DAA520]">Not a writer?</span> No problem. That’s what we’re here for.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#FF4040] hover:bg-[#E63939] text-white px-8 py-3 rounded-md font-bold shadow-md hover:shadow-lg transition-all"
          >
            Claim Your Voice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;