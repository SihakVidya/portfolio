import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillPage />
      <ProjectPage />
    </>
  );
}

export default App;
