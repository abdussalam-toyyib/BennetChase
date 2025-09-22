

import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

import logo from "../../assets/Bennett-Chase-Logo-white.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#21194E] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <img src={logo} alt="logo" width={200} height={100} className="pb-10" />
          <p className="text-sm leading-relaxed mb-4">
            Expert Accounting & Advisory Services committed to your financial clarity and success.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">Service</a>
            </li>
            <li>
              <a href="#industries" className="hover:text-white transition">Industries</a>
            </li>
            {/* <li>
              <a href="#testimonials" className="hover:text-white transition">Testimonial</a>
            </li> */}
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Business Accounting
            </li>
            <li>
              Tax Planning
            </li>
            <li>
              Audit & Assurancey
            </li>
            <li>
              Payroll & Bookkeeping
            </li>
            <li>
              Financial Advisory
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2 text-gray-300">
              <FiMapPin className="mt-1 text-lg flex-shrink-0 text-white" />
              <span className="leading-relaxed">
                8708 Technology Forest Pl Suite <br />
                126 – B The Woodlands, TX 77381
              </span>
            </li>
            <li className="flex items-center space-x-2 text-gray-300">
              <FiPhone className="text-lg flex-shrink-0 text-white" />
              <a href="tel:+442012345678" className="hover:text-gray-100 transition duration-300">
                402-555-9876
              </a>
            </li>
            <li className="flex items-center space-x-2 text-gray-300">
              <FiMail className="text-lg flex-shrink-0 text-white" />
              <a href="mailto:info@bennettchase.com" className="hover:text-gray-100 transition duration-300">
                info@bennettchase.com
              </a>
            </li>
          </ul>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-start text-xs text-white md:mx-10 lg:mx-15 ">
        &copy; {new Date().getFullYear()} Bennet & Chase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
