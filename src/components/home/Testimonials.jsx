import { FiLinkedin, FiMessageSquare, FiUserPlus, FiBarChart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since working with Fiery, my content finally reflects how I think. Direct leads and speaking invites increased 3x.",
      author: "B2B SaaS Founder",
      results: [
        { icon: <FiUserPlus className="text-[#DAA520]" />, text: "42% more profile views" },
        { icon: <FiLinkedin className="text-[#FF4040]" />, text: "2.8x connection requests" }
      ]
    },
    {
      quote: "They captured my voice perfectly. Our last post attracted two investor intros and a Fortune 500 partnership.",
      author: "AI Startup CEO",
      results: [
        { icon: <FiBarChart className="text-[#DAA520]" />, text: "5.1x engagement rate" },
        { icon: <FiMessageSquare className="text-[#FF4040]" />, text: "17 inbound leads" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8F0] px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Trusted by </span>
            <span className="text-[#FF4040]">Growth Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-performing CEOs and investors trust Fiery to amplify their message.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-[#FF4040]"
            >
              <blockquote className="mb-6">
                <p className="text-xl italic text-gray-700">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center mb-6">
                <div className="bg-[#FFE4C4] w-12 h-12 rounded-full flex items-center justify-center text-[#FF4040] font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">Verified Client</p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-3">
                {testimonial.results.map((result, i) => (
                  <div key={i} className="flex items-center">
                    <span className="mr-3">{result.icon}</span>
                    <span className="text-gray-700">{result.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-[#FF4040] hover:bg-[#E63939] text-white px-8 py-3 rounded-md font-bold text-lg shadow-md hover:shadow-lg transition-all"
          >
            <FiLinkedin className="mr-2" />
            Amplify Your Voice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;