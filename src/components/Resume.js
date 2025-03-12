import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white text-black">
      
      {/* ✅ Left Section - Personal Information */}
      <div className="md:w-1/3 text-center md:text-left md:pr-10">
        <h2 className="text-5xl font-bold text-purple-600 mb-6"> personal Information</h2>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Name:</strong> <span className="text-gray-900">Hamed Haghani</span>
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Email:</strong> <span className="text-gray-900">HamedHaghani@Yahoo.com</span>
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Location:</strong> <span className="text-gray-900">Toronto, Canada</span>
        </p>
        <p className="text-lg text-gray-700 mb-3">
          <strong>Education: </strong> 
          <span className="text-gray-900"> Advanced Diploma , George Brown College</span>
        </p>
      </div>

      {/* ✅ Right Section - Resume */}
      <div className="md:w-2/3 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-6">
        <h2 className="text-5xl font-bold text-purple-600 mb-6">Resume</h2>

        {/* Resume PDF Preview */}
        <div className="w-full flex justify-center">
          <iframe 
            src="/resume.pdf" 
            className="w-full max-w-3xl h-96 border-2 border-gray-300 rounded-lg shadow-md" 
            title="Resume"
          ></iframe>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a href="/resume.pdf" download className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300">
            Download Resume
          </a>
        </div>
      </div>

    </div>
  );
};

export default Resume;
