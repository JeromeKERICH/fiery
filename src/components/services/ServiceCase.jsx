import { FiArrowUpRight, FiDollarSign, FiUserPlus, FiBarChart2, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const studies = [
    {
      id: 1,
      title: "From Silent Founder to Industry Voice",
      client: "B2B SaaS CEO",
      challenge: "Raised $2M but had no personal brand to attract Series A investors",
      solution: "12-month Flame Package + Investor Content Suite",
      results: [
        { icon: <FiDollarSign className="text-[#DAA520]" />, metric: "$4.2M", label: "Series A closed" },
        { icon: <FiUserPlus className="text-[#FF4040]" />, metric: "29%", label: "More inbound investor intros" },
        { icon: <FiBarChart2 className="text-[#DAA520]" />, metric: "5.3x", label: "Engagement increase" }
      ],
      quote: "Fiery built me a content system that made investors come to us. Their investor-focused posts became our secret fundraising weapon.",
      link: "/case-studies/saas-ceo"
    },
    {
      id: 2,
      title: "Talent Magnet Transformation",
      client: "AI Startup Founder",
      challenge: "Couldn't compete with Big Tech for top ML engineers",
      solution: "6-month Spark Package + Talent Narrative Development",
      results: [
        { icon: <FiUserPlus className="text-[#FF4040]" />, metric: "83", label: "Quality applicants/month" },
        { icon: <FiMessageSquare className="text-[#DAA520]" />, metric: "12", label: "Unsolicited referrals" },
        { icon: <FiDollarSign className="text-[#FF4040]" />, metric: "40%", label: "Lower hiring costs" }
      ],
      quote: "We went from desperate outreach to engineers sliding into my DMs. The 'Day in the Life' series changed everything.",
      link: "/case-studies/ai-founder"
    }
  ];

  return (
    <section className="bg-[#FFF8F0] px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Real </span>
            <span className="text-[#FF4040]">Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            How visionary leaders scaled their influence and achieved business goals through strategic content.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {studies.map((study) => (
            <div 
              key={study.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-l-4 border-[#FF4040]"
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{study.title}</h3>
                <p className="text-[#FF4040] font-medium">{study.client}</p>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {/* Challenge/Solution */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-700 mb-3">Challenge</h4>
                    <p className="text-gray-600 mb-6">{study.challenge}</p>
                    <h4 className="font-bold text-gray-700 mb-3">Our Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-700 mb-3">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-[#FFF8F0] p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-1">{result.icon}</div>
                          <p className="font-bold text-gray-800">{result.metric}</p>
                          <p className="text-xs text-gray-600">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[#FFF8F0] p-6 rounded-lg relative">
                  <div className="absolute -top-3 left-6 text-4xl text-gray-300">"</div>
                  <p className="italic text-gray-700 mb-4 relative z-10">"{study.quote}"</p>
                  <Link 
                    to={study.link} 
                    className="inline-flex items-center text-[#FF4040] font-medium hover:underline"
                  >
                    Read full case study <FiArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/case-studies" 
            className="inline-block border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-8 py-3 rounded-md font-bold transition-colors mr-4"
          >
            View All Case Studies
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;