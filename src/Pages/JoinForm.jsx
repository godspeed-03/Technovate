// JoinForm.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const JoinForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    city: '',
    linkedProfile: '',
    judgeExperience: '',
    currentPosition: '',
    whyTechnovate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    //perform any additional validation or processing before submitting
    onSubmit(formData);
  };

  return (
    <div
    className="min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url('src/assets/8169674 1.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <div className="max-w-xl w-full bg-black bg-opacity-50 text-white p-6 rounded shadow-md my-4 mx-4">
        <h1 className="text-lg font-semibold mb-4">Your Info</h1>

        {/* Name */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="name">
            Name*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="contact">
            Contact*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="email">
            Email*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="city">
            City*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Linked Profile */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="linkedProfile">
            LinkedIn Profile*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="text"
            id="linkedProfile"
            name="linkedProfile"
            value={formData.linkedProfile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Judge Experience */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="judgeExperience">
            If you were a judge before, Spill the tea on your experience and tell us how was it?*
          </label>
          <textarea
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            id="judgeExperience"
            name="judgeExperience"
            value={formData.judgeExperience}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Current Position */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="currentPosition">
            Please tell us your current position and the organization you are working with currently?*
          </label>
          <input
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            type="text"
            id="currentPosition"
            name="currentPosition"
            value={formData.currentPosition}
            onChange={handleChange}
            required
          />
        </div>

        {/* Why Technovate */}
        <div className="mb-2">
          <label className="block mb-1" htmlFor="whyTechnovate">
            Why do you want to join Technovate?*
          </label>
          <textarea
            className="w-full p-2 text-sm border border-gray-300 rounded text-black"
            id="whyTechnovate"
            name="whyTechnovate"
            value={formData.whyTechnovate}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button
          className="bg-gradient-to-r from-white to-#CFAAFF text-white py-2 px-4 rounded w-full mt-4"
          onClick={handleSubmit}
        >
          Request to Join
        </button>
      </div>
    </div>
  );
};

export default JoinForm;
