import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/navBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import particles from "./utils.js/particles";

// Lazy load components for better performance
const Home = lazy(() => import("./containers/home"));
const About = lazy(() => import("./containers/about"));
const Resume = lazy(() => import("./containers/resume"));
const Skills = lazy(() => import("./containers/skills"));
const Portfolio = lazy(() => import("./containers/portfolio"));
const Contact = lazy(() => import("./containers/contact"));

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <ThemeProvider>
      <div className="App">
        {/* particles js */}
        {renderParticleJsInHomePage && (
          <Particles id="particles" options={particles} init={handleInit} />
        )}

        {/* navbar */}
        <Navbar />

        {/* main page content */}
        <div className="App__main-page-content">
          <Suspense fallback={
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading...</p>
            </div>
          }>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/works" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
