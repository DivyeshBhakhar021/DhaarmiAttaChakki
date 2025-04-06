import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = ({ cartItemCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Product", path: "/commercial-aata-chakki" },
    { name: "Contact Us", path: "/contact" },
    {
      name: "Cart",
      path: "/cart",
      icon: <ShoppingCart className="inline-block h-5 w-5 ml-1" />,
    },
  ];
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="sticky top-0 bg-white shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/home/logo.png"
              alt="Dhaarmi Logo"
              className="h-8 sm:h-10 md:h-12 cursor-pointer"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="text-blue-900 font-medium text-sm lg:text-base relative flex items-center"
            >
              <motion.span
                whileHover={{ scale: 1.1, color: "#0056b3" }}
                className="cursor-pointer flex items-center"
              >
                {item.name} {item.icon}
                {item.name === "Cart" && cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </motion.span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                onClick={closeMobileMenu} 
                className="block py-3 text-blue-900 font-medium border-b border-gray-100 relative flex items-center"
              >
                <motion.span
                  whileHover={{ x: 5, color: "#0056b3" }}
                  className="cursor-pointer flex items-center"
                >
                  {item.name} {item.icon}
                  {item.name === "Cart" && cartItemCount > 0 && (
                    <span className="absolute right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
