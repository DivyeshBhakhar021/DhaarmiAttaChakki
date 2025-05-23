import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X, ChevronUp, ChevronDown } from "lucide-react";
import { BaseUrlWHATSAPP_NUMBER } from "../App";
import { useEffect } from "react";

const Cart = ({ cart, setCart, onCheckout }) => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  // Update product quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  // Calculate total cart amount
  const cartTotal = cart.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Show checkout form
  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  // Handle form submission and WhatsApp message
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Phone number validation (basic Indian number check)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert(
        "Please enter a valid 10-digit Indian phone number starting with 6-9"
      );
      setIsSubmitting(false);
      return;
    }

    // Dynamic message format
    let orderDetails = `*New Order Received*\n\n`;
    orderDetails += `*Customer Details:*\n`;
    orderDetails += `Name: ${formData.name}\n`;
    orderDetails += `Email: ${formData.email}\n`;
    orderDetails += `Phone: ${formData.phone}\n`;
    orderDetails += `Address: ${formData.address}\n`;
    orderDetails += `Message: ${
      formData.message || "No additional message"
    }\n\n`;

    orderDetails += `*Order Summary:*\n`;
    cart.forEach((item) => {
      orderDetails += `${item.name} - ₹${item.salePrice.toLocaleString()} x ${
        item.quantity
      } = ₹${(item.salePrice * item.quantity).toLocaleString()}\n`;
    });
    orderDetails += `\n*Total Amount: ₹${cartTotal.toLocaleString()}*\n`;
    orderDetails += `*Order Date: ${new Date().toLocaleString()}*`;

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = `${BaseUrlWHATSAPP_NUMBER}`; // Apna number daal dena
    const whatsappMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp link
    try {
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      alert("Error opening WhatsApp. Please ensure WhatsApp is installed.");
    }

    // Clear cart and form after submission
    setCart([]);
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    setShowCheckoutForm(false);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-lg font-medium text-gray-500">
              Your cart is empty
            </p>
            <Link
              to="/commercial-aata-chakki"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            {!showCheckoutForm ? (
              <>
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center border-b py-4 hover:bg-blue-50"
                  >
                    <img
                      src={`${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-blue-600 font-bold">
                        ₹{(item.salePrice * item.quantity).toLocaleString()}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity - 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <ChevronDown size={16} />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity + 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <ChevronUp size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-gray-400 hover:text-red-500 p-2"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
                <div className="mt-6 flex justify-between items-center">
                  <span className="font-bold text-gray-700">Total:</span>
                  <span className="font-bold text-lg text-blue-600">
                    ₹{cartTotal.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Checkout Details
                </h2>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg"
                    placeholder="e.g., 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg text-white ${
                    isSubmitting
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Confirm Order"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 mt-2"
                  disabled={isSubmitting}
                >
                  Back to Cart
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
