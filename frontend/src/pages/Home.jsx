import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";// React-specific components
import { Autoplay, Navigation,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lightbulb, BarChart3, Shield } from "lucide-react";
import "swiper/css";
import 'swiper/css/autoplay';
import { useNavigate } from "react-router-dom";
// import a from "../assets/imges/a1.jpg"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BaseUrl } from "../App";
const slides = [
  {
    image: "../../public/home/HERO1.png",
    title: "Experience Freshly Ground Flour",
    description:
      "Our Atta Chakki brings you the purest and freshest flour right at home.",
    extraImages: [
      "../assets/imges/a1.jpg",
      "../assets/imges/a1.jpg",
      "../assets/imges/a1.jpg",
    ],
    logos: ["s11.png", "s13.png"], // Logos for this slidem,
    text: ["High Quality Motor", "2400 RPM "],
  },
  {
    image: "../../public/home/HERO3.png",
    title: "Compact and Elegant Design",
    description:
      "Fits beautifully into your kitchen while delivering superior performance.",
    extraImages: [],
    logos: ["s12.png", "s10.png"], // Another set of logos
    text: ["Electricity Consumption", "S.S. High Quality Blade"],
  },
  {
    image: "../../public/home/HERO2.png",
    title: "High-Quality Grinding Mechanism",
    description:
      "Built with precision to ensure finely ground flour for your daily needs.",
    extraImages: [],
    logos: ["s14.png", "s15.png"], // Different logos for this slide
    text: ["Average 15-20Kg Per HR", "Children Safety "],
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-cream-100 py-12"
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="text-gray-500 text-sm sm:text-base mb-2">
              — Taste, Health & Hygiene
            </div>
            <motion.h1
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4"
            >
              {slides[activeIndex].title}
            </motion.h1>
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 mb-6"
            >
              {slides[activeIndex].description}
            </motion.p>

            {/* Logos Section (Dynamically changing per slide) */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8">
              {slides[activeIndex].logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }} // Start hidden & slightly lower
                  animate={{ opacity: 1, y: 0 }} // Animate to visible position
                  transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 4px 20px rgba(0, 51, 124, 0.3)",
                  }} // Hover effect
                  className="flex flex-col  items-center space-y-2 p-4 rounded-lg shadow-lg"
                >
                  <motion.img
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                      boxShadow: "0px 4px 15px rgba(0, 51, 124, 0.5)", // Glowing border effect
                      borderRadius: "10px", // Smooth edges
                    }}
                    transition={{ duration: 0.3 }}
                    src={`/home/${logo}`}
                    alt={`Logo ${index + 1}`}
                    className="h-12 sm:h-16 border-2 border-transparent"
                  />
                  <p className="text-gray-600 text-sm sm:text-base text-center font-semibold font-poppins">
                    {slides[activeIndex].text[index]}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#00337C" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")} // Navigate to Contact page
              className="bg-blue-800 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium text-sm sm:text-base"
            >
              Inquire Now
            </motion.button>
          </div>

          {/* Right Side: Swiper Slideshow */}
          <div className="lg:w-1/2 w-full pb-5">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="relative rounded-lg shadow-xl"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    src={slide.image}
                    alt={`Product ${index + 1}`}
                    className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] bg-blue-50 object-contain rounded-lg shadow-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section>
    </div>
  );
};


