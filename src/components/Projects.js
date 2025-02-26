import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://mern-backend-248k.onrender.com/api/projects")
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <p className="mt-2">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="mt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mr-4"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
