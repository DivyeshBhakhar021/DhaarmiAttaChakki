// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   List,
//   Menu,
//   ShoppingCart,
//   Heart,
//   X,
//   ChevronUp,
//   ChevronDown,
//   Eye,
// } from "lucide-react";

// const CheckoutPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Checkout Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const ProductCatalog = () => {
//   const initialProducts = [
//     {
//       id: 1,
//       name: "Lucky Dhaarmi Baby Grinder 1 HP Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 17900,
//       salePrice: 13490,
//       image: "./home/s11-1.jpg",
//       type: "grinder",
//       capacity: 1,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Lucky Dhaarmi Neo Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 20990,
//       salePrice: 16990,
//       image: "./home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Lucky Dhaarmi Neo with Inbuilt Vacuum Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 21990,
//       salePrice: 17990,
//       image: "./home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 4,
//       name: "Lucky Dhaarmi Neo Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 21690,
//       salePrice: 17690,
//       image: "./home/s11-1.jpg",
//       type: "neoplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: "Lucky Dhaarmi Pro Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22990,
//       salePrice: 18990,
//       image: "./home/s11-1.jpg",
//       type: "pro",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 6,
//       name: "Lucky Dhaarmi Pro Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 23990,
//       salePrice: 19990,
//       image: "./home/s11-1.jpg",
//       type: "proplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 7,
//       name: "Lucky Dhaarmi Neo Premium Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22490,
//       salePrice: 18490,
//       image: "./home/s11-1.jpg",
//       type: "neopremium",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 8,
//       name: "Lucky Dhaarmi Premium Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 24990,
//       salePrice: 20990,
//       image: "./home/s11-1.jpg",
//       type: "premiumplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//   ];

//   const [products, setProducts] = useState(initialProducts);
//   const [viewMode, setViewMode] = useState("grid");
//   const [sortOption, setSortOption] = useState("default");
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [highlightedItem, setHighlightedItem] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     let sortedProducts = [...initialProducts];

//     switch (sortOption) {
//       case "price-low-high":
//         sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
//         break;
//       case "price-high-low":
//         sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
//         break;
//       case "name-a-z":
//         sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "name-z-a":
//         sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
//         break;
//       default:
//         sortedProducts.sort((a, b) => a.id - b.id);
//     }

//     setProducts(sortedProducts);
//   }, [sortOption]);

//   const addToCart = (product) => {
//     setHighlightedItem(product.id);

//     setTimeout(() => {
//       setHighlightedItem(null);
//     }, 700);

//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }

//     setIsCartOpen(true);
//     setTimeout(() => {
//       setIsCartOpen(false);
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;

//     setCart(
//       cart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.salePrice * item.quantity,
//     0
//   );

//   const sendCartToWhatsApp = (formData) => {
//     const phoneNumber = "8866538881";
//     const message = `
//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone}
//       Address: ${formData.address}
//       Message: ${formData.message}
//       Product id: ${cart
//         .map((item) => `${item.name} x ${item.quantity}`)
//         .join(", ")}
//       Cart Items: ${cart
//         .map((item) => `${item.name} x ${item.quantity}`)
//         .join(", ")}
//       Total: ₹${cartTotal.toLocaleString()}
//     `;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//     setIsPopupOpen(false);
//   };

