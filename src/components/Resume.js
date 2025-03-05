import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-green-400 mb-6">My Resume</h1>
      <iframe
        src="/resume.pdf"
        className="w-full max-w-3xl h-[600px] rounded-lg shadow-md" title="Resume of Hamed Haghani"
      ></iframe>
      <a
        href="/resume.pdf"
        download="HamedHaghani_Resume.pdf"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
