import { FiLinkedin, FiMail, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 mt-5">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/icon2.png" 
                alt="Fiery Network" 
                className="h-10 mr-3"
              />
              
            </div>
            <p className="text-gray-300 mb-6">
              We ghostwrite bold content for CEOs and founders who want to dominate LinkedIn and build authority that drives growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF4040] transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#DAA520]">Navigate</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FF4040]">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="text-[#DAA520] mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:hello@fierynetwork.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@fierynetwork.com
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="text-[#FF4040] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon-Fri: 9AM-5PM EST
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Ready to Dominate?</h3>
            <p className="text-gray-300 mb-6">
              Book a free 15-minute strategy call to discuss your content needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-[#DAA520] to-[#FF4040] text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Copyright + Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Fiery Network. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;