//   const handleProceedToCheckout = () => {
//     setIsPopupOpen(true);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-xl shadow-md mb-8 p-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="group">
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent pb-4">
//                 Dhaarmi Flour Mills
//               </h1>
//               <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-500 ease-out"></div>
//             </div>
//             <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-center md:justify-end">
//               <div className="flex rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "grid"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="Grid View"
//                 >
//                   <Grid size={18} />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("compact")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "compact"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="Compact Grid"
//                 >
//                   <Menu size={18} />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "list"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="List View"
//                 >
//                   <List size={18} />
//                 </button>
//               </div>
//               <select
//                 className="appearance-none bg-white border border-gray-200 rounded-lg py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 shadow-sm hover:shadow transition-all cursor-pointer"
//                 value={sortOption}
//                 onChange={(e) => setSortOption(e.target.value)}
//                 style={{
//                   backgroundImage:
//                     "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
//                   backgroundPosition: "right 0.5rem center",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "1.5em 1.5em",
//                   paddingRight: "2.5rem",
//                 }}
//               >
//                 <option value="default">Default sorting</option>
//                 <option value="price-low-high">Price: Low to High</option>
//                 <option value="price-high-low">Price: High to Low</option>
//                 <option value="name-a-z">Name: A to Z</option>
//                 <option value="name-z-a">Name: Z to A</option>
//               </select>
//               <button
//                 className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all relative flex items-center gap-2"
//                 onClick={() => setIsCartOpen(!isCartOpen)}
//               >
//                 <ShoppingCart size={18} className="stroke-current" />
//                 Cart
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
//                     {cart.reduce((total, item) => total + item.quantity, 0)}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isCartOpen && (
//           <div className="fixed top-24 right-4 md:right-8 lg:right-12 w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden transform transition-all duration-300 translate-y-0 opacity-100">
//             <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100 flex justify-between items-center">
//               <h2 className="text-lg font-bold text-blue-800 flex items-center gap-2">
//                 <ShoppingCart size={18} />
//                 Shopping Cart
//               </h2>
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="max-h-96 overflow-y-auto">
//               {cart.length === 0 ? (
//                 <div className="p-8 text-center text-gray-500">
//                   <ShoppingCart
//                     size={64}
//                     className="mx-auto text-gray-300 mb-4"
//                   />
//                   <p className="text-lg font-medium">Your cart is empty</p>
//                   <p className="text-sm text-gray-400 mt-1">
//                     Add some products to start shopping
//                   </p>
//                 </div>
//               ) : (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="p-4 border-b flex items-center hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <div className="w-16 h-16 bg-gray-100 mr-4 rounded-lg overflow-hidden flex items-center justify-center">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium text-gray-800 line-clamp-1 hover:text-blue-600 transition-colors">
//                         {item.name}
//                       </h3>
//                       <div className="flex items-center mt-2">
//                         <div className="flex border rounded-lg overflow-hidden">
//                           <button
//                             className="px-2 py-1 hover:bg-blue-100 transition-colors border-r text-gray-600"
//                             onClick={() =>
//                               updateQuantity(item.id, item.quantity - 1)
//                             }
//                           >
//                             <ChevronDown size={16} />
//                           </button>
//                           <span className="px-3 py-1 bg-white flex items-center justify-center min-w-[30px]">
//                             {item.quantity}
//                           </span>
//                           <button
//                             className="px-2 py-1 hover:bg-blue-100 transition-colors border-l text-gray-600"
//                             onClick={() =>
//                               updateQuantity(item.id, item.quantity + 1)
//                             }
//                           >
//                             <ChevronUp size={16} />
//                           </button>
//                         </div>
//                         <span className="ml-4 font-medium text-blue-600">
//                           ₹{(item.salePrice * item.quantity).toLocaleString()}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       className="ml-2 text-gray-400 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>
//             {cart.length > 0 && (
//               <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-blue-50">
//                 <div className="flex justify-between mb-4">
//                   <span className="font-bold text-gray-700">Total:</span>
//                   <span className="font-bold text-lg text-blue-700">
//                     ₹{cartTotal.toLocaleString()}
//                   </span>
//                 </div>
//                 <button
//                   className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white w-full py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
//                   onClick={handleProceedToCheckout}
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//         <CheckoutPopup
//           isOpen={isPopupOpen}
//           onClose={() => setIsPopupOpen(false)}
//           onSubmit={sendCartToWhatsApp}
//         />
//         <div
//           className={`
//           ${
//             viewMode === "grid"
//               ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//               : ""
//           }
//           ${
//             viewMode === "compact"
//               ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
//               : ""
//           }
//           ${viewMode === "list" ? "space-y-6" : ""}
//           `}
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className={`
//                 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
//                 ${
//                   highlightedItem === product.id
//                     ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50"
//                     : ""
//                 }
//                 ${viewMode === "list" ? "flex" : ""}
//               `}
//             >
//               <div
//                 className={`relative overflow-hidden bg-gray-50 ${
//                   viewMode === "list" ? "w-1/3" : ""
//                 }`}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className={`w-full ${
//                     viewMode === "compact" ? "h-48" : "h-64"
//                   } object-contain transform hover:scale-110 transition-transform duration-500`}
//                 />
//                 <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                   ON SALE
//                 </span>
//               </div>
//               <div
//                 className={`p-4 flex flex-col ${
//                   viewMode === "list" ? "w-2/3" : ""
//                 }`}
//               >
//                 <div className="flex items-start justify-between mb-2">
//                   <h2
//                     className={`font-bold transition-colors duration-300 hover:text-blue-600 ${
//                       viewMode === "compact" ? "text-sm" : "text-lg"
//                     }`}
//                   >
//                     {viewMode === "compact"
//                       ? product.name.length > 30
//                         ? product.name.substring(0, 30) + "..."
//                         : product.name
//                       : product.name}
//                   </h2>
//                   {viewMode !== "compact" && (
//                     <button className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-full">
//                       <Heart size={18} />
//                     </button>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-400 line-through text-sm">
//                       ₹{product.originalPrice.toLocaleString()}
//                     </span>
//                     <span className="font-bold text-blue-600 text-lg">
//                       ₹{product.salePrice.toLocaleString()}
//                     </span>
//                     <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
//                       Save{" "}
//                       {Math.round(
//                         (1 - product.salePrice / product.originalPrice) * 100
//                       )}
//                       %
//                     </span>
//                   </div>
//                 </div>
//                 {viewMode === "list" && (
//                   <div className="mb-4">
//                     <p className="text-gray-600 leading-relaxed">
//                       {product.name} - a powerful domestic flour mill with{" "}
//                       {product.capacity} kg capacity. Fully automatic operation
//                       with superior grinding quality.
//                     </p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         {product.capacity} kg
//                       </span>
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         Automatic
//                       </span>
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         {product.type}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//                 <div className="mt-auto">
//                   {product.id === 1 ? (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
//                     >
//                       <ShoppingCart
//                         size={18}
//                         className="group-hover:animate-bounce"
//                       />
//                       Add to cart
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all w-full shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
//                     >
//                       Add to cart
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;




// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   List,
//   Menu,
//   ShoppingCart,
//   Heart,
//   X,
//   ChevronUp,
//   ChevronDown,
//   Eye,
// } from "lucide-react";

// const CheckoutPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Checkout Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const ProductCatalog = () => {
//   const initialProducts = [
//     {
//       id: 1,
//       name: "Lucky Dhaarmi Baby Grinder 1 HP Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 17900,
//       salePrice: 13490,
//       image: "./home/s11-1.jpg",
//       type: "grinder",
//       capacity: 1,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Lucky Dhaarmi Neo Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 20990,
//       salePrice: 16990,
//       image: "./home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Lucky Dhaarmi Neo with Inbuilt Vacuum Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 21990,
//       salePrice: 17990,
//       image: "./home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 4,
//       name: "Lucky Dhaarmi Neo Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 21690,
//       salePrice: 17690,
//       image: "./home/s11-1.jpg",
//       type: "neoplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: "Lucky Dhaarmi Pro Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22990,
//       salePrice: 18990,
//       image: "./home/s11-1.jpg",
//       type: "pro",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 6,
//       name: "Lucky Dhaarmi Pro Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 23990,
//       salePrice: 19990,
//       image: "./home/s11-1.jpg",
//       type: "proplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 7,
//       name: "Lucky Dhaarmi Neo Premium Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22490,
//       salePrice: 18490,
//       image: "./home/s11-1.jpg",
//       type: "neopremium",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 8,
//       name: "Lucky Dhaarmi Premium Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 24990,
//       salePrice: 20990,
//       image: "./home/s11-1.jpg",
//       type: "premiumplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//   ];

//   const [products, setProducts] = useState(initialProducts);
//   const [viewMode, setViewMode] = useState("grid");
//   const [sortOption, setSortOption] = useState("default");
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [highlightedItem, setHighlightedItem] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  

//   useEffect(() => {
//     let sortedProducts = [...initialProducts];

//     switch (sortOption) {
//       case "price-low-high":
//         sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
//         break;
//       case "price-high-low":
//         sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
//         break;
//       case "name-a-z":
//         sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "name-z-a":
//         sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
//         break;
//       default:
//         sortedProducts.sort((a, b) => a.id - b.id);
//     }

