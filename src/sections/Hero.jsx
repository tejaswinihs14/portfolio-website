import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

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
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-purple-50 dark:from-[#0f172a] dark:to-[#0f172a]"
    >
      <div className="container mx-auto w-full px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
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
                className="px-8 py-4 bg-[#9333EA] text-white text-lg rounded-xl hover:bg-[#7928CA] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
              <a
                href="/Tejaswini_CV.pdf"
                download
                className="px-8 py-4 bg-[#4299E1] text-white text-lg rounded-xl hover:bg-[#3182CE] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
              >
                <FaDiscord size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#9333EA] transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div
              className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full p-4 flex justify-center items-center"
              style={{
                background:
                  "radial-gradient(circle at center, #ffffff 0%, #e0d6f8 60%, #dcd5f5 100%)",
                boxShadow: "0 4px 20px rgba(153, 128, 255, 0.4)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/Profile.JPG"
                  alt="Tejaswini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
