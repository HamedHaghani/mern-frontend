import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll"; 
import Footer from "./components/Footer";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { FaRobot } from "react-icons/fa";

function Home() {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaEffectRef.current) {
      vantaEffectRef.current = BIRDS({
        el: vantaRef.current, 
        THREE: THREE,
        backgroundColor: 0x111827,
        color1: 0xb0b87,
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
    <div ref={vantaRef} className="relative min-h-screen flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-[4rem] md:text-[6rem] font-extrabold tracking-wider uppercase text-gray-100">
        Hi, I'm <span className="text-purple-500">Hamed !</span>
      </h1>
      {/* <p className="text-lg text-gray-300 max-w-xl mt-4">
        I'm a Full Stack Developer passionate about building scalable web applications.
      </p> */}
      <div className="mt-6 space-x-4">
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer bg-gray-600 hover:bg-purple-600 text-white py-2 px-6 rounded-lg">
          View Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer bg-blue-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen text-white">
        
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-4 shadow-md fixed top-0 w-full z-50">
          <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white flex items-center">
          <FaRobot className="text-orange-300 text-2xl mr-2" /> My Portfolio
        </h1>

            {/* Mobile Menu Button */}
            <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>

            {/* Navigation Links */}
            <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
              <li>
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="resume" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            
            </ul>
          </div>
        </nav>

        {/* Sections with Clean White Background */}
        <div className="relative z-10 pt-16">
          {/* Home Section with Birds */}
          <section id="hero">
            <Home />
          </section>

          {/* About Section - White Background */}
<section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-center md:text-left bg-white text-black">
  
  {/* Image Section (Left Side) */}
  <div className="md:w-1/3 flex justify-center">
    <img 
      src="/profile.jpg" 
      alt="Hamed Haghani" 
      className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-gray-300"
    />
  </div>

  {/* Text Section (Right Side) */}
  <div className="md:w-2/3 max-w-2xl px-6">
    <h2 className="text-5xl font-bold text-purple-600 mb-4">About Me</h2>
    <p className="text-lg text-gray-700">
      As an experienced engineer, I bring a profound passion for computer programming, artificial intelligence (AI), and data structures to the table. With over five years of experience in managerial positions, my professional journey is characterized by an unyielding pursuit of innovation and a steadfast commitment to excellence. My engineering background has equipped me with a robust foundation, allowing me to excel in complex problem-solving scenarios and craft effective, efficient solutions.
    </p>
  </div>

</section>

          {/* Projects Section - White Background */}
          <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            {/* <h2 className="text-5xl font-bold text-blue-600 mb-4">My Projects</h2> */}
            <Projects />
          </section>
           {/* Resume Section - White Background */}
           <section id="resume" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            {/* <h2 className="text-5xl font-bold text-gray-600 mb-4">Resume</h2> */}
            <Resume />
          </section>

          {/* Contact Section - White Background */}
          <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            {/* <h2 className="text-5xl font-bold text-green-600 mb-4">Contact Me</h2> */}
            <Contact />
          </section>

         
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
