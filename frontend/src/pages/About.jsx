import React, { useEffect, useState } from "react";

const DhaarmiWebsite = () => {

     const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({ customers: 0, retailers: 0, services: 0 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set up intersection observer to trigger animations when section is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  // Animate the count numbers when in view
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds for the full animation
      const steps = 50;
      const interval = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          customers: Math.floor(progress * 100),
          retailers: Math.floor(progress * 500),
          services: Math.floor(progress * 100)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts({
            customers: 100,
            retailers: 500,
            services: 100
          });
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView]);
  return (
    <div className="font-sans">
      {/* Header Banner */}
      {/* <div className="relative">
        <div className="w-full h-48 bg-blue-100 relative overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/api/placeholder/1200/400')",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-navy-800">
                About the shop
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-blue-600">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span>&gt;</span>
                <span>About the shop</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="relative">
        <div className="w-full h-48 bg-amber-300 relative overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/api/placeholder/1200/400')",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-blue-900/30"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-white">About</h1>
              <div className="flex items-center space-x-2 mt-4 text-white">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span>&gt;</span>
                <span>About the shop</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* About Us Section */}
      <div
        className="bg-red-50 w-full h-full pt-10 pb-3 px-2 relative"
        style={{
          backgroundImage: "url('./home/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative text-center pr-8">
          <div className="flex justify-center items-center w-full md:absolute  md:top-0 md:right-0 md:w-auto md:mr-4 mt-2  md:mt-2">
            <svg width="50" height="30" viewBox="0 0 3 2" className="ml-3">
              <rect width="3" height="2" fill="white" />
              <rect width="3" height="0.67" y="0" fill="#FF9933" />
              <rect width="3" height="0.67" y="1.33" fill="#138808" />
              <circle
                cx="1.5"
                cy="1"
                r="0.3"
                fill="none"
                stroke="#000080"
                strokeWidth="0.05"
              />
              <path
                d="M 1.5 1 L 1.8 1.2 M 1.5 1 L 1.2 1.2 M 1.5 1 L 1.8 0.8 M 1.5 1 L 1.2 0.8 M 1.5 1 L 1.5 1.3 M 1.5 1 L 1.5 0.7 M 1.5 1 L 1.8 1 M 1.5 1 L 1.2 1"
                stroke="#000080"
                strokeWidth="0.02"
              />
            </svg>
            <p className="text-gray-700 font-medium ml-2 text-sm md:text-base">
              Operating in India.
            </p>
          </div>

          <div className="mb-6 mt-5 flex justify-center  items-center">
            <h1 className="text-5xl text-orange-500 font-bold text-navy-900">
              Dhaarmi Aata Chakki
            </h1>
          </div>
          <div className="flex justify-center items-center text-center text-black-600 pt-6 pb-5 leading-relaxed">
            <p className="mx-auto mb-4 max-w-3xl px-4">
              Dhaarmi has a large scale of experience of 21 years in household
              products. The company has shown exceptional growth in the last few
              years and has become a famous household name. Dhaarmi is pushing
              its own boundaries by introducing new products designed for high
              performance, time-saving, and easy-to-use features with extended
              production capacity. Innovation and customer satisfaction are
              Dhaarmi's passion.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="bg-white py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 md:gap-16">
            {/* Customer Stats */}
            <div
              className={`text-center transform ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } 
            transition-all duration-700 ease-out`}
            >
              <div className="text-blue-700 flex justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 ${inView ? "animate-bounce" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-blue-800">
                {counts.customers}K+
              </h2>
              <p className="text-gray-700 mt-2">Happy Customers</p>
            </div>

            {/* Retailers Stats */}
            <div
              className={`text-center transform ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } 
            transition-all duration-700 ease-out delay-300`}
            >
              <div className="text-blue-700 flex justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 ${inView ? "animate-pulse" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-blue-800">
                {counts.retailers}+
              </h2>
              <p className="text-gray-700 mt-2">Retailers Across India</p>
            </div>

            {/* Service Centers Stats */}
            <div
              className={`text-center transform ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } 
            transition-all duration-700 ease-out delay-600`}
            >
              <div className="text-blue-700 flex justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 ${inView ? "animate-ping" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-blue-800">
                {counts.services}+
              </h2>
              <p className="text-gray-700 mt-2">Service Centers Across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Feature Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="./home/c3.jpg"
              alt="WOW Aata Chakki Product"
              className="rounded-md shadow-md max-w-full h-96"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              <span className="text-orange-500 text-5xl"> Dhaarmi's </span>
              Growth Journey
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Since its inception, Dhaarmi has made significant strides in
                Gujarat by investing heavily in local industries, promoting
                import substitution, and creating employment opportunities.
                Every component of Dhaarmi’s products is crafted using
                indigenous designs and manufacturing processes. With
                self-developed technologies and an expanding market reach,
                Dhaarmi has become one of the top brands in its field.
              </p>
              <p>
                The company's expansion within Gujarat has paved the way for its
                growth in neighboring regions, including All India Through a
                committed, honest, and well-organized approach, Dhaarmi
                continues to progress steadily towards its long-term goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Make in India Section */}
      <div className="bg-white py-12 px-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center">
          {/* Left Side: Text (Text First in Desktop, Below in Mobile) */}
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              <span className="text-orange-500 text-5xl"> INDIA </span>
              Ki Apni Aata Chakki
            </h2>
            <div className="text-gray-600 space-y-4 text-justify">
              <p>
                Make in India – is the thought for the young generation He
                believes that building up any nation is the responsibility of
                the youth, and India, with its strong youth power, can rise on
                the global platform with core cultural values and
                self-recognition.
              </p>
              <p>
                His deeply rooted values towards the nation and society make him
                believe that anything can be developed and produced in India. He
                aims to expand his impact in various sectors while staying
                within the nation's periphery.
              </p>
              <p>
                "Make in India" is a movement that strengthens the nation's
                economy, creates employment, and builds respect in the global
                business world. He proudly embraces his Indian identity and aims
                to develop products that contribute to the nation's growth.
              </p>
            </div>
          </div>

          {/* Right Side: Image (Image on Right in Desktop, Above in Mobile) */}
          <div className="w-full md:w-1/2 flex justify-center pb-5">
            <img
              src="/home/c4.jpg"
              alt="Fully Automatic Domestic Flour Mill"
              className="rounded-md shadow-lg max-w-full h-64 sm:h-80  md:h-96"
            />
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      {/* <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        <a
          href="tel:+1234567890"
          className="bg-blue-700 text-white p-3 rounded-r-md shadow-md hover:bg-blue-800 transition-colors"
        >
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
        </a>
        <a
          href="https://wa.me/1234567890"
          className="bg-green-500 text-white p-3 rounded-r-md shadow-md hover:bg-green-600 transition-colors"
        >
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
      </div> */}
    </div>
  );
};

export default DhaarmiWebsite;
