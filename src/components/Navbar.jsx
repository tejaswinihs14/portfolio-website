import React from "react";
import { FaMoon } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
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
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-8 md:px-16 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="group relative"
            >
              <div className="flex items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl group-hover:opacity-0 group-hover:w-0 transition-all duration-300">
                  TS
                </div>
                <div className="overflow-hidden">
                  <span className="text-[#9333EA] font-medium text-base sm:text-lg md:text-xl whitespace-nowrap pl-2 w-0 opacity-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300">
                    Tejaswini Helagalli Shivabasappa
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-base lg:text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "hero"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              Engr.
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base lg:text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "about"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-base lg:text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
                activeSection === "experience"
                  ? "text-[#9333EA] border-b-2 border-[#9333EA]"
                  : "text-gray-600"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-base lg:text-lg py-1 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] hover:border-b-2 hover:border-[#9333EA] ${
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
              className="ml-6 lg:ml-8 w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <FaMoon size={20} className="lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <FaMoon size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX size={22} className="sm:w-6 sm:h-6" />
              ) : (
                <HiMenuAlt3 size={22} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100 py-3"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-base sm:text-lg py-2.5 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] ${
                activeSection === "hero"
                  ? "text-[#9333EA] border-l-4 border-[#9333EA] pl-4"
                  : "text-gray-600 pl-4"
              }`}
            >
              Engr.
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base sm:text-lg py-2.5 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] ${
                activeSection === "about"
                  ? "text-[#9333EA] border-l-4 border-[#9333EA] pl-4"
                  : "text-gray-600 pl-4"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-base sm:text-lg py-2.5 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] ${
                activeSection === "experience"
                  ? "text-[#9333EA] border-l-4 border-[#9333EA] pl-4"
                  : "text-gray-600 pl-4"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-base sm:text-lg py-2.5 transition-all duration-300 dark:text-gray-300 hover:text-[#9333EA] ${
                activeSection === "projects"
                  ? "text-[#9333EA] border-l-4 border-[#9333EA] pl-4"
                  : "text-gray-600 pl-4"
              }`}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
