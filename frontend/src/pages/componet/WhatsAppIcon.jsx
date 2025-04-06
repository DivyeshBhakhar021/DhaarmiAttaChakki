import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; //Lucide WhatsApp Icon
import { BaseUrlWHATSAPP_NUMBER } from "../../App";
const WhatsAppIcon = () => {
  const handleClick = () => {
    const phoneNumber = `${BaseUrlWHATSAPP_NUMBER}`;
    const message = "Hello! Welcome to brother.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        className="fixed bottom-5 left-5 z-50 cursor-pointer bg-green-500 p-3 rounded-full shadow-lg"
        animate={{
          y: [0, -15, 0], // Floating effect
          rotate: [0, 2, -2, 0], // Subtle rotation
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </motion.div>
      <motion.a
        href="tel:+918866538881"
        className="fixed bottom-5 right-5 z-50 cursor-pointer bg-blue-500 p-3 rounded-full shadow-lg"
        animate={{
          y: [0, -15, 0], // Floating effect
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white
          "
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
      </motion.a>
    </>
  );
};

export default WhatsAppIcon;
