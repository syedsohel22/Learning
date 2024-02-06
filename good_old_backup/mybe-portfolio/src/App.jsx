import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import GithubStat from "./components/GithubStat";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <GithubStat />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
