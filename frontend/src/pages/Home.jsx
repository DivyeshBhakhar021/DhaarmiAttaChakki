import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";// React-specific components
import { Autoplay, Navigation,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lightbulb, BarChart3, Shield } from "lucide-react";
import "swiper/css";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

import 'swiper/css/autoplay';
import { useNavigate } from "react-router-dom";
// import a from "../assets/imges/a1.jpg"
import "swiper/css/navigation";
import "swiper/css/pagination";
const slides = [
  {
    image: "./home/HERO1.png",
    title: "Experience Freshly Ground Flour",
    description:
      "Our Atta Chakki brings you the purest and freshest flour right at home.",
    extraImages: [
      "./assets/imges/a1.jpg",
      "./assets/imges/a1.jpg",
      "./assets/imges/a1.jpg",
    ],
    logos: ["s11.png", "s13.png"], // Logos for this slidem,
    text: ["High Quality Motor", "2400 RPM "],
  },
  {
    image: "./home/HERO3.png",
    title: "Compact and Elegant Design",
    description:
      "Fits beautifully into your kitchen while delivering superior performance.",
    extraImages: [],
    logos: ["s12.png", "s10.png"], // Another set of logos
    text: ["Electricity Consumption", "S.S. High Quality Blade"],
  },
  {
    image: "./home/HERO2.png",
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
        className="bg-cream-100 py-4"
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
              onClick={() => navigate("/contact")}
              className="bg-blue-800 text-white py-3 px-8 text-2xl sm:text-xl rounded-full font-medium"
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
      image: "./home/b1.png", // Update with your actual image path
      title: "Best Quality",
      description:
        "Our Atta Chakki Machine offers robust quality, high efficiency, and low power consumption. It ensures smooth and fine grinding for the best flour output. Safe, durable, and low maintenance, it is perfect for both home and business use.",
      color: "blue",
    },
    {
      image: "./home/b2.png", // Update with your actual image path
      title: "Best Prices",
      description:
        "Dhaarmi Atta Chakki Offers the best quality at a competitive price. Direct from the manufacturer, ensuring affordability without compromising performance.",
      color: "green",
    },
    {
      image: "./home/b3.png", // Update with your actual image path
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
    <section className="py-10 bg-white">
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
      image: "./home/a1.png",
    },
    {
      title: "Commercial Atta chakki",
      bgColor: "bg-blue-100",
      image: "./home/ab2.png",
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
  { name: "WHEAT", weight: "8 TO 10 KG", image: "./home/p7.jpg" },
  { name: "MAIZE", weight: "7 TO 10 KG", image: "./home/p2.png" },
  { name: "HALDI", weight: "7 TO 9 KG", image: "./home/p15.jpg" },
  { name: "MUNG", weight: "7 TO 10 KG", image: "./home/p4.jpg" },
  { name: "RICE", weight: "7 TO 9 KG", image: "./home/p5.jpeg" },
  { name: "DHANIYA", weight: "4 TO 5 KG", image: "./home/p1.jpg" },
  { name: "BESAN", weight: "10 TO 12 KG", image: "./home/P16.png" },
  { name: "URAD", weight: "7 TO 9 KG", image: "./home/p8.jpg" },
  { name: "KALIMIRCH", weight: "7 TO 8 KG", image: "./home/p9.jpg" },
  { name: "RAVA", weight: "8 TO 10 KG", image: "./home/p10.jpg" },
  { name: "JUWAR", weight: "7 TO 9 KG", image: "./home/p12.jpg" },
  { name: "SUGAR", weight: "8 TO 10 KG", image: "./home/p13.jpg" },
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
  const [products, setProducts] = useState([
    {
      _id: "67eea972e260e4064d69e130",
      name: "Dhaarmi 1 HP Music Fully Automatic Aata Maker,Atta Chakki Flour Mill,Domestic Ghar Ghanti, GrindMaster 1.0 Flourmill",
      originalPrice: 24000,
      salePrice: 22000,
      image: "./product/1743697610738.jpg",
      type: "Music",
      capacity: 1,
      inStock: true,
      description:
        "Dhaarmi AttaMaker is a modern flour mill designed to meet the needs of households and small businesses. It grinds wheat into fine flour through a series of efficient steps—starting from pouring the raw grains into the hopper to delivering fresh, pure flour through the outlet.\r\n\r\nIn today’s world, where food adulteration and environmental pollutants are common, Dhaarmi AttaMaker helps protect your family from the health risks associated with contaminated food. This machine not only removes impurities but also preserves the essential nutrients of the grain, ensuring every bite is both healthy and wholesome.\r\n\r\nChoosing Dhaarmi AttaMaker means choosing safety, nutrition, and the original taste of home-ground flour—a smart and reliable addition to every modern kitchen.",
      short_description:
        "Dhaarmi  Atta Chakki 1 HP Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades  Warranty Included  Country of origin: India",
      Features:
        "Hassle-free installation and user-friendly operation\r\nDurable motor with 100% pure copper winding\r\nLong-lasting automatic PCB for reliable performance\r\nBuilt-in auto-cleaning mechanism for easy maintenance\r\nSmart LED indicators for clear operational status\r\nChild-safe door switch for added protection\r\nAdvanced sensor-based technology for precision and safety\r\nSmooth soft-close top for a premium user experience",
      Specification:
        "Brand: DHAARMI ATTAMAKER\r\nProduct Model: GrindMaster 1.0\r\nType: 1 H.P. Music\r\nApprox. Weight: 45 kg\r\nMotor Power: 1 HP high-performance motor\r\nMotor Type: 100% Copper Winding for durability and efficiency\r\nMotor Speed: 2800 RPM for fast and consistent grinding\r\nColor Variant: black\r\nPower Rating: 230 Watts\r\nEnergy Usage: Consumes approximately 0.75 kW per hour\r\nHopper Capacity: 6.5 kg for large batch grinding\r\nHopper Material: Made from premium Stainless Steel\r\nFlour Container Capacity: 5 kg\r\nDoor Mechanism: Smooth-operating  Door\r\nBlade Count: Equipped with 4/6 high-speed blades\r\nBlade Material: Precision-crafted from Stainless Steel",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "How to Use Your Dhaarmi AttaMaker – Step-by-Step Guide\r\nStep 1: Get Ready\r\nSelect Your Grains: Pick the type of grain you'd like to grind—wheat, rice, corn, or other grains of your choice.\r\n\r\nClean the Grains: Make sure the grains are clean and dry. Rinse them if needed to remove dust or dirt.\r\n\r\nRead the Instructions: Take a few minutes to go through the user manual to understand specific guidelines for your model.\r\n\r\nStep 2: Machine Setup\r\nChoose the Right Spot: Place your atta maker on a sturdy, level surface. Keep it in a dry area, away from direct sunlight and moisture.\r\n\r\nPower Connection: Plug the machine into a nearby power socket. Make sure the socket is grounded for safe operation.\r\n\r\nStep 3: Loading the Grains\r\nAdd Grains to the Hopper: Pour your selected grains into the stainless steel hopper. Don’t overfill to prevent jamming.\r\n\r\nClose the Lid Properly: Always secure the hopper lid tightly before starting the machine.\r\n\r\nStep 4: Start Grinding\r\nSwitch On the Machine: Turn on the power and let the machine reach its ideal speed.\r\n\r\nMonitor the Flow: Keep an eye on the flour outlet. The flour should flow smoothly into the container. Pause if you notice any blockage.\r\n\r\nStep 5: Collecting the Output\r\nPower Off Safely: Once you're done, turn off the machine and unplug it to avoid any accidental starts.\r\n\r\nRemove the Flour Container: Carefully take out the container. Be mindful of any flour residue or dust.\r\n\r\nStore the Flour: Transfer the fresh flour into a clean, airtight jar to preserve its freshness and nutrition.\r\n\r\nStep 6: Post-Use Cleaning\r\nClear the Hopper: Remove any leftover grains from the hopper.\r\n\r\nWipe Down the Machine: Use a soft, dry cloth or brush to clean both the inside and outside surfaces.\r\n\r\nStore Securely: If not in use for a while, keep the machine in a cool, dry place to avoid damage.\r\n",
      __v: 0,
    },
    {
      _id: "67eea9efe260e4064d69e132",
      name: "Dhaarmi 1 HP Tolky Fully Automatic Aata Maker,Atta Chakki Flour Mill,Domestic Ghar Ghanti, GrindMaster 2.0 Flourmill",
      originalPrice: 26000,
      salePrice: 24000,
      image: "./product/1743789387958.jpg",
      type: "Tolky",
      capacity: 1,
      inStock: true,
      description:
        "Dhaarmi AttaMaker is a modern flour mill designed to meet the needs of households and small businesses. It grinds wheat into fine flour through a series of efficient steps—starting from pouring the raw grains into the hopper to delivering fresh, pure flour through the outlet.\r\n\r\nIn today’s world, where food adulteration and environmental pollutants are common, Dhaarmi AttaMaker helps protect your family from the health risks associated with contaminated food. This machine not only removes impurities but also preserves the essential nutrients of the grain, ensuring every bite is both healthy and wholesome.\r\n\r\nChoosing Dhaarmi AttaMaker means choosing safety, nutrition, and the original taste of home-ground flour—a smart and reliable addition to every modern kitchen.",
      short_description:
        "Dhaarmi Atta Chakki 1 HP Tolky Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "Hassle-free installation and user-friendly operation\r\nDurable motor with 100% pure copper winding\r\nLong-lasting automatic PCB for reliable performance\r\nBuilt-in auto-cleaning mechanism for easy maintenance\r\nSmart LED indicators for clear operational status\r\nChild-safe door switch for added protection\r\nAdvanced sensor-based technology for precision and safety\r\nSmooth soft-close top for a premium user experience",
      Specification:
        "Brand: DHAARMI ATTAMAKER\r\nProduct Model: GrindMaster 2.0\r\nType: 1 H.P. Tolky\r\nApprox. Weight: 45 kg\r\nMotor Power: 1 HP high-performance motor\r\nMotor Type: 100% Copper Winding for durability and efficiency\r\nMotor Speed: 2800 RPM for fast and consistent grinding\r\nColor Variant: black\r\nPower Rating: 230 Watts\r\nEnergy Usage: Consumes approximately 0.75 kW per hour\r\nHopper Capacity: 6.5 kg for large batch grinding\r\nHopper Material: Made from premium Stainless Steel\r\nFlour Container Capacity: 5 kg\r\nDoor Mechanism: Smooth-operating  Door\r\nBlade Count: Equipped with 4/6 high-speed blades\r\nBlade Material: Precision-crafted from Stainless Steel",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "How to Use Your Dhaarmi AttaMaker – Step-by-Step Guide\r\nStep 1: Get Ready\r\nSelect Your Grains: Pick the type of grain you'd like to grind—wheat, rice, corn, or other grains of your choice.\r\n\r\nClean the Grains: Make sure the grains are clean and dry. Rinse them if needed to remove dust or dirt.\r\n\r\nRead the Instructions: Take a few minutes to go through the user manual to understand specific guidelines for your model.\r\n\r\nStep 2: Machine Setup\r\nChoose the Right Spot: Place your atta maker on a sturdy, level surface. Keep it in a dry area, away from direct sunlight and moisture.\r\n\r\nPower Connection: Plug the machine into a nearby power socket. Make sure the socket is grounded for safe operation.\r\n\r\nStep 3: Loading the Grains\r\nAdd Grains to the Hopper: Pour your selected grains into the stainless steel hopper. Don’t overfill to prevent jamming.\r\n\r\nClose the Lid Properly: Always secure the hopper lid tightly before starting the machine.\r\n\r\nStep 4: Start Grinding\r\nSwitch On the Machine: Turn on the power and let the machine reach its ideal speed.\r\n\r\nMonitor the Flow: Keep an eye on the flour outlet. The flour should flow smoothly into the container. Pause if you notice any blockage.\r\n\r\nStep 5: Collecting the Output\r\nPower Off Safely: Once you're done, turn off the machine and unplug it to avoid any accidental starts.\r\n\r\nRemove the Flour Container: Carefully take out the container. Be mindful of any flour residue or dust.\r\n\r\nStore the Flour: Transfer the fresh flour into a clean, airtight jar to preserve its freshness and nutrition.\r\n\r\nStep 6: Post-Use Cleaning\r\nClear the Hopper: Remove any leftover grains from the hopper.\r\n\r\nWipe Down the Machine: Use a soft, dry cloth or brush to clean both the inside and outside surfaces.\r\n\r\nStore Securely: If not in use for a while, keep the machine in a cool, dry place to avoid damage.\r\n\r\n",
      __v: 0,
    },
    {
      _id: "67eeaa0ee260e4064d69e133",
      name: "Dhaarmi 1 HP Regular Steel Body Fully Automatic Pulverizer, Aata Maker, Flour Mill,Domestic Ghar Ghanti, SteelGrind 1.0 Flourmill",
      originalPrice: 27000,
      salePrice: 24000,
      image: "./product/1743790044525.jpg",
      type: "Steel Body",
      capacity: 1,
      inStock: true,
      description:
        "Dhaarmi AttaMaker – Multi-Purpose Atta Chakki & Pulverizer\r\nThe Dhaarmi AttaMaker Chakki/Pulverizer is a powerful and versatile appliance designed for both home and commercial kitchens. Engineered to grind grains, spices, and other food ingredients with precision, this machine ensures smooth and efficient processing.\r\n\r\nBuilt with a durable stainless steel body, it is both sturdy and food-safe, ensuring longevity and hygiene. The high-performance 1 HP motor delivers exceptional grinding power, making it easy to achieve fine and consistent results. The grinding process starts as the ingredients pass from the hopper into the grinding chamber, where razor-sharp blades efficiently break them down to the desired texture.\r\n\r\nWhether you need finely milled flour or coarsely ground spices, Dhaarmi AttaMaker offers effortless operation, durability, and superior performance, making it an essential addition to any kitchen.",
      short_description:
        "Dhaarmi Atta Chakki 1 HP Steel Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "Sturdy & Durable Build – Made from high-quality materials for long-lasting performance and reliability.\r\nPowerful Grinding – High-speed blades ensure fine, consistent, and uniform grinding for better flour quality.\r\nMulti-Purpose Use – Easily grinds wheat, rice, spices, pulses, and more for all your kitchen needs.\r\nEasy to Operate – Simple controls and an intuitive design make it convenient for anyone to use.\r\nEnergy Efficient – Optimized motor ensures fast grinding while consuming minimal electricity.",
      Specification:
        "Brand: DHAARMI ATTAMAKER\r\nProduct Model: SteelGrind 1.0\r\nType: Steel Body\r\nApprox. Weight: 45 kg\r\nMotor Power: 1 HP high-performance motor\r\nMotor Type: 100% Copper Winding for durability and efficiency\r\nMotor Speed: 2800 RPM for fast and consistent grinding\r\nColor Variant: black\r\nPower Rating: 230 Watts\r\nEnergy Usage: Consumes approximately 0.75 kW per hour\r\nHopper Capacity: 6.5 kg for large batch grinding\r\nHopper Material: Made from premium Stainless Steel\r\nFlour Container Capacity: 5 kg\r\nDoor Mechanism: No Door\r\nBlade Count: Equipped with 4/6 high-speed blades\r\nBlade Material: Precision-crafted from Stainless Steel",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "How to Use Your Dhaarmi AttaMaker Pulverizer – Step-by-Step Guide\r\n🔹 Step 1: Preparing for Use\r\nBefore starting, ensure both the machine and ingredients are ready:\r\n✔ Clean the Machine – Wipe down the mill to remove any leftover residue from previous use to maintain hygiene.\r\n✔ Inspect Components – Check the blades, hopper, and motor for any signs of wear or damage. Replace faulty parts if needed.\r\n✔ Prepare Your Ingredients – Gather the grains or spices you want to grind, such as wheat, rice, corn, or pulses.\r\n\r\n🔹 Step 2: Setting Up the Machine\r\nOnce everything is prepared, follow these steps for a proper setup:\r\n✔ Find a Stable Surface – Place the pulverizer on a flat, sturdy surface to avoid movement during operation.\r\n✔ Power Connection – Plug the machine into a suitable power outlet, ensuring it meets voltage requirements.\r\n✔ Adjust the Grinding Settings – Use the control knob to select the desired flour fineness for your needs.\r\n\r\n🔹 Step 3: Grinding Process\r\nNow you’re ready to start grinding:\r\n✔ Load the Ingredients – Pour the grains or spices into the hopper, ensuring you do not overfill it.\r\n✔ Turn On the Machine – Switch on the power and let the motor reach its full speed before starting the grinding process.\r\n✔ Monitor the Process – Keep an eye on the flour output. If you hear unusual noises or notice excessive vibrations, pause the process and check for blockages.\r\n\r\n🔹 Step 4: Collecting the Flour\r\nOnce the grinding is complete:\r\n✔ Turn Off the Machine – Power off and unplug the pulverizer to ensure safety.\r\n✔ Empty the Flour Chamber – Open the outlet and collect your freshly ground flour in a dry, clean container.\r\n✔ Store Properly – Transfer the flour to an airtight container to maintain freshness and prevent moisture absorption.",
      __v: 0,
    },
    {
      _id: "67eeaa16e260e4064d69e134",
      name: "Dhaarmi 1 HP Premium Steel Body with Hopper Fully Automatic Atta Chakki,with masala Flour Mill, Aata Maker, ,Domestic Ghar Ghanti, SteelGrind 2.0 Flourmill",
      originalPrice: 28000,
      salePrice: 26000,
      image: "./product/1743844118639.jpg",
      type: "Steel Body with Hopper",
      capacity: 1,
      inStock: true,
      description:
        "Dhaarmi Attachakki brings you a powerful and reliable Atta Chakki & Pulverizer, specially designed for both home and commercial kitchens. This multi-functional appliance makes it easy to grind grains, spices, and a variety of other ingredients with precision and speed.\r\n\r\nPowered by a robust 2 HP motor, this machine delivers excellent performance while ensuring the desired texture in every use. The stainless steel construction enhances its durability, provides a sleek finish, and ensures food-grade safety for worry-free usage.\r\n\r\nThe grinding process is streamlined through a top-mounted hopper, feeding the ingredients into a high-speed grinding chamber equipped with sharp stainless steel blades — perfect for producing finely ground flour or spice powders.",
      short_description:
        "Dhaarmi Pulverizer 1 HP Steel Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "Easy to setup and operate.\r\n100% Copper winding motor. \r\nLife long automatic PCB\r\nAuto cleaning system \r\nLED light indicator \r\nChild Safety door switch\r\nSensor Technology\r\nSoft Close top \r\nMirror finished door with soft close",
      Specification:
        "Brand:  DHAARMI ATTAMAKER \r\nProduct Model:  SteelGrind 1.0 \r\nType:  Steel Body \r\nApprox. Weight:  45 kg \r\nMotor Power:  1 HP high-performance motor \r\nMotor Type:  100% Copper Winding for durability and efficiency \r\nMotor Speed:  2800 RPM for fast and consistent grinding \r\nColor Variant:  Silver\r\nPower Rating:  230 Watts \r\nEnergy Usage:  Consumes approximately 0.75 kW per hour \r\nHopper Capacity:  6.5 kg for large batch grinding \r\nHopper Material:  Made from premium Stainless Steel \r\nFlour Container Capacity:  5 kg \r\nDoor Mechanism:  No Door \r\nBlade Count:  Equipped with 4/6 high-speed blades \r\nBlade Material:  Precision-crafted from Stainless Steel",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "Usage Guidelines for Dhaarmi Attachakki Pulverizer\r\nTo ensure optimal performance and safety, follow these step-by-step instructions while using your Dhaarmi Attachakki Pulverizer:\r\n\r\n1. Pre-Use Preparation\r\nBefore you begin, it’s important to ready both the appliance and the ingredients:\r\n\r\nClean the Unit: Wipe down the interior and exterior of the machine to remove any leftover particles from previous use, ensuring hygiene and taste purity.\r\n\r\nInspect All Parts: Examine the blades, hopper, and motor for any signs of wear or damage. Replace or service any faulty components before starting.\r\n\r\nSelect & Prepare Ingredients: Choose the grains or items you wish to process—commonly used options include wheat, maize, rice, and various lentils or pulses.\r\n\r\n2. Machine Setup\r\nWith your materials ready, now set up the pulverizer for operation:\r\n\r\nStable Placement: Ensure the machine is placed on a flat, sturdy surface to avoid any movement or shaking during use.\r\n\r\nConnect to Power: Plug the machine into a suitable power outlet, ensuring the voltage is compatible with the specifications provided.\r\n\r\nAdjust the Settings: Use the provided control knob (above the grinding chamber) to set the desired flour fineness according to your requirement.\r\n\r\n3. Operation Process\r\nOnce everything is in place, you're ready to grind:\r\n\r\nLoad the Hopper: Pour the grains into the hopper carefully. Do not overload, as this may affect grinding quality or put stress on the motor.\r\n\r\nStart the Pulverizer: Power on the machine and allow the motor to reach full speed before grains enter the grinding area.\r\n\r\nMonitor Grinding: As the material is ground by high-speed rotating blades, observe the operation. Stop immediately if you notice any odd noises or excessive vibrations.\r\n\r\n4. Flour Collection & Storage\r\nOnce grinding is complete:\r\n\r\nTurn Off the Machine: After achieving the desired consistency, switch off the unit to prevent over-processing.\r\n\r\nCollect the Output: Open the flour outlet and transfer the freshly ground flour into a clean, dry container. Store it properly to maintain freshness.",
      __v: 0,
    },
    {
      _id: "67eeb704e260e4064d69e137",
      name: "Dhaarmi 2 HP Regular Steel Body Fully Automatic Pulverizer, Aata Maker, Flour Mill,Domestic Ghar Ghanti,  UltraGrind 1.0 Flourmill",
      originalPrice: 38000,
      salePrice: 35000,
      image: "./product/1743845011093.jpg",
      type: "UltraGrind 1.0",
      capacity: 2,
      inStock: true,
      description:
        "Dhaarmi Attachakki – High-Performance Atta Chakki & Pulverizer\r\n\r\nExperience unmatched performance and convenience with Dhaarmi Attachakki’s Atta Chakki & Pulverizer, expertly crafted for both domestic and commercial use. Designed to handle a wide range of ingredients — from grains to spices — this multi-functional machine offers precision grinding with effortless efficiency.\r\n\r\nBuilt with a powerful 2 HP motor, it ensures consistent performance and allows you to achieve the perfect texture every time. The body is constructed from premium stainless steel, making it not only durable and long-lasting, but also completely food-safe and easy to maintain.\r\n\r\nThe smart design features a top-loading stainless steel hopper, which channels ingredients into a high-speed grinding chamber equipped with razor-sharp stainless steel blades. Whether you're making flour or spice powders, this machine ensures fine, uniform, and hygienic output with every batch.",
      short_description:
        "Dhaarmi Pulverizer 2 HP Steel Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "🔩 Sturdy & Reliable Build\r\nCrafted from premium-grade materials, this pulverizer is designed to withstand continuous use, ensuring long-term durability and dependable performance.\r\n\r\n⚙️ Advanced Grinding Technology\r\nEquipped with high-performance blades, the machine delivers consistent, fine, and uniform grinding — perfect for producing top-quality flour with minimal effort.\r\n\r\n🌾 Multi-Ingredient Compatibility\r\nWhether you're processing wheat, rice, spices, or pulses, this versatile appliance handles a wide range of ingredients to meet varied kitchen demands.\r\n\r\n🖐️ Easy & Intuitive Operation\r\nDesigned for user convenience, it features a simple control system that allows you to easily adjust grinding settings and monitor the process with full control.",
      Specification:
        "Brand:  DHAARMI ATTAMAKER \r\nProduct Model:  UltraGrind 1.0\r\nType:  2 In 1 Pulveriser\r\nConnection: Single Phase\r\nMotor Power:  2 HP high-performance motor \r\nMotor Type:  100% Copper Winding for durability and efficiency \r\nColor Variant:  Silver\r\nPower :  2 HP\r\nBody Material: premium Steel \r\nConnection: Single Phase\r\nHopper Capacity:  8/10 kg for large batch grinding \r\nHopper Material:  Made from premium Stainless Steel \r\nGrinding Capacity: 10 to 15 kg/1hr \r\nBlade Count:  Equipped with 4 high-speed blades \r\nBlade Material:  Precision-crafted from S.S.\r\nApprox. Weight:  50 kg ",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "To ensure optimal performance and safety, follow these step-by-step instructions while using your Dhaarmi Attachakki Pulverizer:\r\n\r\n1. Pre-Use Preparation\r\nBefore you begin, it’s important to ready both the appliance and the ingredients:\r\n\r\nClean the Unit: Wipe down the interior and exterior of the machine to remove any leftover particles from previous use, ensuring hygiene and taste purity.\r\n\r\nInspect All Parts: Examine the blades, hopper, and motor for any signs of wear or damage. Replace or service any faulty components before starting.\r\n\r\nSelect & Prepare Ingredients: Choose the grains or items you wish to process—commonly used options include wheat, maize, rice, and various lentils or pulses.\r\n\r\n2. Machine Setup\r\nWith your materials ready, now set up the pulverizer for operation:\r\n\r\nStable Placement: Ensure the machine is placed on a flat, sturdy surface to avoid any movement or shaking during use.\r\n\r\nConnect to Power: Plug the machine into a suitable power outlet, ensuring the voltage is compatible with the specifications provided.\r\n\r\nAdjust the Settings: Use the provided control knob (above the grinding chamber) to set the desired flour fineness according to your requirement.\r\n\r\n3. Operation Process\r\nOnce everything is in place, you're ready to grind:\r\n\r\nLoad the Hopper: Pour the grains into the hopper carefully. Do not overload, as this may affect grinding quality or put stress on the motor.\r\n\r\nStart the Pulverizer: Power on the machine and allow the motor to reach full speed before grains enter the grinding area.\r\n\r\nMonitor Grinding: As the material is ground by high-speed rotating blades, observe the operation. Stop immediately if you notice any odd noises or excessive vibrations.\r\n\r\n4. Flour Collection & Storage\r\nOnce grinding is complete:\r\n\r\nTurn Off the Machine: After achieving the desired consistency, switch off the unit to prevent over-processing.\r\n\r\nCollect the Output: Open the flour outlet and transfer the freshly ground flour into a clean, dry container. Store it properly to maintain freshness.",
      __v: 0,
    },
    {
      _id: "67f0fadbf1d40ac327b01baa",
      name: "Dhaarmi 4 HP Heavy Steel Body Fully Automatic Pulverizer, Aata Maker, Flour Mill,Domestic Ghar Ghanti, GrindMaster 1.0 Flourmill",
      originalPrice: 60000,
      salePrice: 55000,
      image: "./product/1743846107075.jpg",
      type: "Steel Body",
      capacity: 4,
      inStock: true,
      description:
        "Dhaarmi Attachakki – High-Performance Atta Chakki & Pulverizer\r\n\r\nExperience unmatched performance and convenience with Dhaarmi Attachakki’s Atta Chakki & Pulverizer, expertly crafted for both domestic and commercial use. Designed to handle a wide range of ingredients — from grains to spices — this multi-functional machine offers precision grinding with effortless efficiency.\r\n\r\nBuilt with a powerful 2 HP motor, it ensures consistent performance and allows you to achieve the perfect texture every time. The body is constructed from premium stainless steel, making it not only durable and long-lasting, but also completely food-safe and easy to maintain.\r\n\r\nThe smart design features a top-loading stainless steel hopper, which channels ingredients into a high-speed grinding chamber equipped with razor-sharp stainless steel blades. Whether you're making flour or spice powders, this machine ensures fine, uniform, and hygienic output with every batch.",
      short_description:
        "Dhaarmi Pulverizer 4 HP Steel Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "🔩 Sturdy & Reliable Build\r\nCrafted from premium-grade materials, this pulverizer is designed to withstand continuous use, ensuring long-term durability and dependable performance.\r\n⚙️ Advanced Grinding Technology\r\nEquipped with high-performance blades, the machine delivers consistent, fine, and uniform grinding — perfect for producing top-quality flour with minimal effort.\r\n🌾 Multi-Ingredient Compatibility\r\nWhether you're processing wheat, rice, spices, or pulses, this versatile appliance handles a wide range of ingredients to meet varied kitchen demands.\r\n🖐️ Easy & Intuitive Operation\r\nDesigned for user convenience, it features a simple control system that allows you to easily adjust grinding settings and monitor the process with full control.",
      Specification:
        "Brand:  DHAARMI ATTAMAKER \r\nProduct Model:  GrindMaster 1.0\r\nType:  2 In 1 Pulveriser\r\nConnection: Single Phase\r\nMotor Power:  4 HP high-performance motor \r\nMotor Type:  100% Copper Winding for durability and efficiency \r\nColor Variant:  Silver\r\nPower :  4 HP\r\nBody Material: premium Steel \r\nConnection: Single Phase\r\nHopper Capacity:  10/12 kg for large batch grinding \r\nHopper Material:  Made from premium Stainless Steel \r\nGrinding Capacity: 22 to 25kg/1hr \r\nBlade Count:  Equipped with 4 high-speed blades \r\nBlade Material:  Precision-crafted from S.S.\r\nApprox. Weight:  60 kg ",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "To ensure optimal performance and safety, follow these step-by-step instructions while using your Dhaarmi Attachakki Pulverizer:\r\n\r\n1. Pre-Use Preparation\r\nBefore you begin, it’s important to ready both the appliance and the ingredients:\r\n\r\nClean the Unit: Wipe down the interior and exterior of the machine to remove any leftover particles from previous use, ensuring hygiene and taste purity.\r\n\r\nInspect All Parts: Examine the blades, hopper, and motor for any signs of wear or damage. Replace or service any faulty components before starting.\r\n\r\nSelect & Prepare Ingredients: Choose the grains or items you wish to process—commonly used options include wheat, maize, rice, and various lentils or pulses.\r\n\r\n2. Machine Setup\r\nWith your materials ready, now set up the pulverizer for operation:\r\n\r\nStable Placement: Ensure the machine is placed on a flat, sturdy surface to avoid any movement or shaking during use.\r\n\r\nConnect to Power: Plug the machine into a suitable power outlet, ensuring the voltage is compatible with the specifications provided.\r\n\r\nAdjust the Settings: Use the provided control knob (above the grinding chamber) to set the desired flour fineness according to your requirement.\r\n\r\n3. Operation Process\r\nOnce everything is in place, you're ready to grind:\r\n\r\nLoad the Hopper: Pour the grains into the hopper carefully. Do not overload, as this may affect grinding quality or put stress on the motor.\r\n\r\nStart the Pulverizer: Power on the machine and allow the motor to reach full speed before grains enter the grinding area.\r\n\r\nMonitor Grinding: As the material is ground by high-speed rotating blades, observe the operation. Stop immediately if you notice any odd noises or excessive vibrations.\r\n\r\n4. Flour Collection & Storage\r\nOnce grinding is complete:\r\n\r\nTurn Off the Machine: After achieving the desired consistency, switch off the unit to prevent over-processing.\r\n\r\nCollect the Output: Open the flour outlet and transfer the freshly ground flour into a clean, dry container. Store it properly to maintain freshness.",
      __v: 0,
    },
    {
      _id: "67f0fd38f1d40ac327b01bba",
      name: "Dhaarmi 5 HP Heavy Steel Body Fully Automatic Atta Chakki, Aata Maker, Flour Mill,Domestic Ghar Ghanti, MegaGrind Pro 1.0 Flourmill",
      originalPrice: 71000,
      salePrice: 67000,
      image: "./product/1743847515888.jpg",
      type: "2 In 1 Pulveriser",
      capacity: 5,
      inStock: true,
      description:
        "Dhaarmi Attachakki – High-Performance Pulverizer Machine\r\nDhaarmi Attachakki proudly presents its state-of-the-art Pulverizer Machine, a powerful and reliable solution designed to meet the grinding needs of modern kitchens and commercial setups. Whether you’re processing grains, spices, or pulses, this machine delivers fine, consistent, and hygienic powder output with every use.\r\nWhy Our Pulverizer Stands Out\r\n✅ Heavy-Duty Construction:\r\nBuilt with premium stainless steel, this machine is durable, rust-resistant, and made to last through years of heavy usage.\r\n\r\n✅ Powerful Motor Performance:\r\nEquipped with a high-speed, 100% copper winding motor, it ensures smooth and efficient grinding with minimal power consumption.\r\n\r\n✅ Multi-Ingredient Compatibility:\r\nIdeal for grinding wheat, rice, besan, maize, spices, pulses, and more – all in one machine.\r\n\r\n✅ Advanced Blade Technology:\r\nFeatures sharp, stainless steel blades that produce ultra-fine powder in no time, maintaining the nutritional value of ingredients.\r\n\r\n✅ User-Friendly Operation:\r\nEasy to operate with adjustable settings to control the texture and fineness of the output as per your needs.\r\n\r\n✅ Low Maintenance Design:\r\nSmart, compact design ensures easy cleaning and long-lasting performance with minimal upkeep.",
      short_description:
        "Dhaarmi Pulverizer 5 HP Steel Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "Future of Pulverizer Machines – With Dhaarmi Attachakki\r\nIn the coming years, as more people shift towards clean, healthy, and chemical-free food, pulverizer machines will become an essential part of both homes and small businesses. The demand for freshly ground flour, spices, and pulses is growing rapidly, making in-house grinding a smart and sustainable choice.\r\nHere’s what the future of pulverizers looks like:\r\nSmart and Automated:\r\nFuture machines will come with digital controls and mobile connectivity, making them easier and safer to use.\r\nEnergy-Efficient:\r\nNext-generation models will be designed to deliver high performance while using less power.\r\nCompact and Modern Design:\r\nPulverizers will become more space-saving and stylish, perfect for modern homes and cloud kitchens.\r\nMulti-Ingredient Use:\r\nThese machines will not only grind grains and spices but also handle nuts, herbs, and ayurvedic materials.\r\nSupport for Small Businesses:\r\nCustomized capacities will help local flour mills, spice units, and home entrepreneurs grow with ease.",
      Specification:
        "Brand:  DHAARMI ATTAMAKER \r\nProduct Model: MegaGrind Pro 1.0\r\nType:  2 In 1 Pulveriser\r\nConnection: Single Phase\r\nMotor Power:  5 HP high-performance motor \r\nMotor Type:  100% Copper Winding for durability and efficiency \r\nColor Variant:  Silver\r\nPower :  5 HP\r\nBody Material: premium Steel \r\nConnection: Single Phase\r\nHopper Capacity:  10/15 kg for large batch grinding \r\nHopper Material:  Made from premium Stainless Steel \r\nGrinding Capacity: 30 to 40 kg/1hr \r\nBlade Count:  Equipped with 4 high-speed blades \r\nBlade Material:  Precision-crafted from S.S.\r\nApprox. Weight:  70 kg ",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "1. Domestic Use:\r\nGrind fresh wheat, rice, or pulses for daily flour needs.\r\nMake homemade masalas like turmeric, chili powder, coriander powder, etc.\r\nProcess grains for baby food or gluten-free flours.\r\n\r\n2. Commercial Kitchens:\r\nUsed by restaurants, caterers, and food businesses for high-volume grinding.\r\nEnsure consistency and hygiene in spice mixes and flour production.\r\n3. Grocery & Flour Mills:\r\nPerfect for small-scale atta chakki shops and local grocery stores.\r\nEfficiently grind grains in bulk for customer demand.\r\n4. Spice & Herbal Units:\r\nUsed for grinding ayurvedic herbs, dried leaves, and roots.\r\nCreate high-quality spice blends with consistent texture and aroma.\r\n5. Small-Scale Industries:\r\nSupports entrepreneurs and home-based food processing businesses.\r\nIdeal for packaging-ready flour or spice products.\r\nDhaarmi Pulverizer is built to meet the everyday grinding needs of modern kitchens and small businesses — offering speed, safety, hygiene, and superior performance every time.",
      __v: 0,
    },
    {
      _id: "67f10241f1d40ac327b01bc7",
      name: "Dhaarmi 5 HP Heavy M.S. Body Fully Automatic Atta Chakki, Aata Maker, Flour Mill,Domestic Ghar Ghanti, MegaGrind Pro 2.0 Flourmill",
      originalPrice: 82000,
      salePrice: 75000,
      image: "./product/1743848732589.jpg",
      type: "M.S. Body 2 In 1 Pulveriser",
      capacity: 5,
      inStock: true,
      description:
        "Dhaarmi Attachakki – High-Performance Pulverizer Machine\r\nDhaarmi Attachakki proudly presents its state-of-the-art Pulverizer Machine, a powerful and reliable solution designed to meet the grinding needs of modern kitchens and commercial setups. Whether you’re processing grains, spices, or pulses, this machine delivers fine, consistent, and hygienic powder output with every use.\r\nWhy Our Pulverizer Stands Out\r\n✅ Heavy-Duty Construction:\r\nBuilt with premium stainless steel, this machine is durable, rust-resistant, and made to last through years of heavy usage.\r\n✅ Powerful Motor Performance:\r\nEquipped with a high-speed, 100% copper winding motor, it ensures smooth and efficient grinding with minimal power consumption.\r\n✅ Multi-Ingredient Compatibility:\r\nIdeal for grinding wheat, rice, besan, maize, spices, pulses, and more – all in one machine.\r\n✅ Advanced Blade Technology:\r\nFeatures sharp, stainless steel blades that produce ultra-fine powder in no time, maintaining the nutritional value of ingredients.\r\n✅ User-Friendly Operation:\r\nEasy to operate with adjustable settings to control the texture and fineness of the output as per your needs.\r\n✅ Low Maintenance Design:\r\nSmart, compact design ensures easy cleaning and long-lasting performance with minimal upkeep.",
      short_description:
        "Dhaarmi Pulverizer 5 HP M.S. Body Flour Mill/Ghar Ghanti, Copper Winded Motor, Stainless Steel Blades Warranty Included Country of origin: India",
      Features:
        "Future of Pulverizer Machines – With Dhaarmi Attachakki\r\nIn the coming years, as more people shift towards clean, healthy, and chemical-free food, pulverizer machines will become an essential part of both homes and small businesses. The demand for freshly ground flour, spices, and pulses is growing rapidly, making in-house grinding a smart and sustainable choice.\r\nHere’s what the future of pulverizers looks like:\r\nSmart and Automated:\r\nFuture machines will come with digital controls and mobile connectivity, making them easier and safer to use.\r\nEnergy-Efficient:\r\nNext-generation models will be designed to deliver high performance while using less power.\r\nCompact and Modern Design:\r\nPulverizers will become more space-saving and stylish, perfect for modern homes and cloud kitchens.\r\nMulti-Ingredient Use:\r\nThese machines will not only grind grains and spices but also handle nuts, herbs, and ayurvedic materials.\r\nSupport for Small Businesses:\r\nCustomized capacities will help local flour mills, spice units, and home entrepreneurs grow with ease.",
      Specification:
        "Brand:  DHAARMI ATTAMAKER \r\nProduct Model: MegaGrind Pro 1.0\r\nType:  2 In 1 M.S. Body Pulveriser\r\nConnection: Single Phase\r\nMotor Power:  5 HP high-performance motor \r\nMotor Type:  100% Copper Winding for durability and efficiency \r\nColor Variant:  Silver\r\nPower :  5 HP\r\nBody Material: premium Steel \r\nConnection: Single Phase\r\nHopper Capacity:  10/15 kg for large batch grinding \r\nHopper Material:  Made from premium Stainless Steel \r\nGrinding Capacity: 30 to 40 kg/1hr \r\nBlade Count:  Equipped with 4 high-speed blades \r\nBlade Material:  Precision-crafted from S.S.\r\nApprox. Weight:  80 kg ",
      Warranty_Summary:
        "Warranty provided for 1 Years on Motor and 1 Years on Product. (For manufacturing defects only)",
      Usage:
        "1. Domestic Use:\r\n\r\nGrind fresh wheat, rice, or pulses for daily flour needs.\r\n\r\nMake homemade masalas like turmeric, chili powder, coriander powder, etc.\r\n\r\nProcess grains for baby food or gluten-free flours.\r\n\r\n2. Commercial Kitchens:\r\n\r\nUsed by restaurants, caterers, and food businesses for high-volume grinding.\r\n\r\nEnsure consistency and hygiene in spice mixes and flour production.\r\n\r\n3. Grocery & Flour Mills:\r\n\r\nPerfect for small-scale atta chakki shops and local grocery stores.\r\n\r\nEfficiently grind grains in bulk for customer demand.\r\n\r\n4. Spice & Herbal Units:\r\n\r\nUsed for grinding ayurvedic herbs, dried leaves, and roots.\r\n\r\nCreate high-quality spice blends with consistent texture and aroma.\r\n\r\n5. Small-Scale Industries:\r\n\r\nSupports entrepreneurs and home-based food processing businesses.\r\n\r\nIdeal for packaging-ready flour or spice products.",
      __v: 0,
    },
  ]);
  const navigate = useNavigate();

const [loading, setLoading] = useState(false);


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
                  <div
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        navigate(`/product/${product._id}`);
                      }, 3000); // 3 second delay
                    }}
                    className="p-4 flex flex-col relative group cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="flex justify-center items-center h-52 mb-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-cover rounded"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="text-sm font-medium text-center text-gray-800 line-clamp-2 mb-2 hover:underline">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

            {loading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative w-16 h-16">
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-orange-500 animate-spin blur-sm opacity-70"></div>

                  {/* Core Spinner */}
                  <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-orange-500 animate-spin"></div>

                  {/* Center dot */}
                  <div className="w-4 h-4 bg-orange-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-orange-500"></div>
                </div>
              </div>
            )}

            

          {/* Custom Pagination Bullets BELOW the slider */}
          <div className="custom-swiper-pagination" />
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
            src="./home/awards.png"
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
    "./home/amazon_logo.png",
    "./home/amazon_logo.png",
    "./home/amazon_logo.png",
    "./home/amazon_logo.png",
    "./home/amazon_logo.png",
    "./home/amazon_logo.png",
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

const YouTubePopupPlayer = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: "Ek1bHZqGsRI",
      title: "YouTube Video 3",
      img: "./home/d1.jpg",
    },
    {
      id: "UAOTdWl9L6U",
      title: "YouTube Video 4",
      img: "./home/d2.jpg",
    },
  ];

  

  const openFullscreen = (videoId) => {
    setFullscreenVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Video Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id + Math.random()}
            className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => openFullscreen(video.id)}
          >
            {/* Thumbnail with play button overlay */}
            <div className="absolute inset-0 bg-gray-200 flex justify-center items-center group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-transparent border-l-white ml-1"></div>
              </div>

              {/* <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={video.img}
                  alt={video.title}
                  className="max-h-full max-w-full object-cover rounded"
                />
              </div> */}
            </div>

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-70 text-white">
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-full  rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
            <button
              onClick={closeFullscreen}
              className="absolute -top-12 right-0 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-lg font-bold z-10 transition-colors"
            >
              Close
            </button>

            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${fullscreenVideo}?autoplay=1`}
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
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
      <YouTubePopupPlayer />
    </div>
  );
};

export default HomePage;
