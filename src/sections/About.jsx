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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative h-full">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                  src={process.env.PUBLIC_URL + "/Tejuuu.JPG"}
                  alt="Tejaswini"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6 flex flex-col h-full justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                👋 Hi, I'm Tejaswini
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-blue-600">
                  Frontend Engineer
                </span>{" "}
                with a passion for building{" "}
                <span className="text-blue-600 font-semibold">accessible</span>,{" "}
                <span className="text-blue-600 font-semibold">responsive</span>,
                and{" "}
                <span className="text-blue-600 font-semibold">
                  performant web applications
                </span>{" "}
                across diverse industries, including{" "}
                <span className="text-purple-600 font-semibold">retail</span>,{" "}
                <span className="text-purple-600 font-semibold">AI/ML</span>,{" "}
                <span className="text-purple-600 font-semibold">defense</span>,
                and <span className="text-purple-600 font-semibold">media</span>
                .
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                My expertise spans modern frontend technologies like{" "}
                <span className="text-blue-600 font-semibold">JavaScript</span>,{" "}
                <span className="text-blue-600 font-semibold">React</span>,{" "}
                <span className="text-blue-600 font-semibold">Next.js</span>,
                and{" "}
                <span className="text-blue-600 font-semibold">TypeScript</span>.
                I excel in building{" "}
                <span className="text-blue-600 font-semibold">
                  scalable systems
                </span>
                , integrating{" "}
                <span className="text-blue-600 font-semibold">
                  RESTful APIs
                </span>
                , and implementing comprehensive{" "}
                <span className="text-blue-600 font-semibold">
                  testing strategies
                </span>{" "}
                using{" "}
                <span className="text-purple-600 font-semibold">Jest</span> and{" "}
                <span className="text-purple-600 font-semibold">
                  React Testing Library
                </span>
                .
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                I specialize in crafting{" "}
                <span className="text-blue-600 font-semibold">innovative</span>{" "}
                and{" "}
                <span className="text-blue-600 font-semibold">
                  user-centric web interfaces
                </span>{" "}
                with a strong focus on{" "}
                <span className="text-blue-600 font-semibold">
                  accessibility
                </span>
                ,{" "}
                <span className="text-blue-600 font-semibold">
                  design systems
                </span>
                , and{" "}
                <span className="text-blue-600 font-semibold">
                  clean code architecture
                </span>
                . My experience includes collaborating with design teams and
                implementing{" "}
                <span className="text-blue-600 font-semibold">
                  pixel-perfect UI components
                </span>
                .
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
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
            {/* Section Header with lines */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center whitespace-nowrap">
                Core Values
              </h2>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-4" />
            </div>
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Innovation First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center bg-white/80 dark:bg-gray-800/60 rounded-3xl shadow-lg p-10 flex flex-col items-center justify-center"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-white shadow-lg">
                  <BsPaletteFill className="text-4xl text-[#7c3aed]" />
                </div>
                <h3 className="text-xl font-bold text-[#7c3aed] mb-2">
                  Innovation First
                </h3>
                <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe great design is the foundation of great user
                  experiences. From accessibility to responsiveness, I bring
                  designs to life with clean, elegant, and user-first code.
                </p>
              </motion.div>
              {/* Performance Driven */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center bg-white/80 dark:bg-gray-800/60 rounded-3xl shadow-lg p-10 flex flex-col items-center justify-center"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-200 via-pink-200 to-white shadow-lg">
                  <BsLightningChargeFill className="text-4xl text-[#f59e42]" />
                </div>
                <h3 className="text-xl font-bold text-[#f43f5e] mb-2">
                  Performance Driven
                </h3>
                <div className="w-10 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Speed matters. I build highly performant interfaces that load
                  fast, scale well, and feel native—leveraging lazy loading,
                  bundling, and real-time optimizations.
                </p>
              </motion.div>
              {/* Impact Focused */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center bg-white/80 dark:bg-gray-800/60 rounded-3xl shadow-lg p-10 flex flex-col items-center justify-center"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 via-orange-100 to-white shadow-lg">
                  <FaBrain className="text-4xl text-[#fbbf24]" />
                </div>
                <h3 className="text-xl font-bold text-[#f59e42] mb-2">
                  Impact Focused
                </h3>
                <div className="w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
