import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Services Data
const services = [
  {
    name: 'UI/UX Designer:',
    description: 'Crafting intuitive digital interfaces that captivate users and drive results. From wireframing to prototyping, ensuring every interaction is intuitive and memorable.',
    link: 'See More'
  },
  {
    name: 'Web development:',
    description: 'Building customized and responsive websites tailored to your specific needs, utilizing the latest web technologies for optimal performance and functionality.',
    link: 'See More'
  },
  {
    name: 'Database Design and Managing:',
    description: 'Designing efficient database structures and implementing robust management systems to organize, store, and retrieve your valuable data securely.',
    link: 'See More'
  },
  {
    name: 'Logo Making:',
    description: 'Creating unique and memorable logos that reflect your brand identity and leave a lasting impression on your audience, helping you stand out in a competitive market.',
    link: 'See More'
  },
];

const Services = () => {
  return (
    <section className="section mt-28" id="services">
      <div className="container mx-auto mb-40">
        <div className="flex flex-col lg:flex-row mb-19 mt-20">
          {/* Text */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3}}
            className=" text-center lg:text-left mb-12 mr-4 lg:mb-0 mt-8">
            <h2 className="text-4xl font-bold text-accent mb-4">What I Do?</h2>
            <h3 className="text-xl lg:w-[255px] mb-6">Passionate Web Developer with a keen eye for detail and a drive for innovation.</h3>
            <button className="btn btn-sm"
            onClick={() => {
              const work = document.getElementById('work');
              if (work) {
                work.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            >See My Work</button>
          </motion.div>
          {/* Services */}
          <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4}}
          className="flex-1 mt-8">
            {/* Services List */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="border-b border-gray-300 h-auto mb-10 pb-4 flex flex-col lg:flex-row" key={index}>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-cyan-500 mb-2">{name}</h4>
                      <p className="text-sm">{description}</p>
                    </div>
                    <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6}}
                    className="flex items-end mt-4 lg:mt-0 lg:ml-4">
                      <a href="#" className="btn w-12 h-12 flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-sm text-gradient ml-2 mb-3">
                        {link}
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
