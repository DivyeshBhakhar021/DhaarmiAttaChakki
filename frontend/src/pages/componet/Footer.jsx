import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-white py-12 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="md:flex">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="./home/logo.png"
            alt="Dhaarmi Logo"
            className="h-10 mb-4"
          />
          <p className="text-gray-600 text-sm">
            Dhaarmi Atta Chakki has an extensive 20 years of experience in
            manufacturing grain and spice grinding machines. Over the years, our
            company has achieved remarkable growth and has become a trusted name
            in every household for delivering high-quality, efficient, and
            durable grinding solutions.
          </p>
        </div>

        <div className="md:w-1/4 mb-8 md:mb-0 md:px-4">
          <h3 className="text-blue-900 font-bold text-lg mb-4 underline decoration-blue-900">
            Useful Links
          </h3>

          <ul className="space-y-2">
            {[
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Service Request", path: "/service-request" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Return Policy", path: "/return-policy" },
              { name: "Terms & Conditions", path: "/terms-conditions" },
            ].map((item) => (
              <li key={item.name}>
                <motion.div whileHover={{ x: 5, color: "#0056b3" }}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-blue-800 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/4 mb-8 md:mb-0 md:px-4">
          <h3 className="text-blue-900 font-bold text-lg mb-4 underline decoration-blue-900">Aata Chakki</h3>
          <ul className="space-y-2">
            {["Premium Range", "Commercial Range"].map((item) => (
              <li key={item}>
                <motion.a
                  whileHover={{ x: 5, color: "#0056b3" }}
                  href="#"
                  className="text-gray-600 hover:text-blue-800 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/4 md:px-4">
          <h3 className="text-blue-900 font-bold text-lg mb-4 underline decoration-blue-900">Contact Us</h3>
          <div className="space-y-4">
            <p className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 mt-1 text-blue-800"
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
              <span className="text-gray-600">
                Plot No. 3/b-2, Haripar(Pal), Opp. Motel The Village Hotel,
                Kalawad Road, Haripar Pal, Rajkot-360005, Gujarat, India.
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-800"
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
              <span className="text-gray-600">+91 8866538881</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-800"
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
              <span className="text-gray-600">marketing@Dhaarmi.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
