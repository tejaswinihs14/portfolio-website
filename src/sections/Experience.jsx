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
  const [activeTab, setActiveTab] = useState("💻 Frontend Tech");

  const experiences = [
    {
      type: "professional",
      role: "Frontend Engineer",
      company: "Vosyn.Inc",
      period: "2024 - Present",
      logo: "/vosynLogo.png",
      description: "Led frontend development for VosynVerse platform.",
      skills: ["React", "Next.js", "TypeScript"],
      details: {
        projects: [
          {
            title: "VosynVerse Platform Enhancement",
            points: [
              "Implemented real-time collaboration features using WebSocket",
              "Developed responsive dashboard with Material-UI components",
              "Optimized application performance, reducing load time by 40%",
            ],
          },
          {
            title: "Feature Development",
            points: [
              "Built View History feature with infinite scroll and filters",
              "Implemented Dark Mode with theme persistence",
              "Created reusable component library with Storybook",
            ],
          },
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux",
          "Material-UI",
          "WebSocket",
          "Storybook",
        ],
      },
    },
    {
      type: "professional",
      role: "Web Design and Development Expert",
      company: "Mercor · Freelance",
      period: "Jan 2025 - Feb 2025",
      logo: "/Mercor_Logo.jpg",
      description:
        "Developed and designed web applications for clients in Greater Vancouver region.",
      skills: ["React", "Next.js", "Web Design"],
      details: {
        projects: [
          {
            title: "Web Development Projects",
            points: [
              "Led web design and development projects for various clients in Greater Vancouver area",
              "Implemented responsive and modern web designs using React and Next.js",
              "Collaborated with remote teams to deliver high-quality web solutions",
            ],
          },
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Responsive Design",
          "UI/UX Design",
        ],
      },
    },
    {
      type: "professional",
      role: "UI/UX Developer",
      company: "Larus Technologies",
      period: "2021 - 2024",
      logo: "/LarusTech.png",
      description:
        "Developed AI-integrated interfaces for retail and defense platforms.",
      skills: ["React", "Redux", "SASS"],
      details: {
        projects: [
          {
            title: "Unilever Retail Platform",
            points: [
              "Architected AI-powered product recommendation system UI",
              "Implemented real-time inventory tracking dashboard",
              "Reduced page load times by 50% through code optimization",
            ],
          },
          {
            title: "Total::Perception™ Defense Platform",
            points: [
              "Redesigned mission-critical monitoring interface",
              "Integrated LuciadLTI for advanced geospatial visualization",
              "Implemented secure authentication and authorization",
            ],
          },
        ],
        technologies: [
          "React",
          "Redux",
          "SASS",
          "LuciadLTI",
          "Power BI",
          "D3.js",
          "OAuth2",
        ],
      },
    },
    {
      type: "education",
      role: "Masters in Computer Science",
      company: "University of Ottawa",
      period: "2019 - 2021",
      logo: "/UottawaLogo.jpg",
      description: "Specialized in Machine Learning and AI.",
      skills: ["Python", "Transformers", "+5"],
      details: {
        projects: [
          {
            title: "Research Focus",
            points: [
              "Machine Learning algorithms and applications",
              "Deep Learning frameworks and neural networks",
              "Computer Vision and Natural Language Processing",
            ],
          },
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "PyTorch",
          "OpenCV",
          "NLTK",
          "Scikit-learn",
        ],
      },
    },
    {
      type: "professional",
      role: "Associate Software Engineer",
      company: "Accenture Solution Pvd Ltd",
      period: "Nov 2017 - July 2019",
      logo: "/AccentureLogo.png",
      description:
        "Developed reusable UI components and optimized applications for major retail clients.",
      skills: ["React", "JavaScript", "UI Components"],
      details: {
        projects: [
          {
            title: "Loblaws UI Component Library",
            points: [
              "Developed and shared 15+ reusable UI components for Loblaws, including modal windows and interactive forms, using React, enhancing code efficiency and reducing redundant code.",
              "Conducted 20+ development review sessions, fostering a culture of collaborative feedback and enhancing design quality and product usability.",
              "Implemented best practices for component reusability and maintainability across multiple projects.",
            ],
          },
          {
            title: "Vera-Style Target Application",
            points: [
              "Optimized Vera-Style for Target, a fashion trend recommendation application, focusing on improved product filtering and personalized recommendations.",
              "Drove increase in engagement as measured by average session duration and pageviews.",
              "Implemented responsive design principles ensuring consistent experience across devices.",
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
        ],
      },
    },
    {
      type: "education",
      role: "Bachelor in Engineering",
      company: "Visvesvaraya Technological University",
      period: "2012 - 2016",
      logo: "/VTULogo.png",
      description:
        "Electronics and Communication Engineering with focus on Computer Science fundamentals.",
      skills: ["Python", "C++", "Java"],
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
    "💻 Frontend Tech": [
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
    ],
    "🔗 Backend, API & Database": [
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
      {
        title: "WebSockets",
        icon: <AiFillThunderbolt className="text-yellow-400" />,
      },
    ],
    "⚡ Performance & Optimization": [
      {
        title: "Lazy Loading",
        icon: <BsSpeedometer className="text-orange-500" />,
      },
      {
        title: "Code Splitting",
        icon: <AiOutlineApartment className="text-blue-500" />,
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
        title: "Responsive Design",
        icon: <BsGlobe className="text-green-500" />,
      },
      {
        title: "Accessibility",
        icon: <TbAccessible className="text-blue-600" />,
      },
    ],
    "🎨 UI/UX & Design Tools": [
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
    ],
    "🧪 Testing & Debugging": [
      {
        title: "Jest & RTL",
        icon: <SiJest className="text-red-600" />,
      },
      {
        title: "Cypress",
        icon: <SiCypress className="text-gray-700 dark:text-gray-300" />,
      },
      {
        title: "Storybook",
        icon: <SiStorybook className="text-pink-500" />,
      },
      {
        title: "Chrome DevTools",
        icon: <AiFillTool className="text-blue-500" />,
      },
    ],
    "🚀 DevOps & Deployment": [
      {
        title: "Git & GitHub",
        icon: <FaGithub className="text-gray-800 dark:text-white" />,
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
        title: "Slack & Teams",
        icon: <FaSlack className="text-purple-500" />,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2">
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
                      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedExp(exp)}
                    className="absolute bottom-8 right-8 text-blue-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    View Details
                  </button>
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
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
