import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

const Home = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold text-green-400">Welcome to My Portfolio</h1>
    <p className="mt-4 text-gray-300">Showcasing my projects and skills.</p>
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
        <nav className="bg-gray-800 py-4">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
