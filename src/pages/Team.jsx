import { useEffect } from "react";
import { FiLinkedin, FiMail, FiPenTool, FiCode, FiMessageSquare, FiFeather } from "react-icons/fi";
import { Link } from "react-router-dom";

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  const teamMembers = [
    {
      name: "Miriam Maru",
      role: "Ghostwriter & Content Strategist",
      specialty: "Brand Voice Development",
      bio: "Transforms complex ideas into compelling narratives that establish authority and engage audiences. Specializes in LinkedIn thought leadership.",
      icon: <FiFeather className="text-[#FF4040]" />,
      image: "assets/about.jpg"
    },
    {
      name: "Emmanuel Kerich",
      role: "Full-Stack Developer",
      specialty: "Web Solutions",
      bio: "Builds high-performance digital platforms that convert visitors to clients. Focused on scalable, results-driven technical solutions.",
      icon: <FiCode className="text-[#DAA520]" />,
      image: "assets/kerich.jpg"
    },
    {
      name: "Faith Grace",
      role: "Operations Manager",
      specialty: "Systems & Efficiency",
      bio: "Streamlines business processes and client workflows with certified expertise in Asana, Trello, and Google Workspace automation.",
      icon: <FiMessageSquare className="text-[#FF4040]" />,
      image: "assets/faith.jpg"
    },
    {
      name: "Fredrick Murimi",
      role: "Creative Director",
      specialty: "Visual Storytelling",
      bio: "Designs brand identities that communicate credibility instantly. Expert in converting abstract concepts into memorable visual assets.",
      icon: <FiPenTool className="text-[#DAA520]" />,
      image: "assets/freddie.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-[#FF4040] font-medium">OUR SPECIALISTS</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-[#DAA520]">Dream Team</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600">
              A curated team of experts working in harmony to elevate your digital presence.
            </p>
          </div>
        </div>

        {/* Team Grid - Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 w-full">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-sm">
                  {member.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-[#FF4040] font-medium text-sm">{member.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-[#0077B5] transition-colors">
                      <FiLinkedin size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#FF4040] transition-colors">
                      <FiMail size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-[#DAA520] text-xs font-semibold mb-3">{member.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-lg py-10 px-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-[#FF4040]">work together</span>?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We maintain a selective client roster to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-[#DAA520] to-[#FF4040] text-white px-6 py-3 rounded-md font-medium hover:shadow-md transition-all"
              >
                Start Your Project
              </Link>
              <Link 
                to="/about" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-[#FF4040] transition-colors"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;