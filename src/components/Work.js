import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
// images
import Project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';
import Project3 from '../assets/Project3.png';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Project data array
const projects = [
  {
    title: "My First Portfolio Website",
    description: "This project holds a special place in my heart. It was an exciting journey where I delved into new concepts, overcame challenges, and brought my ideas to life.",
    technologies: ["html", "css", "javascript"],
    imageUrl: project2, 
    codeLink: "https://github.com/danishahmed65",
    demoLink: "https://danish-old-portfolio.netlify.app/",
  },
  {
    title: "Auto Cv Maker",
    description: "Build stunning, professional resumes with ease using our intuitive resume builder. Customize your resume with various templates and layouts.",
    technologies: ["reactjs", "javascript", "css", "nextjs"],
    imageUrl: Project1, 
    codeLink: "https://github.com/danishahmed65/auto-cv-maker",
    demoLink: "https://auto-cv-maker.netlify.app/",
  },
  {
    title: "Estate Regentra - Real Estate Website",
    description: "Explore the world of real estate with Estate Regentra. This website offers a seamless experience for buying, selling, and renting properties.",
    technologies: ["reactjs", "javascript", "Tailwind CSS"],
    imageUrl: Project3,
    codeLink: "https://github.com/danishahmed65/Real-Estate",
    demoLink: "https://estateregentra.netlify.app/",
  },
];

// ProjectCard component to display individual project details
const ProjectCard = ({ project }) => (
  <motion.div 
    className="group bg-white/5 hover:bg-white/10 rounded-lg overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-lg"
    whileHover={{ y: -5 }}
  >
    <div className="relative">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a 
          href={project.codeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <FaGithub className="w-4 h-4 text-white" />
        </a>
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <BsArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-xs text-gray-300 mb-3 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Work component to display the list of projects
const Work = () => {
  return (
    <section className="py-20 bg-site bg-no-repeat bg-cover mt-16 mb-16 min-h-screen" id="work">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3}}
        className="container mx-auto px-4 lg:px-6"
      >
        <motion.h2 
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className="text-xl lg:text-2xl font-bold text-white text-center mb-12"
        >
          My Latest Projects
        </motion.h2>
        <motion.div 
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
