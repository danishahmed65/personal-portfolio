import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaDatabase  } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='pt-32 pb-16 bg-site bg-no-repeat bg-cover' id='about' ref={ref}>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='flex flex-col lg:flex-row lg:items-start lg:gap-x-12'>
          {/* Image - shown only on small screens */}
          <motion.div
          variants={fadeIn("bottom", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className='lg:hidden sm:block sm:flex-1 bg-about bg-contain bg-no-repeat h-[320px] mix-blend-lighten bg-top mb-6'></motion.div>

          {/* Text */}
          <div className='flex-1'>
            {/* Motion For h2 */}
            <motion.h2
            variants={fadeIn("bottom", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4}}
            className='text-2xl lg:text-3xl font-bold text-white mb-4'>About Me</motion.h2>
            
            {/* Motion for h3 */}
            <motion.h3
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4}}
            className='text-lg lg:text-xl font-semibold mb-4 text-blue-300'>Passionate Web Developer with a keen eye for detail and a drive for innovation.</motion.h3>
            
            {/* Motion for P */}
            <motion.p 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6}}
            className='mb-6 text-sm lg:text-base text-white leading-relaxed'>
              I'm a web developer who loves creating cool stuff on the internet. I make websites that look great and work even better. I use the latest tech to build user-friendly experiences. Always learning and staying up-to-date, I enjoy working with others to bring ideas to life.
            </motion.p>
            
            {/* Stats */}
            <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6}}
            className='flex gap-x-6 lg:gap-x-8 mb-8'>
              <div className='text-center'>
                <div className='text-2xl lg:text-3xl font-bold text-blue-400 mb-1'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className='text-xs font-medium text-gray-300 tracking-wide'>
                  Year of <br />
                  Experience
                </div>
              </div>
              <div className='text-center'>
                <div className='text-2xl lg:text-3xl font-bold text-blue-400 mb-1'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className='text-xs font-medium text-gray-300 tracking-wide'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </motion.div>
            
            {/* Skills Section */}
            <motion.h3 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3}}
            className='text-lg lg:text-xl font-semibold mb-6 text-white'>My Skills Include:</motion.h3>
            
            <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3}}
             className='skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4'>
              <SkillIcon icon={FaHtml5} name="HTML5" color="#E34F26" />
              <SkillIcon icon={FaCss3Alt} name="CSS3" color="#1572B6" />
              <SkillIcon icon={FaJs} name="JavaScript" color="#F7DF1E" />
              <SkillIcon icon={FaReact} name="ReactJS" color="#61DAFB" />
              <SkillIcon icon={SiTailwindcss} name="TailwindCSS" color="#38B2AC" />
              <SkillIcon icon={FaWordpress} name="WordPress" color="#21759B" />
              <SkillIcon icon={FaDatabase} name="MySQL" color="#4479A1" />
            </motion.div>
          </div> 
        </div>
      </div>
    </section>
  );
};

const SkillIcon = ({ icon: Icon, name, color }) => (
  <motion.div 
    className='group flex flex-col items-center cursor-pointer'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className='text-3xl lg:text-4xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-lg' style={{ color }}>
      <Icon />
    </div>
    <span className='mt-2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-white'>{name}</span>
  </motion.div>
);

export default About;
