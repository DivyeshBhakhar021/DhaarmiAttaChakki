



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Added Navigate
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./pages/componet/Header";
import Footer from "./pages/componet/Footer";
import About from "./pages/About";
import WhatsAppIcon from "./pages/componet/WhatsAppIcon";
import Contact from "./pages/Contact";
import Commercial from "./pages/Commercial";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {

  // Cart state management
  const [cart, setCart] = useState([]);

  
  const handleCheckout = () => {
    const phoneNumber = `${BaseUrlWHATSAPP_NUMBER}`;
    const message = `
      Cart Items: ${cart
        .map((item) => `${item.name} x ${item.quantity}`)
        .join(", ")}
      Total: ₹${cart
        .reduce((total, item) => total + item.salePrice * item.quantity, 0)
        .toLocaleString()}
    `;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Router>
      <Header
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <WhatsAppIcon />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/commercial-aata-chakki"
          element={<Commercial cart={cart} setCart={setCart} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} onCheckout={handleCheckout} />
          }
        />
        {/* Catch-all route to redirect to home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <SpeedInsights />
    </Router>
  );
}

export default App;


export const BaseUrlWHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
console.log("BaseUrl ===>", BaseUrlWHATSAPP_NUMBER);



