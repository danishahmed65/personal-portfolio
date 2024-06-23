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
      className="mt-18 min-h-[85vh] lg:min-h-[78vh] py-16 flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12 mt-18 lg:mt-0">
          <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
            <motion.h1 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7}}
            className="text-2xl lg:text-2xl font-bold leading-tight mb-4">Hi, It's Me!</motion.h1>
            {/* Frammer Motion For H1*/}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}
              className="text-3xl lg:text-6xl font-bold leading-tight mb-4"
            >
              DANISH <span>AHMED</span>
            </motion.h1>
            {/* Frammer Motion For Div*/}
            <motion.div 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}  className="mb-6 text-lg lg:text-2xl font-semibold">
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Designer",
                  2000,
                  "Database Engineer",
                ]}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* Frammer Motion For Paragraph*/}
            <motion.p 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}} className="mb-4">
              Crafting sleek websites with modern tech, prioritizing clean code
              and seamless user experiences.
            </motion.p>
            {/* Most Edited Section By Me and ChatGPT Hahaha! */}
            {/* Framer Motion For Button Div */}
            <motion.div 
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}  
              className="lg:flex lg:items-start">
              <button className="btn btn-lg mb-6 lg:mr-3 lg:mb-0"
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              >
                Contact Me!
              </button>
              {/* Framer Motion For Icons Div */}
              <motion.div 
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}} 
              className="flex items-center justify-center lg:ml-6 lg:mt-3.5">
                <a href="https://github.com/danishahmed65" target="blank" className="mr-5 text-white-500 hover:text-blue-700">
                  <FaGithub className="w-8 h-8" />
                </a>
                <a href="https://github.com/danishahmed65" target="blank" className="mr-4 text-white-500 hover:text-blue-700">
                  <FaDribbble className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/danish-ahmed-b8a508229/" target="blank" className="text-white-500 hover:text-blue-700">
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          {/* Image With Frammer Motion */}
          <motion.div 
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7}}   
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[282px]">
            <img src={Image} alt="" className="w-64 h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
