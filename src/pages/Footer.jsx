import React from "react";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

const links = [
  { 
    href: "https://github.com/sourav0012", 
    target: "_blank",
    icon: <FaGithub />,
    label: "Github",
    color: "hover:text-indigo-400"
  },
  { 
    href: "https://www.linkedin.com/in/sourav-mondal-5b4283214/", 
    target: "_blank",
    icon: <FaLinkedin />,
    label: "Linkedin",
    color: "hover:text-blue-400"
  },
  { 
    href: "https://www.behance.net/souravmondal51", 
    target: "_blank",
    icon: <FaBehance />,
    label: "Behance",
    color: "hover:text-blue-600"
  },
  { 
    href: "https://www.instagram.com/_._.sourav_.___/", 
    target: "_blank",
    icon: <FaInstagram />,
    label: "Instagram",
    color: "hover:text-pink-400"
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side - Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-white tracking-wider">My-Portfoloo</h3>
            </div>
            <p className="text-gray-400 text-sm font-light tracking-wide">
              ©2025 Portfolio. All rights reserved
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-gray-900 border border-gray-700 text-gray-400 transition-all duration-300 ease-in-out hover:scale-110 hover:border-gray-500 ${link.color}`}
                aria-label={link.label}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right Side - Additional Info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Built with passion & creativity
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>by Sourav</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - Divider */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Terms of Service</span>
            {/* <span className="text-gray-700">•</span> */}
            {/* <span className="hover:text-gray-300 cursor-pointer transition-colors duration-300">Contact</span> */}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
      </div>
    </footer>
  );
};

export default Footer;