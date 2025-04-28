import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  FaReact,
  FaGithub,
  FaFigma,
  FaDocker,
  FaJira,
  FaCode,
  FaJs,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaAws,
  FaMicrosoft,
  FaSlack,
  FaGitAlt,
  FaPython,
  FaChartLine,
  FaCube,
} from "react-icons/fa";
import {
  AiFillApi,
  AiOutlineCloud,
  AiOutlineApartment,
  AiFillThunderbolt,
  AiOutlineTeam,
  AiOutlineCheck,
  AiFillTool,
} from "react-icons/ai";
import { BiCodeAlt, BiTestTube } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiWebpack,
  SiBabel,
  SiPostgresql,
  SiFirebase,
  SiCypress,
  SiStorybook,
  SiJest,
  //   SiPlaywright,
  SiGraphql,
  SiPostman,
  SiGooglecloud,
  SiMiro,
  SiNotion,
  SiConfluence,
  SiDiscord,
  SiWordpress,
  SiGithubactions,
} from "react-icons/si";
import { TbApi, TbAccessible } from "react-icons/tb";
import { BsSpeedometer, BsGlobe } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [activeTab, setActiveTab] = useState("💻 Frontend Stack");

  const experiences = [
    {
      type: "professional",
      role: "Frontend Engineer",
      company: "Vosyn.Inc",
      period: "Nov 2024 - Present",
      logo: process.env.PUBLIC_URL + "/vosynLogo.png",
      description:
        "Implemented and maintained Settings frontend development for VosynVerse platform.",
      skills: ["React", "Next.js", "+5"],
      details: {
        projects: [
          {
            title: "VosynVerse Platform Development",
            points: [
              "Contributed to the development of VosynVerse, a Next-based multimedia streaming platform, delivering high-impact features like View History, Dark Mode, and Settings customization",
              "Built and optimized frontend features in React, Next, JavaScript, Redux with Material-UI and Axios, focusing on performance, accessibility, and responsiveness",
              "Led the implementation of dark mode toggle, internationalization and accessibility improvements, enhancing UI contrast and personalization",
              "Maintained strict coding standards and cross-browser compatibility, conducting thorough testing using Jest, Storybook and Playwright",
            ],
          },
          {
            title: "Team Collaboration & Process",
            points: [
              "Collaborated in a cross-functional Agile team, contributing to sprint planning and backlog refinement",
              "Performed peer PR reviews to maintain code quality and CI/CD compliance",
              "Actively participated in sprint planning, daily standups, and retrospectives to ensure timely deliverables",
              "Contributed to code quality through regular PR reviews as part of the review committee",
            ],
          },
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React-Router",
          "Restful APIs",
          "Redux",
          "Material-UI",
          "PostgreSQL",
          "Storybook",
          "Jest",
          "Playwright",
          "Axios",
          "Agile/Scrum",
        ],
      },
    },
    {
      type: "professional",
      role: "Web Design and Development Expert",
      company: "Mercor · Freelance",
      period: "Jan 2025 - Feb 2025",
      logo: process.env.PUBLIC_URL + "/Mercor_Logo.jpg",
      description:
        "Collaborated with OpenAI to train and evaluate LLMs for web development tasks, focusing on code generation, design implementation, and quality assessment.",
      skills: ["React", "LLM Training", "+6"],
      details: {
        projects: [
          {
            title: "OpenAI LLM Training & Evaluation",
            points: [
              "Trained LLMs by providing detailed instructions for React application development, including game implementations like Snake and Ladder",
              "Evaluated LLM outputs based on performance, design, layout, features, responsiveness, accuracy, color schemes, and accessibility",
              "Provided detailed feedback and ratings to improve LLM performance and output quality",
              "Participated in collaborative meetings with OpenAI and Mercor teams to discuss progress and improvements",
            ],
          },
          {
            title: "Development & Collaboration",
            points: [
              "Utilized Workplus and Teams for effective project management and communication",
              "Worked on OpenAI's platform to train and test LLM capabilities",
              "Implemented responsive design principles in generated applications",
              "Conducted thorough testing and validation of LLM-generated code",
            ],
          },
        ],
        technologies: [
          "React",
          "LLM Training",
          "Code Review",
          "UI/UX Design",
          "Responsive Design",
          "Accessibility",
          "Microsoft Teams",
          "Workplus",
        ],
      },
    },
    {
      type: "professional",
      role: "UI/UX Developer",
      company: "Larus Technologies",
      period: "Dec 2021 - May 2024",
      logo: process.env.PUBLIC_URL + "/LarusTech.png",
      description:
        "Developed AI-integrated interfaces for retail and defense platforms, focusing on real-time data visualization and user engagement.",
      skills: ["React", "Redux", "+8"],
      details: {
        projects: [
          {
            title: "Unilever Retail Platform",
            points: [
              "Engineered a personalized, AI-integrated UI enabling real-time product recommendations based on consumer behavior",
              "Implemented performance optimizations and responsive layout resulting in faster rendering and improved user engagement",
              "Utilized Microsoft Power BI for data analysis and actionable report generation",
              "Provided support to development teams through code reviews and UI performance optimization guidance",
              "Created interactive wireframes using Balsamiq and Miro for rapid prototyping and stakeholder feedback",
            ],
          },
          {
            title: "Total::Perception™ Defense Platform",
            points: [
              "Redesigned and optimized UI for AI/ML-based ISR simulation platform using LuciadGUI",
              "Improved real-time visualization of large-scale sensor data through asynchronous rendering",
              "Implemented WebSocket integration for enhanced data streaming capabilities",
              "Delivered technical demos and presentations to stakeholders",
              "Utilized Docker containers and Virtual Machines for development and testing environments",
            ],
          },
          {
            title: "Internal SASS Application",
            points: [
              "Designed and developed from scratch, targeting retail clients like Loblaws and Walmart",
              "Implemented data pipelines for processing forecast vs. actual data",
              "Built real-time graph analysis and table comparison views using React, Redux, Chart.js",
              "Created wireframes and designs using Figma, Balsamiq, and ant-design components",
              "Developed RESTful APIs and tested endpoints using Postman and PGAdmin",
              "Implemented state management using Context API and async/await patterns",
            ],
          },
        ],
        technologies: [
          "React",
          "Redux",
          "SASS",
          "LuciadGUI",
          "Power BI",
          "Chart.js",
          "WebSocket",
          "Figma",
          "ant-design",
          "Material-UI",
          "Context API",
          "Docker",
          "Virtual Machines",
          "Postman",
          "PGAdmin",
          "Balsamiq",
          "Miro",
          "OAuth2",
        ],
      },
    },
    {
      type: "education",
      role: "Master of Engineering",
      company: "University of Ottawa",
      period: "2019 - 2021",
      logo: process.env.PUBLIC_URL + "/UottawaLogo.jpg",
      description:
        "Completed Master of Engineering in Electrical and Computer Engineering.",
      skills: [
        "Software Engineering",
        "Computer Networks",
        "Internet Technologies",
        "Security Engineering",
        "Project Management",
      ],
      details: {
        projects: [
          {
            title: "Core Specializations",
            points: [
              "Advanced Computer Networks and Communication Systems",
              "Software Engineering Project Management and Best Practices",
              "Photonics and Optical Network Technologies",
              "Theory of Semiconductor Devices and Mobile Technologies",
              "Security Engineering and System Survivability",
              "Communication Strategies and Professional Development",
            ],
          },
          {
            title: "Key Achievements",
            points: [
              "Completed comprehensive coursework in Computer Communication Networks and Photonics Networks",
              "Mastered advanced topics in Survivable Optical Networks and Communication Systems",
              "Specialized in Internet Technologies and Mobile Communications",
              "Developed expertise in Security Engineering and Operational Excellence",
              "Achieved excellent academic performance with multiple A/A+ grades",
            ],
          },
        ],
        technologies: [
          "Computer Networks",
          "Optical Communications",
          "Network Security",
          "Project Management",
          "Semiconductor Technology",
          "Mobile Communications",
          "System Design",
          "Engineering Leadership",
          "Communication Protocols",
          "Network Architecture",
          "System Optimization",
          "Technical Documentation",
        ],
      },
    },
    {
      type: "professional",
      role: "Associate Software Engineer",
      company: "Accenture Solution Pvd Ltd",
      period: "Nov 2017 - July 2019",
      logo: process.env.PUBLIC_URL + "/AccentureLogo.png",
      description:
        "Developed reusable UI components and optimized applications for major retail clients, focusing on user engagement and code efficiency.",
      skills: ["React", "JavaScript", "+7"],
      details: {
        projects: [
          {
            title: "Loblaws UI Component Library",
            points: [
              "Developed and shared 15+ reusable UI components for Loblaws, including modal windows and interactive forms",
              "Enhanced code efficiency and reduced redundant code through component reusability",
              "Conducted 20+ development review sessions, fostering a culture of collaborative feedback",
              "Enhanced design quality and product usability through regular code reviews and feedback sessions",
            ],
          },
          {
            title: "Vera-Style Target Application",
            points: [
              "Optimized Vera-Style for Target, a fashion trend recommendation application",
              "Improved product filtering and personalized recommendations",
              "Drove increase in engagement as measured by average session duration and pageviews",
              "Implemented responsive design principles ensuring consistent experience across devices",
            ],
          },
        ],
        technologies: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Git",
          "Agile/Scrum",
          "RESTful APIs",
          "UI Components",
          "Performance Optimization",
        ],
      },
    },
    {
      type: "education",
      role: "Bachelor in Engineering",
      company: "Visvesvaraya Technological University",
      period: "2013 - 2017",
      logo: process.env.PUBLIC_URL + "/VTULogo.png",
      description:
        "Electronics and Communication Engineering with focus on Computer Science fundamentals.",
      skills: ["Python", "C++", "Java", "MATLAB", "JavaScript"],
      details: {
        projects: [
          {
            title: "Core Studies",
            points: [
              "Data Structures and Algorithms",
              "Digital Signal Processing",
              "Computer Networks and Communication Systems",
              "Embedded Systems and Microcontrollers",
            ],
          },
        ],
        technologies: [
          "C++",
          "Java",
          "Python",
          "MATLAB",
          "Digital Electronics",
          "Communication Systems",
        ],
      },
    },
  ];

  const skillsByCategory = {
    "💻 Frontend Stack": [
      {
        title: "React.js",
        icon: <FaReact className="text-blue-500" />,
      },
      {
        title: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        title: "JavaScript (ES6+)",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
      },
      {
        title: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        title: "CSS3",
        icon: <FaCss3 className="text-blue-500" />,
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        title: "Bootstrap",
        icon: <FaBootstrap className="text-purple-600" />,
      },
      {
        title: "Material UI",
        icon: <FaCube className="text-blue-600" />,
      },
      {
        title: "SASS",
        icon: <DiSass className="text-pink-500" />,
      },
      {
        title: "Redux & Context API",
        icon: <SiRedux className="text-purple-500" />,
      },
      {
        title: "Webpack",
        icon: <SiWebpack className="text-blue-500" />,
      },
      {
        title: "Babel",
        icon: <SiBabel className="text-yellow-500" />,
      },
      {
        title: "WebSocket",
        icon: <AiFillThunderbolt className="text-yellow-400" />,
      },
      {
        title: "Figma",
        icon: <FaFigma className="text-purple-500" />,
      },
      {
        title: "Miro",
        icon: <SiMiro className="text-yellow-500" />,
      },
      {
        title: "UI/UX Best Practices",
        icon: <MdOutlineDesignServices className="text-blue-500" />,
      },
      {
        title: "Chart.js",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        title: "Responsive Design",
        icon: <BsGlobe className="text-green-500" />,
      },
      {
        title: "Accessibility",
        icon: <TbAccessible className="text-blue-600" />,
      },
    ],
    "🔗 Backend, API & Database": [
      {
        title: "Node.js",
        icon: <FaNodeJs className="text-green-600" />,
      },
      {
        title: "RESTful APIs",
        icon: <TbApi className="text-green-500" />,
      },
      {
        title: "GraphQL",
        icon: <SiGraphql className="text-pink-600" />,
      },
      {
        title: "Postman",
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-400" />,
      },
      {
        title: "Firebase & GCS",
        icon: <SiFirebase className="text-yellow-500" />,
      },
      {
        title: "Python",
        icon: <FaPython className="text-blue-500" />,
      },
    ],
    "🧪 Testing & Debugging": [
      {
        title: "Jest",
        icon: <SiJest className="text-red-600" />,
      },
      {
        title: "React Testing Library",
        icon: <BiTestTube className="text-blue-500" />,
      },
      {
        title: "Playwright",
        icon: <BiTestTube className="text-purple-500" />,
      },
      {
        title: "Storybook",
        icon: <SiStorybook className="text-pink-500" />,
      },
      {
        title: "Chrome DevTools",
        icon: <AiFillTool className="text-blue-500" />,
      },
      {
        title: "Responsively App",
        icon: <BsGlobe className="text-green-500" />,
      },
      {
        title: "NVDA Testing",
        icon: <TbAccessible className="text-blue-600" />,
      },
      {
        title: "Lighthouse",
        icon: <AiFillThunderbolt className="text-yellow-400" />,
      },
    ],
    "🚀 DevOps & Deployment": [
      {
        title: "Git & GitHub",
        icon: <FaGithub className="text-gray-800 dark:text-white" />,
      },
      {
        title: "Git Bash",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        title: "SourceTree",
        icon: <FaGitAlt className="text-blue-500" />,
      },
      {
        title: "GitHub Actions",
        icon: <SiGithubactions className="text-blue-500" />,
      },
      {
        title: "Docker",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        title: "AWS & Azure",
        icon: <FaAws className="text-orange-500" />,
      },
      {
        title: "CI/CD Pipelines",
        icon: <AiOutlineCloud className="text-blue-400" />,
      },
    ],
    "🔄 Collaboration & Workflow": [
      {
        title: "Jira & Confluence",
        icon: <FaJira className="text-blue-500" />,
      },
      {
        title: "Notion",
        icon: <SiNotion className="text-black dark:text-white" />,
      },
      {
        title: "Slack",
        icon: <FaSlack className="text-purple-500" />,
      },
      {
        title: "Microsoft Teams",
        icon: <FaMicrosoft className="text-blue-500" />,
      },
      {
        title: "Google Meet",
        icon: <SiGooglecloud className="text-blue-500" />,
      },
      {
        title: "Discord",
        icon: <SiDiscord className="text-indigo-500" />,
      },
      {
        title: "Agile & Scrum",
        icon: <AiOutlineTeam className="text-blue-500" />,
      },
    ],
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Experience & Skills
          </h2>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full w-full relative hover:scale-[1.02] transform hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2 flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-500 dark:text-blue-400">
                          {exp.company}
                        </p>
                        <p className="text-base text-blue-500/80 dark:text-blue-400/80">
                          {exp.period}
                        </p>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 line-clamp-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 w-full min-w-0 mt-6">
                        {exp.type === "education" ? (
                          // Show all skills for education
                          exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full max-w-full truncate break-words"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          // Show 2 skills + count for work experience
                          <>
                            {exp.skills.slice(0, 2).map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full max-w-full truncate break-words"
                              >
                                {skill}
                              </span>
                            ))}
                            {exp.skills[2] && (
                              <span className="px-4 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full max-w-full truncate break-words">
                                {exp.skills[2]}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  {exp.type !== "education" && (
                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="absolute bottom-8 right-8 flex items-center gap-2 text-blue-500 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="pt-16">
            <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Technical Skills
            </h3>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(skillsByCategory).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === category
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsByCategory[activeTab].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modal for Detailed View */}
          <AnimatePresence>
            {selectedExp && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
                  >
                    <IoClose size={28} />
                  </button>

                  {/* Modal Content */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-3">
                        <img
                          src={selectedExp.logo}
                          alt={selectedExp.company}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedExp.role}
                        </h3>
                        <p className="text-xl text-blue-500">
                          {selectedExp.company}
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          {selectedExp.period}
                        </p>
                      </div>
                    </div>

                    {/* Projects */}
                    {selectedExp.details.projects.map((project, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                        <ul className="space-y-3">
                          {project.points.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="flex items-start gap-3 text-lg text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-blue-500 mt-1.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Technologies */}
                    <div className="pt-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExp.details.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-base"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