//     setProducts(sortedProducts);
//   }, [sortOption]);

//   const addToCart = (product) => {
//     setHighlightedItem(product.id);

//     setTimeout(() => {
//       setHighlightedItem(null);
//     }, 700);

//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }

//     setIsCartOpen(true);
//     setTimeout(() => {
//       setIsCartOpen(false);
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;

//     setCart(
//       cart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.salePrice * item.quantity,
//     0
//   );

//   const sendCartToWhatsApp = (formData) => {
//     const phoneNumber = "8866538881";
//     const message = `
//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone}
//       Address: ${formData.address}
//       Message: ${formData.message}
//       Product id: ${cart
//         .map((item) => `${item.id} `)
//         .join(", ")}
//       Cart Items: ${cart
//         .map((item) => `${item.name} x ${item.quantity}`)
//         .join(", ")}
//       Total: ₹${cartTotal.toLocaleString()}
//     `;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//     setIsPopupOpen(false);
//     setIsOrderConfirmed(true);
//     setTimeout(() => {
//       setIsOrderConfirmed(false);
//     }, 5000);
//   };

//   const handleProceedToCheckout = () => {
//     setIsPopupOpen(true);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-xl shadow-md mb-8 p-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="group">
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent pb-4">
//                 Dhaarmi Flour Mills
//               </h1>
//               <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-500 ease-out"></div>
//             </div>
//             <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-center md:justify-end">
//               <div className="flex rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "grid"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="Grid View"
//                 >
//                   <Grid size={18} />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("compact")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "compact"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="Compact Grid"
//                 >
//                   <Menu size={18} />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 transition-all duration-300 ${
//                     viewMode === "list"
//                       ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                       : "bg-white text-gray-700 hover:bg-blue-50"
//                   }`}
//                   title="List View"
//                 >
//                   <List size={18} />
//                 </button>
//               </div>
//               <select
//                 className="appearance-none bg-white border border-gray-200 rounded-lg py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 shadow-sm hover:shadow transition-all cursor-pointer"
//                 value={sortOption}
//                 onChange={(e) => setSortOption(e.target.value)}
//                 style={{
//                   backgroundImage:
//                     "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
//                   backgroundPosition: "right 0.5rem center",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "1.5em 1.5em",
//                   paddingRight: "2.5rem",
//                 }}
//               >
//                 <option value="default">Default sorting</option>
//                 <option value="price-low-high">Price: Low to High</option>
//                 <option value="price-high-low">Price: High to Low</option>
//                 <option value="name-a-z">Name: A to Z</option>
//                 <option value="name-z-a">Name: Z to A</option>
//               </select>
//               <button
//                 className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all relative flex items-center gap-2"
//                 onClick={() => setIsCartOpen(!isCartOpen)}
//               >
//                 <ShoppingCart size={18} className="stroke-current" />
//                 Cart
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
//                     {cart.reduce((total, item) => total + item.quantity, 0)}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isCartOpen && (
//           <div className="fixed top-24 right-4 md:right-8 lg:right-12 w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden transform transition-all duration-300 translate-y-0 opacity-100">
//             <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100 flex justify-between items-center">
//               <h2 className="text-lg font-bold text-blue-800 flex items-center gap-2">
//                 <ShoppingCart size={18} />
//                 Shopping Cart
//               </h2>
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="max-h-96 overflow-y-auto">
//               {cart.length === 0 ? (
//                 <div className="p-8 text-center text-gray-500">
//                   <ShoppingCart
//                     size={64}
//                     className="mx-auto text-gray-300 mb-4"
//                   />
//                   <p className="text-lg font-medium">Your cart is empty</p>
//                   <p className="text-sm text-gray-400 mt-1">
//                     Add some products to start shopping
//                   </p>
//                 </div>
//               ) : (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="p-4 border-b flex items-center hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <div className="w-16 h-16 bg-gray-100 mr-4 rounded-lg overflow-hidden flex items-center justify-center">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium text-gray-800 line-clamp-1 hover:text-blue-600 transition-colors">
//                         {item.name}
//                       </h3>
//                       <div className="flex items-center mt-2">
//                         <div className="flex border rounded-lg overflow-hidden">
//                           <button
//                             className="px-2 py-1 hover:bg-blue-100 transition-colors border-r text-gray-600"
//                             onClick={() =>
//                               updateQuantity(item.id, item.quantity - 1)
//                             }
//                           >
//                             <ChevronDown size={16} />
//                           </button>
//                           <span className="px-3 py-1 bg-white flex items-center justify-center min-w-[30px]">
//                             {item.quantity}
//                           </span>
//                           <button
//                             className="px-2 py-1 hover:bg-blue-100 transition-colors border-l text-gray-600"
//                             onClick={() =>
//                               updateQuantity(item.id, item.quantity + 1)
//                             }
//                           >
//                             <ChevronUp size={16} />
//                           </button>
//                         </div>
//                         <span className="ml-4 font-medium text-blue-600">
//                           ₹{(item.salePrice * item.quantity).toLocaleString()}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       className="ml-2 text-gray-400 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>
//             {cart.length > 0 && (
//               <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-blue-50">
//                 <div className="flex justify-between mb-4">
//                   <span className="font-bold text-gray-700">Total:</span>
//                   <span className="font-bold text-lg text-blue-700">
//                     ₹{cartTotal.toLocaleString()}
//                   </span>
//                 </div>
//                 <button
//                   className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white w-full py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
//                   onClick={handleProceedToCheckout}
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//         <CheckoutPopup
//           isOpen={isPopupOpen}
//           onClose={() => setIsPopupOpen(false)}
//           onSubmit={sendCartToWhatsApp}
//         />
//         {isOrderConfirmed && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-md">
//               <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>
//               <p className="text-gray-700">
//                 Your order has been confirmed. Thank you for shopping with us!
//               </p>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//                 onClick={() => setIsOrderConfirmed(false)}
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         <div
//           className={`
//           ${
//             viewMode === "grid"
//               ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//               : ""
//           }
//           ${
//             viewMode === "compact"
//               ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
//               : ""
//           }
//           ${viewMode === "list" ? "space-y-6" : ""}
//           `}
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className={`
//                 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
//                 ${
//                   highlightedItem === product.id
//                     ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50"
//                     : ""
//                 }
//                 ${viewMode === "list" ? "flex" : ""}
//               `}
//             >
//               <div
//                 className={`relative overflow-hidden bg-gray-50 ${
//                   viewMode === "list" ? "w-1/3" : ""
//                 }`}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className={`w-full ${
//                     viewMode === "compact" ? "h-48" : "h-64"
//                   } object-contain transform hover:scale-110 transition-transform duration-500`}
//                 />
//                 <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                   ON SALE
//                 </span>
//               </div>
//               <div
//                 className={`p-4 flex flex-col ${
//                   viewMode === "list" ? "w-2/3" : ""
//                 }`}
//               >
//                 <div className="flex items-start justify-between mb-2">
//                   <h2
//                     className={`font-bold transition-colors duration-300 hover:text-blue-600 ${
//                       viewMode === "compact" ? "text-sm" : "text-lg"
//                     }`}
//                   >
//                     {viewMode === "compact"
//                       ? product.name.length > 30
//                         ? product.name.substring(0, 30) + "..."
//                         : product.name
//                       : product.name}
//                   </h2>
//                   {viewMode !== "compact" && (
//                     <button className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-full">
//                       <Heart size={18} />
//                     </button>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-400 line-through text-sm">
//                       ₹{product.originalPrice.toLocaleString()}
//                     </span>
//                     <span className="font-bold text-blue-600 text-lg">
//                       ₹{product.salePrice.toLocaleString()}
//                     </span>
//                     <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
//                       Save{" "}
//                       {Math.round(
//                         (1 - product.salePrice / product.originalPrice) * 100
//                       )}
//                       %
//                     </span>
//                   </div>
//                 </div>
//                 {viewMode === "list" && (
//                   <div className="mb-4">
//                     <p className="text-gray-600 leading-relaxed">
//                       {product.name} - a powerful domestic flour mill with{" "}
//                       {product.capacity} kg capacity. Fully automatic operation
//                       with superior grinding quality.
//                     </p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         {product.capacity} kg
//                       </span>
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         Automatic
//                       </span>
//                       <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
//                         {product.type}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//                 <div className="mt-auto">
//                   {product.id === 1 ? (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
//                     >
//                       <ShoppingCart
//                         size={18}
//                         className="group-hover:animate-bounce"
//                       />
//                       Add to cart
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all w-full shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
//                     >
//                       Add to cart
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;


































