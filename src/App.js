import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="bg-white dark:bg-[#0f172a]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default App;
