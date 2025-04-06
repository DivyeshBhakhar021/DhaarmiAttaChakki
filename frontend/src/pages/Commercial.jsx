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
//       image: "../../public/home/s11-1.jpg",
//       type: "grinder",
//       capacity: 1,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Lucky Dhaarmi Neo Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 20990,
//       salePrice: 16990,
//       image: "../../public/home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Lucky Dhaarmi Neo with Inbuilt Vacuum Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 21990,
//       salePrice: 17990,
//       image: "../../public/home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 4,
//       name: "Lucky Dhaarmi Neo Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 21690,
//       salePrice: 17690,
//       image: "../../public/home/s11-1.jpg",
//       type: "neoplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: "Lucky Dhaarmi Pro Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22990,
//       salePrice: 18990,
//       image: "../../public/home/s11-1.jpg",
//       type: "pro",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 6,
//       name: "Lucky Dhaarmi Pro Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 23990,
//       salePrice: 19990,
//       image: "../../public/home/s11-1.jpg",
//       type: "proplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 7,
//       name: "Lucky Dhaarmi Neo Premium Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22490,
//       salePrice: 18490,
//       image: "../../public/home/s11-1.jpg",
//       type: "neopremium",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 8,
//       name: "Lucky Dhaarmi Premium Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 24990,
//       salePrice: 20990,
//       image: "../../public/home/s11-1.jpg",
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
//       image: "../../public/home/s11-1.jpg",
//       type: "grinder",
//       capacity: 1,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Lucky Dhaarmi Neo Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 20990,
//       salePrice: 16990,
//       image: "../../public/home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Lucky Dhaarmi Neo with Inbuilt Vacuum Aata Chakki Fully Automatic Domestic Flour Mill",
//       originalPrice: 21990,
//       salePrice: 17990,
//       image: "../../public/home/s11-1.jpg",
//       type: "neo",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 4,
//       name: "Lucky Dhaarmi Neo Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 21690,
//       salePrice: 17690,
//       image: "../../public/home/s11-1.jpg",
//       type: "neoplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: "Lucky Dhaarmi Pro Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22990,
//       salePrice: 18990,
//       image: "../../public/home/s11-1.jpg",
//       type: "pro",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 6,
//       name: "Lucky Dhaarmi Pro Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 23990,
//       salePrice: 19990,
//       image: "../../public/home/s11-1.jpg",
//       type: "proplus",
//       capacity: 6.5,
//       inStock: true,
//     },
//     {
//       id: 7,
//       name: "Lucky Dhaarmi Neo Premium Aata Chakki 5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 22490,
//       salePrice: 18490,
//       image: "../../public/home/s11-1.jpg",
//       type: "neopremium",
//       capacity: 5,
//       inStock: true,
//     },
//     {
//       id: 8,
//       name: "Lucky Dhaarmi Premium Plus Aata Chakki 6.5 Kg Fully Automatic Domestic Flour Mill",
//       originalPrice: 24990,
//       salePrice: 20990,
//       image: "../../public/home/s11-1.jpg",
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
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, List, Menu, ShoppingCart, Heart } from "lucide-react";

import { BaseUrl } from "../App";

const ProductCatalog = ({ cart = [], setCart }) => {
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("default");
  const [notification, setNotification] = useState(null);

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
                  src={`http://localhost:5000/${product.image}`}
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