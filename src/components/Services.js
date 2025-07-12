import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Services Data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Crafting intuitive digital interfaces that captivate users and drive results.',
    link: 'Learn More'
  },
  {
    name: 'Web Development',
    description: 'Building responsive websites with latest technologies for optimal performance.',
    link: 'Learn More'
  },
  {
    name: 'Database Design',
    description: 'Designing efficient database structures and robust management systems.',
    link: 'Learn More'
  },
  {
    name: 'Logo Design',
    description: 'Creating unique logos that reflect your brand identity and stand out.',
    link: 'Learn More'
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-no-repeat bg-cover mt-16 mb-16" id="services">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className="text-center mb-12"
        >
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">What I Do?</h2>
          <p className="text-xs lg:text-sm text-blue-300 max-w-lg mx-auto">
            Passionate Web Developer with a keen eye for detail and a drive for innovation.
          </p>
          <motion.button 
            className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl shadow-md text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const work = document.getElementById('work');
              if (work) {
                work.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            See My Work
          </motion.button>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4}}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const { name, description, link } = service;
            return (
              <motion.div 
                key={index}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6}}
                className="group p-6 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">{name}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">{description}</p>
                  </div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 bg-blue-600/20 hover:bg-blue-600/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <BsArrowUpRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
