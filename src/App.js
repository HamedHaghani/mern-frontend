import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
    <h1 className="text-5xl font-bold text-green-400 mb-4">Hi, I'm Hamed! 👋</h1>
    <p className="text-lg text-gray-300 max-w-xl text-center">
      I am a Full Stack Developer passionate about building web applications.
      Check out my projects and feel free to contact me!
    </p>
    <div className="mt-6">
      <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg mr-4">
        View Projects
      </a>
      <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
        Contact Me
      </a>
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
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
       <h1 className="text-xl font-bold text-white">My Portfolio</h1>
       <ul className="flex space-x-6">
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
