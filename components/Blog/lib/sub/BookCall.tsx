"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const BookCallSidebar: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <div className="w-full max-w-sm rounded-lg bg-teal-600 px-6 py-6 text-white shadow-md">
      <h2 className="mb-1 text-xl font-bold">Book a call</h2>
      <p className="mb-4 text-sm">
        Please give us more information to get started.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-teal-400 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-teal-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-teal-400 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-teal-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone:
          </label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l border border-r-0 border-teal-400 bg-gray-50 px-3 text-sm text-gray-500">
              +44
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-r border border-teal-400 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-teal-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded border border-teal-400 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-teal-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-yellow-400 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default BookCallSidebar;
