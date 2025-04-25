// src/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGamepad } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { BsPaletteFill, BsLightningChargeFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[#9333EA] mx-auto mt-4 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="/Profile.JPG"
                  alt="Tejaswini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                👋 Hi, I'm Tejaswini
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Frontend Engineer with a passion for building accessible,
                responsive, and performant web applications across diverse
                industries, including retail, AI/ML, defense, and media.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My expertise spans modern frontend technologies like JavaScript,
                React, Next.js, and TypeScript. I excel in building scalable
                systems, integrating RESTful APIs, and implementing
                comprehensive testing strategies using Jest and React Testing
                Library.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I specialize in crafting innovative and user-centric web
                interfaces with a strong focus on accessibility, design systems,
                and clean code architecture. My experience includes
                collaborating with design teams and implementing pixel-perfect
                UI components.
              </p>

              {/* Skills Section */}
              <div className="space-y-4 pt-4">
                <div className="text-gray-600 dark:text-gray-400 text-lg flex items-center gap-2 flex-wrap">
                  <span>DESIGN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>IMPLEMENTATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>TESTING</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>INTEGRATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>BUG FIXING</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>DEBUG</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>DEPLOY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]/40"></span>
                  <span>MAINTENANCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* What I Do Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <FaRocket className="text-xl text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I Do
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 mt-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1.5">•</span>
                  <span>
                    Develop scalable, accessible web applications using React,
                    Next.js, and TypeScript
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1.5">•</span>
                  <span>
                    Architect and optimize design systems, dashboards, and
                    real-time UIs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1.5">•</span>
                  <span>
                    Build features for AI, defense, streaming, and retail
                    platforms
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Why Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <BiTargetLock className="text-xl text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Why Frontend?
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 mt-6">
                <p>
                  Frontend isn't just code—it's the bridge between product and
                  people.
                </p>
                <p>
                  I'm passionate about creating seamless, inclusive user
                  experiences that turn complex data into clear, usable
                  insights. I believe great design backed by strong engineering
                  delivers meaningful impact.
                </p>
              </div>
            </motion.div>

            {/* Beyond Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <FaGamepad className="text-xl text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Beyond Code
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 mt-6">
                <p>
                  Curious learner with a love for UI design, productivity tools,
                  and frontend performance.
                </p>
                <p>
                  Enjoy exploring nature, photography, and mentoring developers.
                  I thrive on collaboration, constant learning, and pushing
                  boundaries in tech.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="pt-20">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
                Core Values
                <div className="absolute -left-16 -right-16 h-px bg-gray-200 dark:bg-gray-700 top-1/2">
                  <div className="absolute -left-1 -right-1 h-px bg-[#9333EA]"></div>
                </div>
              </h2>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Design-Driven */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center mx-auto">
                    <BsPaletteFill className="text-2xl text-blue-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                  Design-Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I believe great design is the foundation of great user
                  experiences. From accessibility to responsiveness, I bring
                  designs to life with clean, elegant, and user-first code.
                </p>
              </motion.div>

              {/* Performance Obsessed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100/50 dark:bg-purple-900/20 flex items-center justify-center mx-auto">
                    <BsLightningChargeFill className="text-2xl text-purple-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-purple-500 mb-4">
                  Performance Obsessed
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Speed matters. I build highly performant interfaces that load
                  fast, scale well, and feel native—leveraging lazy loading,
                  bundling, and real-time optimizations.
                </p>
              </motion.div>

              {/* UX-Focused Problem Solver */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-100/50 dark:bg-red-900/20 flex items-center justify-center mx-auto">
                    <FaBrain className="text-2xl text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  UX-Focused Problem Solver
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I build interfaces that solve real user problems. Through
                  empathy, feedback, and iteration, I turn complex flows into
                  intuitive, engaging experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
