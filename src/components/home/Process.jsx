import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiCalendar, FiEdit2, FiBarChart2 } from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiSearch className="text-[#FF4040]" size={24} />,
      title: "Voice Extraction",
      description: "90-min deep dive to capture your unique communication style and strategic goals",
      accent: "from-[#FF4040]/10 to-[#FF4040]/30"
    },
    {
      icon: <FaRegLightbulb className="text-[#DAA520]" size={24} />,
      title: "Content Strategy",
      description: "Monthly theme roadmap aligned with your business milestones and audience needs",
      accent: "from-[#DAA520]/10 to-[#DAA520]/30"
    },
    {
      icon: <FiEdit2 className="text-[#FF4040]" size={24} />,
      title: "Seamless Execution",
      description: "Handcrafted posts delivered in your voice with 48-hour review cycles",
      accent: "from-[#FF4040]/10 to-[#FF4040]/30"
    },
    {
      icon: <FiBarChart2 className="text-[#DAA520]" size={24} />,
      title: "Performance Growth",
      description: "Bi-weekly analytics and quarterly strategy upgrades to maximize impact",
      accent: "from-[#DAA520]/10 to-[#DAA520]/30"
    }
  ];

  return (
    <section className="relative bg-white pt-2 md:px-30 sm:px-15 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4040] to-[#DAA520]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-[#FF4040] uppercase">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="text-gray-900">Thought Leadership</span>
            <span className="block text-[#DAA520]">Engine, Automated</span>
          </h2>
          <p className="mt-5 text-lg  text-start md:text-center text-gray-600 max-w-3xl mx-auto">
            While you focus on scaling, we handle the complete content lifecycle with military precision.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mb-20"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${step.accent} rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              <div className="relative h-full bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-inner flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                <div className="absolute bottom-6 right-6 text-2xl font-bold text-gray-100 group-hover:text-[#FF4040]/20 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;