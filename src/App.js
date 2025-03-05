import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import * as THREE from "three"; // Correct Three.js Import
import BIRDS from "vanta/src/vanta.birds";

// ✅ Home now only has a simple welcome message
const Home = () => (
  <div className="relative min-h-screen flex flex-col items-left justify-center text-white px-6">
    <h1 className="text-6xl font-bold text-white-400">
      Welcome to My <span className="text-orange-400">Website</span>
    </h1>
    {/* <p className="text-lg text-gray-400 mt-4">Explore my projects and learn more about me.</p> */}

    {/* ✅ Added Buttons */}
    <div className="mt-6 space-x-2 md:space-x-4">
      <a href="/projects" className="bg-orange-500 hover:bg-blue-900 text-white py-2 px-4 md:py-2 md:px-6 rounded-lg">
        View Projects
      </a>
      <a href="/contact" className="bg-gray-500 hover:bg-blue-900 text-white py-2 px-4 md:py-2 md:px-6 rounded-lg">
        Contact Me
      </a>
    </div>
  </div>
);


const About = () => (
  <div className="relative min-h-screen flex flex-col items-center text-white px-6 py-10">
    {/* Profile Image */}
    <div className="w-40 h-40 md:w-56 md:h-56">
      <img 
        src="/profile.jpg" 
        alt="Hamed Haghani" 
        className="w-full h-full rounded-full shadow-lg border-4 border-white"
      />
    </div>

    {/* About Text (Buttons Removed) */}
    <div className="text-center mt-4 max-w-md md:max-w-2xl">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-gray-100">
        We Build <span className="text-orange-400">Your Software</span>
      </h1>
      <p className="text-base md:text-lg text-gray-300 mt-2 md:mt-4">
      As an experienced engineer, I bring a profound passion for computer programming, artificial intelligence (AI), and data structures to the table. With over five years of experience in managerial positions, my professional journey is characterized by an unyielding pursuit of innovation and a steadfast commitment to excellence. My engineering background has equipped me with a robust foundation, allowing me to excel in complex problem-solving scenarios and craft effective, efficient solutions.
      </p>
    </div>
  </div>
);



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaEffectRef.current) {
      vantaEffectRef.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        backgroundColor: 0x111827,
        color1: 0xff0000,
        color2: 0xd1ff,
        quantity: 5,
        birdSize: 1,
        wingSpan: 30,
        speedLimit: 5,
        separation: 20,
        alignment: 20,
        cohesion: 20,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <Router>
      {/* Birds Background - But Now Correctly Layered */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10"></div>

      {/* Main Content Wrapper */}
      <div className="relative min-h-screen bg-transparent text-white">
        
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-4 shadow-md">
          <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">" I'm Hamed From Toronto "</h1>

            {/* Mobile Menu Button */}
            <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
            {/* Navigation Links */}
            <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-gray-400" : ""}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-gray-400" : ""}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-gray-400" : ""}`}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-gray-400" : ""}`}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-gray-400" : ""}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Routes - Now Properly Displayed */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
