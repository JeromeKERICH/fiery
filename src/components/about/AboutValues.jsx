
import { FiZap, FiLock, FiUser, FiTrendingUp, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CoreValues = () => {
  const values = [
    {
      icon: <FiZap className="text-[#FF4040] text-3xl" />,
      title: "Bold Authenticity",
      description: "We amplify your true voice—no generic templates or borrowed brilliance",
      color: "from-[#FF4040]/10 to-[#FF4040]/5"
    },
    {
      icon: <FiLock className="text-[#DAA520] text-3xl" />,
      title: "Strategic Discipline",
      description: "Every post drives toward measurable business outcomes",
      color: "from-[#DAA520]/10 to-[#DAA520]/5"
    },
    {
      icon: <FiUser className="text-[#FF4040] text-3xl" />,
      title: "Founder-First",
      description: "We adapt to your schedule, not the other way around",
      color: "from-[#FF4040]/10 to-[#FF4040]/5"
    },
    {
      icon: <FiTrendingUp className="text-[#DAA520] text-3xl" />,
      title: "Relentless Growth",
      description: "We evolve alongside your leadership journey",
      color: "from-[#DAA520]/10 to-[#DAA520]/5"
    },
    {
      icon: <FiAward className="text-[#FF4040] text-3xl" />,
      title: "Uncompromising Quality",
      description: "If we wouldn't publish it under our name, we won't publish it under yours",
      color: "from-[#FF4040]/10 to-[#FF4040]/5"
    },
    {
        icon: <FiZap className="text-[#DAA520] text-3xl" />,
        title: "Impactful Storytelling",
        description: "We craft narratives that resonate and convert",
        color: "from-[#DAA520]/10 to-[#DAA520]/5"
    }

  ];

  return (
    <section className="py-10 px-4 md:px-30 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-gray-800">The Fiery </span>
            <span className="text-[#FF4040]">Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These aren't just values—they're the non-negotiables behind every piece of content we create.
          </p>
        </div>

        {/* Interactive Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              className={`bg-gradient-to-b ${value.color} p-6 rounded-xl border border-transparent hover:border-[#FF4040]/20 cursor-default transition-all h-full`}
            >
              <div 
                
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-5 mx-auto"
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Animated CTA */}
        <div
          className="mt-20 text-center"
        >
          <Link 
            to="/process" 
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4040] to-[#DAA520] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-bold border-2 border-transparent group-hover:border-[#FF4040]/10 transition-all">
              See Our Process in Action →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;