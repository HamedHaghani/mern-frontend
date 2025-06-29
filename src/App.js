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
        Hi, I'm <span className="text-purple-500">Hamed!</span>
      </h1>
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
            <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
              <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link to="resume" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">Resume</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <div className="relative z-10 pt-16">
          {/* Home Section */}
          <section id="hero">
            <Home />
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 text-center md:text-left bg-white text-black mt-24">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-10 bg-white shadow-lg rounded-lg w-full max-w-screen-lg">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/profile.jpg"
                  alt="Hamed Haghani"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
                />
              </div>

              <div className="md:w-2/3 max-w-2xl px-6">
                <h2 className="text-5xl font-extrabold text-purple-700 mb-6">About Me</h2>

                <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-purple-500 pl-4">
                  I have a strong passion for programming and problem-solving, with a solid understanding of data structures and algorithms.
                  <p>My background in engineering has helped me think logically and build efficient solutions.</p>
                  I also have strong communication skills, allowing me to work well with teams and explain technical concepts clearly.
                  I'm always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving world of software development.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-2xl">⚡</span>
                    <p><strong>JavaScript & Java</strong> expert in debugging & performance optimization.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-2xl">🚀</span>
                    <p><strong>Data Structures & Algorithms</strong> optimizing performance & scalability.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-2xl">🐳</span>
                    <p><strong>Docker & CI/CD</strong> containerized deployments & automation.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-2xl">🛠️</span>
                    <p><strong>Test-Driven Development</strong> writing robust & scalable applications.</p>
                  </div>
                </div>

                {/* Taskforce Project Card */}
                <div className="mt-10">
                  <div className="border border-gray-200 bg-gray-50 rounded-md p-5 shadow-sm">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Featured Project: Taskforce Management App</h3>
                    <p className="text-gray-700 mb-2">
                      A full-stack application built using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>. It allows managers to schedule shifts, track employee hours, and process payments.
                    </p>
                    <a
                      href="https://taskforce-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View Live App →
                    </a>
                    <p className="text-gray-500 text-sm italic mt-2">
                      Note: Hosted on a free Render account, so backend/database may take up to 1 minute to spin up if inactive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            <Projects />
          </section>

          {/* Resume Section */}
          <section id="resume" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            <Resume />
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
            <Contact />
          </section>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
