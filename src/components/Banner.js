import React from "react";
// Images
import Image from "../assets/myavater.jpg";
// icons
import { FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";
// animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-no-repeat bg-cover pt-48 pb-32 min-h-[100vh] md:bg-site lg:bg-site"
      id="home"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            {/* Greeting */}
            <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}
              className="mb-4"
            >
              <h2 className="text-sm lg:text-base font-light text-white mb-1 tracking-wider uppercase">
                Hello, I'm
              </h2>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}
              className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-white"
            >
              DANISH <span className="text-blue-400">AHMED</span>
            </motion.h1>

            {/* Role Animation */}
            <motion.div 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}  
              className="mb-6 text-lg lg:text-xl font-medium"
            >
              <span className="text-white">I'm a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Database Engineer",
                  2000,
                ]}
                className="text-blue-400 font-semibold"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}} 
              className="mb-8 text-sm lg:text-base text-white leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Crafting sleek websites with modern tech, prioritizing clean code
              and seamless user experiences.
            </motion.p>

            {/* CTA Buttons and Social Links */}
            <motion.div 
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}  
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Contact Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl shadow-md text-sm"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/danishahmed65" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 bg-white/5 hover:bg-white/15 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/danishahmed65" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 bg-white/5 hover:bg-white/15 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaDribbble className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/danish-ahmed-b8a508229/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 bg-white/5 hover:bg-white/15 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7}}   
            className="hidden md:flex flex-1 justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-blue-500/20 shadow-xl">
                <img 
                  src={Image} 
                  alt="Danish Ahmed" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