const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      image: "../../public/home/b1.png", // Update with your actual image path
      title: "Best Quality",
      description:
        "Our Atta Chakki Machine offers robust quality, high efficiency, and low power consumption. It ensures smooth and fine grinding for the best flour output. Safe, durable, and low maintenance, it is perfect for both home and business use.",
      color: "blue",
    },
    {
      image: "../../public/home/b2.png", // Update with your actual image path
      title: "Best Prices",
      description:
        "Dhaarmi Atta Chakki Offers the best quality at a competitive price. Direct from the manufacturer, ensuring affordability without compromising performance.",
      color: "green",
    },
    {
      image: "../../public/home/b3.png", // Update with your actual image path
      title: "Support System",
      description:
        "Need help choosing the right Meti Atta Chakki Machine? Our team is ready to assist you with product details, pricing, and bulk orders. Contact us for expert guidance and quick support!",
      color: "orange",
    },
  ];

  const getGradientColors = (color) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-blue-600";
      case "green":
        return "from-emerald-500 to-emerald-600";
      case "orange":
        return "from-orange-500 to-orange-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const getBgHoverColor = (color) => {
    switch (color) {
      case "blue":
        return "hover:bg-blue-50";
      case "green":
        return "hover:bg-emerald-50";
      case "orange":
        return "hover:bg-orange-50";
      default:
        return "hover:bg-blue-50";
    }
  };

  const getIconBgColor = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-100";
      case "green":
        return "bg-emerald-100";
      case "orange":
        return "bg-orange-100";
      default:
        return "bg-blue-100";
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-emerald-600";
      case "orange":
        return "text-orange-600";
      default:
        return "text-blue-600";
    }
  };

  const getTitleColor = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-900";
      case "green":
        return "text-emerald-900";
      case "orange":
        return "text-orange-900";
      default:
        return "text-blue-900";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow:
                  "0 20px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`text-center p-8 rounded-2xl ${getBgHoverColor(
                feature.color
              )} transition-all duration-300 border border-gray-200 shadow-xl`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`mx-auto mb-8 ${getIconBgColor(
                  feature.color
                )} p-5 rounded-full inline-block relative overflow-hidden w-32 h-32 flex items-center justify-center`}
              >
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${getGradientColors(
                      feature.color
                    )} opacity-40`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 object-contain"
                />
              </motion.div>
              <motion.h3
                className={`text-xl font-semibold ${getTitleColor(
                  feature.color
                )} mb-4`}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.9,
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const categories = [
    {
      title: "Domestic Atta Chakki",
      bgColor: "bg-orange-100",
      image: "../../public/home/a1.png",
    },
    {
      title: "Commercial Atta chakki",
      bgColor: "bg-blue-100",
      image: "../../public/home/ab2.png",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-xl p-8 ${category.bgColor}`}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                {category.title}
              </h2>
              <motion.img
                whileHover={{ y: -10 }}
                src={category.image}
                alt={category.title}
                className="w-full  h-auto max-h-110 object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const grains = [
  { name: "WHEAT", weight: "8 TO 10 KG", image: "../../public/home/p7.jpg" },
  { name: "MAIZE", weight: "7 TO 10 KG", image: "../../public/home/p2.png" },
  { name: "HALDI", weight: "7 TO 9 KG", image: "../../public/home/p15.jpg" },
  { name: "MUNG", weight: "7 TO 10 KG", image: "../../public/home/p4.jpg" },
  { name: "RICE", weight: "7 TO 9 KG", image: "../../public/home/p5.jpeg" },
  { name: "DHANIYA", weight: "4 TO 5 KG", image: "../../public/home/p1.jpg" },
  { name: "BESAN", weight: "10 TO 12 KG", image: "../../public/home/p16.png" },
  { name: "URAD", weight: "7 TO 9 KG", image: "../../public/home/p8.jpg" },
  { name: "KALIMIRCH", weight: "7 TO 8 KG", image: "../../public/home/p9.jpg" },
  { name: "RAVA", weight: "8 TO 10 KG", image: "../../public/home/p10.jpg" },
  { name: "JUWAR", weight: "7 TO 9 KG", image: "../../public/home/p12.jpg" },
  { name: "SUGAR", weight: "8 TO 10 KG", image: "../../public/home/p13.jpg" },
];

const GrainDisplay = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Grain Collection
      </h2>

      <div className="relative">
        {/* Custom pagination bullet styles */}
        <style>
          {`
      .custom-grain-pagination {
        display: flex;
        justify-content: center;
        margin-top: 12px;
      }

      .custom-grain-pagination .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background-color: #93c5fd; /* Tailwind blue-300 */
        border-radius: 9999px;
        opacity: 0.8;
        margin: 0 6px;
        transition: background-color 0.3s, transform 0.3s;
      }

      .custom-grain-pagination .swiper-pagination-bullet-active {
        background-color: #2563eb; /* Tailwind blue-600 */
        transform: scale(1.2);
      }
    `}
        </style>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-grain-pagination", // 👈 Custom element for bullets
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {grains.map((grain) => (
            <SwiperSlide key={grain.name}>
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.random() * 0.5,
                }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow- overflow-hidden w-40 h-40 flex items-center justify-center mb-4 border-4 border-blue-300 hover:border-blue-500 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    rotate: 3,
                    boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={grain.image}
                    alt={grain.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
                <div className="text-center">
                  <motion.h3
                    className="font-bold text-blue-900 text-lg"
                    whileHover={{ scale: 1.1, color: "#1e40af" }}
                  >
                    {grain.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm"
                    whileHover={{ scale: 1.05, color: "#2563eb" }}
                  >
                    {grain.weight}
                  </motion.p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination bullets below */}
        <div className="custom-grain-pagination" />
      </div>
    </div>
  );
};

const ProductsGallery = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/products/getdata`);
      setProducts(response.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="py-10 bg-white px-4 md:px-8 lg:px-10">
      <div className="container mx-auto">
        <h2 className="text-center text-blue-900 text-xl mb-2">
          Trending Products
        </h2>
        <h1 className="text-center text-blue-900 text-3xl font-bold mb-10">
          Buy Atta Chakki
        </h1>

        <div className="relative">
          {/* Custom pagination bullet styles */}
          <style>
            {`
      .custom-swiper-pagination {
        display: flex;
        justify-content: center;
        margin-top: 14px;
      }

      .custom-swiper-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #93c5fd; /* Tailwind blue-300 */
        border-radius: 9999px;
        opacity: 1;
        margin: 0 6px;
        transition: background-color 0.3s, transform 0.3s;
      }

      .custom-swiper-pagination .swiper-pagination-bullet-active {
        background-color: #2563eb; /* Tailwind blue-600 */
        transform: scale(1.2);
      }
    `}
          </style>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination", // 👈 Custom container for bullets
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="products-swiper pb-10"
          >
            {products?.map((product) => (
              <SwiperSlide key={product._id} className="py-2">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md relative group h-74 w-full"
                >
                  <div className="p-4 flex flex-col relative group">
                    {/* Image Container */}
                    <div className="flex justify-center items-center h-52 mb-2">
                      <img
                        src={`http://localhost:5000/${product.image}`}
                        alt={product.name}
                        className="max-h-full max-w-full object-cover rounded"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="text-sm font-medium text-center text-gray-800 line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-80 translate-y-full group-hover:translate-y-0 p-4">
                      <div className="text-center">
                        <div className="flex justify-center items-center space-x-2">
                          <span className="text-gray-300 text-sm line-through">
                            ₹{product.originalPrice}
                          </span>
                          <span className="text-xl font-bold text-white">
                            ₹{product.salePrice}
                          </span>
                        </div>
                        <Link to={`/product/${product._id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/commercial-aata-chakki")}
                            className="mt-3 bg-black border-2 border-white text-white py-2 px-4 rounded text-base font-medium"
                          >
                            Select options
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Bullets BELOW the slider */}
          <div className="custom-swiper-pagination" />

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-blue-900 bg-white rounded-full p-2 shadow-md">
            &#10094;
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-blue-900 bg-white rounded-full p-2 shadow-md">
            &#10095;
          </div>
        </div>
      </div>
    </section>
  );
};


const AboutSection = () => (
  <section className="justify-center py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-blue-900 text-xl mb-2">About Us</h2>
      <h1 className="text-blue-900 text-4xl font-bold mb-8">
        Dhaarmi Atta Chakki
      </h1>

      <div className="md:flex items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <motion.img
            whileHover={{ rotate: 3 }}
            src="../../public/home/awards.png"
            alt="Certificate"
            className="mx-auto w-64  rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Operating in India.
          </h3>
          <p className="text-gray-600 mb-6">
            Dhaarmi has a large scale of Experience of 48 years in household
            product there company has shown exceptional growth in the last few
            years and has become a famous household name. Dhaarmi is pushing
            its own boundaries with introducing new products which are designed
            for high-performance and which are time-saving, easy-to-use and with
            extended production capacity, innovation and customer satisfaction
            is Dhaarmi's passion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#00337C" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-800 text-white py-2 px-6 rounded-full font-medium"
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </div>
  </section>
);

const RetailersSection = () => {
  const retailers = [
    "../../public/home/amazon_logo.png",
    "../../public/home/amazon_logo.png",
    "../../public/home/amazon_logo.png",
    "../../public/home/amazon_logo.png",
    "../../public/home/amazon_logo.png",
    "../../public/home/amazon_logo.png",
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-6 md:mb-12 animate-textFadeIn"
          style={{
            animation: "textFadeIn 2s ease-in-out forwards",
          }}
        >
          Get Your Own Atta Chakki for Fresh & Healthy Flour at Home!
        </h2>

        <style>
          {`
    @keyframes textFadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
        </style>

        {/* <div
          className="bg-red-50 w-full min-h-screen pt-10 pb-3 px-2 relative rounded-2xl"
          style={{
            backgroundImage: "url('/home/img_2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */}
      </div>
    </section>
  );
};


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="h-screen flex items-center justify-center bg-gray-50">
  //       <motion.div
  //         animate={{ rotate: 360 }}
  //         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
  //         className="w-16 h-16 border-4 border-blue-800 border-t-transparent rounded-full"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <ProductsGallery />
      {/* <AboutSection /> */}
      <GrainDisplay />
      <RetailersSection />
    </div>
  );
};

export default HomePage;
