

import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import logo from "../../assets/Bennett-Chase-Logo-white.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151457] text-white">
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
            <li>
              <a href="#testimonials" className="hover:text-white transition">Testimonial</a>
            </li>
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
              <a href="#" className="hover:text-white transition">Business Accounting</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Tax Planning</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Audit & Assurancey</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Payroll & Bookkeeping</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Financial Advisory</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">Blogs</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Client Portal</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Case Studies</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Insights</a>
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
