import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const skills = [
    "JavaScript • Redux • Bootstrap",
    "React.js • Next.js • TypeScript",
    "Frontend Development • UI/UX",
    "Performance • Accessibility • Testing",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("connect");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-purple-50 dark:from-[#0f172a] dark:to-[#0f172a] pt-24 md:pt-32"
    >
      <div className="w-full max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            {/* Left Content */}
            <div className="flex flex-col h-full items-center text-center">
              {/* Small Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-6 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#9333EA] dark:text-[#9333EA] text-base font-medium shadow-sm">
                  Frontend Engineer
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mt-8 mb-6"
              >
                Tejaswini
              </motion.h1>

              {/* Animated Skills */}
              <div className="h-8 mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSkillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-400 text-xl flex items-center gap-2"
                  >
                    {skills[currentSkillIndex]
                      .split(" • ")
                      .map((skill, index, array) => (
                        <React.Fragment key={index}>
                          <span>{skill}</span>
                          {index < array.length - 1 && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                          )}
                        </React.Fragment>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
              >
                Crafting intelligent solutions for complex challenges, with 5
                years of expertise in Frontend Engineering.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-6 mb-16"
              >
                <button
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg rounded-xl shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                >
                  Contact Me
                </button>
                <a
                  href="/Resume_TEJASWINI.pdf"
                  download
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg rounded-xl shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload className="text-xl" />
                  Download CV
                </a>
                <a
                  href="#experience"
                  className="px-8 py-4 bg-transparent text-gray-900 dark:text-white text-lg rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#9333EA] hover:text-[#9333EA] transition-all duration-300"
                >
                  View Experience
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-8"
              >
                <a
                  href="https://www.linkedin.com/in/tejaswinihs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/tejaswinihs14?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://x.com/tejugowda14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
                >
                  <FaXTwitter size={28} />
                </a>
                <a
                  href="https://www.instagram.com/tejaswinii.gowda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
                >
                  <FaInstagram size={28} />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-[radial-gradient(circle,rgba(168,85,247,0.3)_10%,rgba(168,85,247,0.1)_70%,transparent_100%)] z-0"></div>
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex items-center justify-center relative z-10 border-2 border-white">
              <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-purple-200 via-white to-purple-100 dark:from-[#4c3575] dark:via-[#1e1935] dark:to-[#6d28d9] z-0"></div>
              <div className="absolute inset-0 w-full h-full rounded-full bg-[#e9d5ff80] dark:bg-[#4c357580] z-10"></div>
              <img
                src="/Teju_inPixio.png"
                alt="Tejaswini"
                className="w-full h-full object-cover rounded-full relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
