import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillPage from "./components/SkillPage";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillPage />
    </>
  );
}

export default App;
