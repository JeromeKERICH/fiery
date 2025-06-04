import { FiFlag, FiMessageSquare, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";

const FounderStory = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Story Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Why We Built </span>
            <span className="text-[#FF4040]">Fiery Network</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#DAA520] to-[#FF4040] mx-auto"></div>
        </div>

        {/* Core Narrative */}
        <div className="prose-lg text-gray-600 space-y-8 mb-12">
          <p>
            In 2022, while advising a brilliant SaaS CEO, we uncovered a painful truth: <span className="font-medium text-gray-800">the most transformative leaders often have the weakest online presence</span>. She had revolutionized her industry but struggled to articulate her vision in posts. "I sound like a robot when I write," she confessed.
          </p>
          
          <div className="border-l-4 border-[#FF4040] pl-6 py-2 my-6">
            <p className="text-xl italic text-gray-800">
              "Your voice is your most underutilized asset. The world needs to hear your story—not some sanitized corporate version."
            </p>
          </div>

          <p>
            That moment sparked Fiery Network. We combine <span className="text-[#DAA520] font-medium">founder empathy</span> with <span className="text-[#FF4040] font-medium">B2B growth expertise</span> to transform leaders into authentic, influential voices.
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FiFlag className="text-[#FF4040] text-3xl mb-3" />,
              title: "20+ Clients Served",
              desc: "From seed-stage to Fortune 500"
            },
            {
              icon: <FiMessageSquare className="text-[#DAA520] text-3xl mb-3" />,
              title: "1M+ Impressions",
              desc: "Collective monthly reach"
            },
            {
              icon: <FiAward className="text-[#FF4040] text-3xl mb-3" />,
              title: "4.9/5 Satisfaction",
              desc: "Average client rating"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FFF8F0] p-6 rounded-xl text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mt-2 mb-1 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#FFF8F0] to-[#FFE4C4] rounded-xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            <span className="text-[#FF4040]">Our Unshakable Belief: </span>
            Great Leaders Deserve Great Narratives
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Your personal brand is the lens through which investors, talent, and clients understand your vision. We exist to craft that lens with precision.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#FF4040] hover:bg-[#E63939] text-white px-8 py-3 rounded-md font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Build Your Legacy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;