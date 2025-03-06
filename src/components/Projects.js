import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://mern-backend-248k.onrender.com/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <h2 className="text-5xl font-bold text-blue-600 text-center mb-8">My Projects</h2>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
              
              {/* ✅ Larger Project Image */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover rounded-lg mb-3"
                />
              )}

              {/* ✅ Smaller Project Title */}
              <h3 className="text-lg font-semibold text-center">{project.title}</h3>
              
              {/* ✅ Smaller Project Description */}
              <p className="mt-1 text-sm text-gray-600 text-center">{project.description}</p>
              
              {/* ✅ Smaller Technologies Text */}
              <p className="mt-1 text-xs text-gray-500">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>

              {/* ✅ GitHub & Live Demo Links */}
              <div className="mt-3 flex space-x-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
