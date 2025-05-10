import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Importing the spinner

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("https://mern-backend-248k.onrender.com/api/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <h2 className="text-5xl font-bold text-blue-600 text-center mb-20 mt-12">My Projects</h2>

      {/* Show Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project) => {
                // Extract YouTube Video ID from different link formats
                let videoId = "";
                if (project.youtubeLink) {
                  if (project.youtubeLink.includes("youtu.be/")) {
                    videoId = project.youtubeLink.split("youtu.be/")[1];
                  } else if (project.youtubeLink.includes("shorts/")) {
                    videoId = project.youtubeLink.split("shorts/")[1];
                  } else if (project.youtubeLink.includes("watch?v=")) {
                    videoId = project.youtubeLink.split("v=")[1].split("&")[0];
                  }
                }

                return (
                  <div key={project._id} className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
                    {/* ✅ YouTube Video with Auto-Replay */}
                    {videoId ? (
                      <iframe 
                        width="100%" 
                        height="200"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg mb-3"
                      ></iframe>
                    ) : (
                      project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-80 object-cover rounded-lg mb-3"
                        />
                      )
                    )}

                    {/* ✅ Project Title */}
                    <h3 className="text-lg font-semibold text-center">{project.title}</h3>
                    
                    {/* ✅ Project Description */}
                    <p className="mt-1 text-sm text-gray-600 text-center">{project.description}</p>
                    
                    {/* ✅ Technologies Used */}
                    <p className="mt-1 text-xs text-gray-500">
                      <strong>Technologies:</strong> {project.technologies.join(", ")}
                    </p>

                    {/* ✅ GitHub Link */}
                    <div className="mt-3 flex space-x-4">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
