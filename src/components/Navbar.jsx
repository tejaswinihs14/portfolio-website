import React from "react";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return; // Safety check if element doesn't exist

    const offset = 80; // Height of your navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
  };

  // Listen to scroll and update activeSection
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects"];
      const offset = 100;
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(sections[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("hero");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md">
      <div className="w-full max-w-[2000px] mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="group relative"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-2xl group-hover:opacity-0 group-hover:w-0 transition-all duration-300">
                  TS
                </div>
                <div className="overflow-hidden">
                  <span className="text-[#9333EA] font-medium text-xl whitespace-nowrap pl-2 w-0 opacity-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300">
                    Tejaswini Helagalli Shivabasappa
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "hero"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              Engr.
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "about"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "experience"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "projects"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              Projects
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-8 w-12 h-12 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <FaMoon size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
