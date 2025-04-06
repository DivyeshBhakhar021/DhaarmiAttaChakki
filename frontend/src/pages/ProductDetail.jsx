import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Static product data (you can move this to a separate file and import it)
const productsData = [
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
];

const ProductDetail = ({ cart, setCart }) => {
  const { productId } = useParams(); // Get productId from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Find the product from static data that matches the productId
    const fetchProduct = () => {
      const foundProduct = productsData.find((item) => item._id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error("❌ Product not found in static data");
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setNotification(`${product.name} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {notification && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            {notification}
          </div>
        )}
        <button
          onClick={() => navigate("/commercial-aata-chakki")}
          className="mb-4 text-blue-600 hover:underline"
        >
          ← Back to Catalog
        </button>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={`${product.image}`} // Assuming images are still served from this URL
              alt={product.name}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 line-through text-lg">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="font-bold text-blue-600 text-2xl">
                ₹{product.salePrice.toLocaleString()}
              </span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                Save{" "}
                {Math.round(
                  (1 - product.salePrice / product.originalPrice) * 100
                )}
                %
              </span>
            </div>

            <p className="text-gray-600 mb-4">{product.short_description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                {product.capacity} HP
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                Automatic
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                {product.type}
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all w-full shadow-md hover:shadow-lg mb-6"
            >
              Add to Cart
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600 whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Features
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {product.Features.split("\r\n").map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Specifications
              </h2>
              <ul className="text-gray-600">
                {product.Specification.split("\r\n").map((spec, index) => (
                  <li key={index} className="flex">
                    <span className="text-black font-bold">
                      {spec.split(":")[0]}:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {spec.split(":")[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-black-800 mb-2">
                Warranty Summary
              </h2>
              <p className="text-gray-600">{product.Warranty_Summary}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Usage Instructions
              </h2>
              {product.Usage.split(/Step \d+ : /).map((part, index) => {
                if (index === 0) return null;

                const lines = part.trim().split(/\r?\n/).filter(Boolean);
                const title = `Step ${index} : ${lines.shift()}`;

                return (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-800">{title}</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      {lines.map((line, i) => (
                        <li key={i}>{line.trim()}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
