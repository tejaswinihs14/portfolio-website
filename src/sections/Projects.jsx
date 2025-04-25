import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Generating Fake Malware Using Auxiliary-Classifier GAN",
      description:
        "Academic Publication on arXiv: Research on generating synthetic malware samples for improved malware analysis and detection.",
      year: "2021",
      category: "AI Research",
      link: "https://arxiv.org/abs/your-paper-id",
    },
    {
      title: "Computer Vision System for Retail Analytics",
      description:
        "Developed a real-time computer vision system for retail analytics, enabling automated product recognition and customer behavior analysis.",
      year: "2022",
      category: "Computer Vision",
      link: "#",
    },
    {
      title: "LLM-Powered Document Analysis Platform",
      description:
        "Built a document analysis platform using Large Language Models for automated document processing and information extraction.",
      year: "2023",
      category: "LLMs",
      link: "#",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-[#6366f1] mx-auto mt-4 rounded-full" />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6366f1]">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6366f1] hover:text-[#4f46e5] transition-colors"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect Section - Moved to bottom with extra padding */}
      <section
        id="connect"
        className="py-32 bg-gray-100 dark:bg-[#0f172a] mt-auto"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Got an exciting idea or just want to chat? I'm all ears and love
              connecting!
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="tel:+18736882192"
                className="flex items-center justify-center space-x-4 hover:opacity-75 transition-opacity"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    +1 (873) 688-2192
                  </p>
                </div>
              </a>

              <a
                href="mailto:tejaswinihs95@gmail.com?subject=Let's%20Connect%20-%20Portfolio%20Inquiry&body=Hi%20Tejaswini,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                className="flex items-center justify-center space-x-4 hover:opacity-75 transition-opacity"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    tejaswinihs95@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Vancouver,+BC,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 hover:opacity-75 transition-opacity"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    Vancouver, Canada
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFA116] transition-colors"
              >
                <SiLeetcode className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-8 text-sm text-gray-500 dark:text-gray-400">
              © 2025 Tejaswini H S. All rights reserved.
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
