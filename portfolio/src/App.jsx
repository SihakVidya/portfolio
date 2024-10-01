import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";
import ContactMe from "./components/ContactMe";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <AboutMe id="about" />
      <SkillPage id="skills" />
      <ProjectPage id="projects" />
      <ContactMe id="contact" />
    </>
  );
}

export default App;
