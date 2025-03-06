import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-backend-248k.onrender.com/api/contact", formData)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Error sending message. Try again later."));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-white text-black">
      <h2 className="text-5xl font-bold text-blue-600 mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-2 mt-1 border rounded-lg" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-2 mt-1 border rounded-lg" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required
            className="w-full px-4 py-2 mt-1 border rounded-lg"></textarea>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
  );
};

export default Contact;
