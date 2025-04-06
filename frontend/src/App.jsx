



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Fixed: replaced "wells" with ","
import { logout } from "./pages/redux/AuthSlice";
import Home from "./pages/Home";
import Header from "./pages/componet/Header";
import Footer from "./pages/componet/Footer";
import About from "./pages/About";
import WhatsAppIcon from "./pages/componet/WhatsAppIcon";
import Contact from "./pages/Contact";
import Commercial from "./pages/Commercial";
import AdminPanel from "./pages/AdminPanel";
import PrivateRoute from "./pages/componet/PrivateRoute";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // Cart state management
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
  };

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
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} onCheckout={handleCheckout} />
          }
        />
        <Route path="/admin" element={<PrivateRoute element={AdminPanel} />} />
      </Routes>
      <Footer />

      <SpeedInsights />
      {/* {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      )} */}
    </Router>
  );
}

export default App;


export const BaseUrlWHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
console.log("BaseUrl ===>", BaseUrlWHATSAPP_NUMBER);

export const BaseUrl = import.meta.env.VITE_API_URL;
console.log("BaseUrl ===>", BaseUrl);



