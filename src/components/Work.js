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
    description: "This project holds a special place in my heart. It was an exciting journey where I delved into new concepts, overcame challenges, and brought my ideas to life. While working on this project, I learned valuable skills and gained a deeper understanding of [mention any specific skills or concepts you learned.",
    technologies: ["html", "css", "javascript"],
    imageUrl: project2, 
    codeLink: "https://github.com/danishahmed65",
    demoLink: "https://danish-old-portfolio.netlify.app/",
  },
  {
    title: "Auto Cv Maker",
    description: "Build stunning, professional resumes with ease using our intuitive resume builder.Customize your resume with various templates and layouts to stand out in your job search.",
    technologies: ["reactjs", "javascript", "css", "nextjs"],
    imageUrl: Project1, 
    codeLink: "https://github.com/danishahmed65/auto-cv-maker",
    demoLink: "https://auto-cv-maker.netlify.app/",
  },
  {
    title: "Estate Regentra - Real Estate Website",
    description: "Explore the world of real estate with Estate Regentra. This website offers a seamless experience for buying, selling, and renting properties. Discover your dream home today!",
    technologies: ["reactjs", "javascript", "Tailwind CSS"],
    imageUrl: Project3,
    codeLink: "https://github.com/danishahmed65/Real-Estate",
    demoLink: "https://estateregentra.netlify.app/",
  },
];

// ProjectCard component to display individual project details
const ProjectCard = ({ project }) => (
  <div className="backdrop-blur-3xl bg-cyan-800/40 rounded-[30px] overflow-hidden transition duration-300  ">
    <div className="relative group">
      {/* Apply cursor pointer and zoom effect to the image */}
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Link to the project's code repository */}
        <a href={project.codeLink} className="bg-white p-2 rounded-full shadow-md hover:bg-black/90 transition duration-300 text-accent">
          <FaGithub className="w-6 h-6" />
        </a>
        {/* Link to the project's live demo */}
        <a href={project.demoLink} className="bg-white p-2 rounded-full shadow-md hover:bg-black/90 transition duration-300 text-accent">
          <BsArrowUpRight className="w-6 h-6" />
        </a>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{project.title}</h2>
      <p className="text-sm text-white-600 mb-4">{project.description}</p>
      <div className="flex space-x-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-blue-200 text-blue-900 text-xs font-semibold px-2.5 py-0.5 rounded-[10px]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Work component to display the list of projects
const Work = () => {
  return (
    <section className="section py-12 mt-20 mb-15" id="work">
      <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3}}
      className="container mx-auto px-4">
        <h1 className="text-3xl text-accent font-bold mb-10 mt-10">// My Latest Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
