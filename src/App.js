import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";


const Home = () => (
  <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6">
    {/* Profile Image */}
    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
      <img 
        src="/profile.jpg" 
        alt="Hamed Haghani" 
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-green-400"
      />
    </div>

    {/* Intro Text */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
        Hi, I'm Hamed! 👋
      </h1>
      <p className="text-lg text-gray-300 max-w-xl">
        I'm a Full Stack Developer passionate about building scalable web applications.
        Check out my projects and feel free to contact me!
      </p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
          View Projects
        </a>
        <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold text-blue-400">About Me</h1>
    <p className="mt-4 text-gray-300">I am a full-stack developer passionate about web development.</p>
  </div>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-4 shadow-md">
          <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">My Portfolio</h1>

            {/* Mobile Menu Button */}
            <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>

            {/* Navigation Links */}
            <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-green-400" : ""}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-green-400" : ""}`}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-green-400" : ""}`}>
                  About
                </NavLink>
              </li>
              <li>
                 <NavLink to="/resume" className={({ isActive }) => 
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-green-400" : ""}`}>
                    Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${isActive ? "border-b-2 border-green-400" : ""}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
