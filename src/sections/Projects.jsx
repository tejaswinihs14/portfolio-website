import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A fully functional Netflix clone built with React, Firebase, and Stripe. Features include user authentication, subscription management, dynamic movie listings, and responsive design. Integrated Firestore for database management and Stripe for subscription payments.",
      year: "2023",
      category: "Web Development",
      link: "https://lnkd.in/gPSQ_u-B",
      github: "https://github.com/tejaswinihs14/netflix-clone",
    },
    {
      title: "Google Flights Clone",
      description:
        "A responsive flight search application built with React and Sky Scrapper API, delivering a seamless flight search experience across all devices. Features real-time flight data and responsive design.",
      year: "2024",
      category: "Web Development",
      link: "https://fastidious-churros-918d44.netlify.app/",
      github: "https://github.com/tejaswinihs14/googleflights-clone",
    },
    {
      title: "COVID-19 Tracker",
      description:
        "A comprehensive COVID-19 tracking application built with React, featuring real-time global statistics, interactive maps using React Leaflet, and data visualization with React ChartJS. Includes Firebase integration, Material UI components, and responsive design for optimal viewing across all devices.",
      year: "2021",
      category: "Web Development",
      link: "https://silver-rugelach-c61830.netlify.app/",
      github:
        "https://github.com/tejaswinihs14/covid19/tree/main/covid19-tracker",
    },
    {
      title: "Slack Clone",
      description:
        "A feature-rich Slack clone built with React.js, Redux, and Firebase. Implements real-time messaging, channel management, and user authentication using Firebase hooks and database. Features styled-components for modern UI design and React Router for seamless navigation.",
      year: "2020",
      category: "Web Development",
      link: "https://lnkd.in/eHz2xgXd",
      github: "https://github.com/tejaswinihs14/slack-clone",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

            {/* Projects Carousel */}
            <div className="px-4">
              <Slider {...sliderSettings}>
                {projects.map((project, index) => (
                  <div key={index} className="px-2 h-full flex items-stretch">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
                      }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col h-[440px] max-w-sm w-full mx-auto"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex flex-col flex-grow">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[#6366f1]">
                              {project.category}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <FaGithub className="w-4 h-4 mr-1.5" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
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
                href="https://www.linkedin.com/in/tejaswinihs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/tejaswinihs14?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/tejaswinihelagallishivabasappa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFA116] transition-colors"
              >
                <SiLeetcode className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tejaswinii.gowda/"
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
