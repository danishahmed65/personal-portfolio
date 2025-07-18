import React from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="section mt-80 pt-20" id="contact">
      <div className="max-w-6xl mx-auto p-5 md:p-8 pt-12">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-6">
              <FaPaperPlane className="text-accent mr-2 hover:scale-125 transition-transform duration-300 text-xl" />
              <span className="text-sm">ahmeddanish6000@gmail.com</span>
            </div>
            <div className="flex items-center mb-8">
              <FaPhone className="text-accent mr-2 hover:scale-125 transition-transform duration-300 text-xl" />
              <span className="text-sm">+923155223240</span>
            </div>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="flex space-x-4 mb-8"
            >
              <a
                href="https://www.facebook.com/danish.armani.18/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white hover:text-accent hover:scale-125 transition-transform duration-300 text-2xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/danish-ahmed-66da"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white hover:text-accent hover:scale-125 transition-transform duration-300 text-2xl cursor-pointer" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white hover:text-accent hover:scale-125 transition-transform duration-300 text-2xl cursor-pointer" />
              </a>
              <a
                href="https://github.com/danishahmed65"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white hover:text-accent hover:scale-125 transition-transform duration-300 text-2xl cursor-pointer" />
              </a>
            </motion.div>
            {/* Styled button with hover effects */}
            <button
              className="btn mb-8 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm px-6 py-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Danish_Ahmed_Resume.pdf";
                link.setAttribute("download", "Danish_Ahmed_Resume.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </button>
            {/* Footer for large screens */}
            <footer className="hidden md:block text-start text-xs mt-8 w-full">
              <p>Copyright © 2024. All Rights Reserved.</p>
              {/* White line between footer text */}
              <div className="border-t border-white my-2 mx-0 w-60"></div>
              <p>
                Designed and Developed by{" "}
                <b className="hover:text-accent">
                  <a
                    href="https://github.com/danishahmed65"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DANISH AHMED.
                  </a>
                </b>
              </p>
            </footer>
          </motion.div>
          <div className="md:w-1/2 mt-8 md:mt-0 mx-0">
            <form action="https://formspree.io/f/meojjgwj" method="POST">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 mb-3 bg-gray-800 text-white rounded border border-gray-700 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 mb-3 bg-gray-800 text-white rounded border border-gray-700 text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 mb-3 bg-gray-800 text-white rounded border border-gray-700 text-sm"
                rows="4"
              ></textarea>
              <motion.button
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                type="submit"
                className="w-full btn mb-8 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm px-6 py-2"
              >
                Submit
              </motion.button>
            </form>

            {/* Footer for small screens */}
            <footer className="block md:hidden text-center text-xs mt-12 w-full">
              <p>Copyright © 2024. All Rights Reserved.</p>
              {/* White line between footer text */}
              <div className="border-t border-white my-2 mx-8 w-60"></div>
              <p>
                Designed and Developed by{" "}
                <b className="hover:text-accent">
                  <a
                    href="https://github.com/danishahmed65"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DANISH AHMED.
                  </a>
                </b>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
