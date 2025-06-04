import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiCalendar, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }
    , []);
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#FFF8F0] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-800">Let's </span>
          <span className="text-[#FF4040]">Light the Match</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We work with a limited number of clients per quarter to ensure quality.
        </p>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Option 1: Book Call */}
          <div className="border-2 border-[#FFE4C4] rounded-xl p-8 text-center hover:border-[#FF4040] transition-colors">
            <div className="bg-[#FF4040] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCalendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Strategy Call</h3>
            <p className="text-gray-600 mb-6">
              15-minute discovery call to assess your needs.
            </p>
            <a 
              href="https://calendly.com/fierynetwork/discovery" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF4040] hover:bg-[#E63939] text-white px-6 py-3 rounded-md font-medium"
            >
              Book Now
            </a>
          </div>

          {/* Option 2: Email */}
          <div className="border-2 border-[#FFE4C4] rounded-xl p-8 text-center hover:border-[#DAA520] transition-colors">
            <div className="bg-[#DAA520] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMail size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Email Us</h3>
            <p className="text-gray-600 mb-6">
              For detailed inquiries or existing clients.
            </p>
            <a 
              href="mailto:hello@fierynetwork.com" 
              className="inline-block border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Send Message
            </a>
          </div>

          {/* Option 3: LinkedIn */}
          <div className="border-2 border-[#FFE4C4] rounded-xl p-8 text-center hover:border-[#0077B5] transition-colors">
            <div className="bg-[#0077B5] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLinkedin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">LinkedIn</h3>
            <p className="text-gray-600 mb-6">
              Connect with us for content tips and updates.
            </p>
            <a 
              href="https://linkedin.com/company/fierynetwork" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0077B5] hover:bg-[#006097] text-white px-6 py-3 rounded-md font-medium"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-20 bg-[#FFF8F0] rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            <span className="text-[#FF4040]">Quick </span>
            Application
          </h2>
          <p className="text-gray-600 mb-8">
            Complete this form if you're ready to start within 14 days.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name*</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FF4040] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email*</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">LinkedIn Profile*</label>
              <input 
                type="url" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FF4040] focus:border-transparent"
                placeholder="https://linkedin.com/in/yourprofile"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Current Challenge</label>
              <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#DAA520] focus:border-transparent">
                <option>Select one...</option>
                <option>No time to post consistently</option>
                <option>Content doesn't attract opportunities</option>
                <option>Need better personal-brand strategy</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Anything else we should know?</label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FF4040] focus:border-transparent"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#DAA520] to-[#FF4040] text-white px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;