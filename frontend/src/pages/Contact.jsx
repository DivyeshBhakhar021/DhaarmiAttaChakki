import React, { useState } from "react";

import { BaseUrlWHATSAPP_NUMBER } from "../App";
const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // WhatsApp number (replace with your number)
  const whatsappNumber = `${BaseUrlWHATSAPP_NUMBER}`; // Format: country code without + followed by number

  // Validation state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      // Create WhatsApp message
      const message = `
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
      `.trim();

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Simulate loading
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 1000);
    }
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "40%", // Maintains aspect ratio based on original 1520:600
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: 0,
  };

  return (
    <div className="font-sans">
      {/* Header Banner */}
      <div className="relative">
        <div className="w-full h-48 bg-blue-100 relative overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/api/placeholder/1200/400')",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-blue-900/30"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-white">Contact</h1>
              <div className="flex items-center space-x-2 mt-4 text-white">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span>&gt;</span>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Call Us */}
            <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-900">Call Us</h3>
                  <p className="text-gray-500 mt-2">+916005544032</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-800">WhatsApp</h3>
                  <p className="text-gray-500 mt-2">+916005544032</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-900">Email Us</h3>
                  <p className="text-gray-500 mt-2">
                    dhaarmiattamaker@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-blue-900">Address</h3>
                  <p className="text-gray-500 mt-2">
                    Jammu & Kashmir-180001, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent to our WhatsApp. We'll get back to
                  you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-blue-200"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-all transform hover:-translate-y-1 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "SEND A MESSAGE"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618705.8841432168!2d73.94534277324063!3d33.52457806085088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e1!3m2!1sen!2sin!4v1743934245246!5m2!1sen!2sin"
          style={iframeStyle}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jammu and Kashmir"
        />
      </div>
    </div>
  );
};

export default Contact;