import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Grid, List, Menu, ShoppingCart, Heart } from "lucide-react";




const ProductCatalog = ({ cart = [], setCart }) => {

  
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
    
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
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("default");
  const [notification, setNotification] = useState(null);

  // const getdata = async () => {
  //   try {
  //     const response = await axios.get(`${BaseUrl}/products/getdata`);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("❌ Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   getdata();
  // }, []);

  useEffect(() => {
    if (!products || products.length === 0) return;
    let sortedProducts = [...products];
    switch (sortOption) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high-low":
        sortedProducts.sort((a, b) => b.salePrice - b.salePrice);
        break;
      case "name-a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts.sort((a, b) => a._id.localeCompare(b._id));
    }
    setProducts(sortedProducts);
  }, [sortOption]);

  const addToCart = (product) => {
    // Safety check to ensure setCart is a function
    if (typeof setCart !== "function") {
      console.error(
        "setCart is not a function. Please ensure it's properly passed from the parent component."
      );
      return;
    }

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

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {notification && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            {notification}
          </div>
        )}
        <div className="bg-white rounded-xl shadow-md mb-8 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent pb-4">
                Dhaarmi Flour Mills
              </h1>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-500 ease-out"></div>
            </div>
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-center md:justify-end">
              <div className="flex rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                  title="Grid View"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`p-2 transition-all duration-300 ${
                    viewMode === "compact"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                  title="Compact Grid"
                >
                  <Menu size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>
              <select
                className="appearance-none bg-white border border-gray-200 rounded-lg py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 shadow-sm hover:shadow transition-all cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="default">Default sorting</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={`
            ${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                : ""
            }
            ${
              viewMode === "compact"
                ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                : ""
            }
            ${viewMode === "list" ? "space-y-6" : ""}
          `}
        >
          {products?.map((product) => (
            <div
              key={product._id}
              className={`
                bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
                ${viewMode === "list" ? "flex" : ""}
              `}
            >
              <div
                className={`relative overflow-hidden bg-gray-50 ${
                  viewMode === "list" ? "w-1/3" : ""
                }`}
              >
                <img
                  src={`${product.image}`}
                  alt={product.name}
                  className={`w-full ${
                    viewMode === "compact" ? "h-48" : "h-64"
                  } object-contain transform hover:scale-110 transition-transform duration-500`}
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  ON SALE
                </span>
              </div>
              <div
                className={`p-4 flex flex-col ${
                  viewMode === "list" ? "w-2/3" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <Link to={`/product/${product._id}`}>
                    <h2
                      className={`font-bold transition-colors duration-300 hover:text-blue-600 ${
                        viewMode === "compact" ? "text-sm" : "text-lg"
                      }`}
                    >
                      {viewMode === "compact"
                        ? product.name.length > 30
                          ? product.name.substring(0, 30) + "..."
                          : product.name
                        : product.name}
                    </h2>
                  </Link>
                  {/* {viewMode !== "compact" && (
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-full">
                      <Heart size={18} />
                    </button>
                  )} */}
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="font-bold text-blue-600 text-lg">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Save{" "}
                      {Math.round(
                        (1 - product.salePrice / product.originalPrice) * 100
                      )}
                      %
                    </span>
                  </div>
                </div>
                {viewMode === "list" && (
                  <div className="mb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {product.name} - a powerful domestic flour mill with{" "}
                      {product.capacity} kg capacity. Fully automatic operation
                      with superior grinding quality.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {product.capacity} kg
                      </span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        Automatic
                      </span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {product.type}
                      </span>
                    </div>
                  </div>
                )}
                <div className="mt-auto">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <ShoppingCart
                      size={18}
                      className="group-hover:animate-bounce"
                    />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = ({ cart = [], setCart }) => {
  return <ProductCatalog cart={cart} setCart={setCart} />;
};

export default Home;