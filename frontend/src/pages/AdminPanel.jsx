
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../pages/redux/AuthSlice";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import { BaseUrl } from "../App";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseUrl}/products/getdata`);
      setProducts(response.data);
      setError(null);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    originalPrice: "",
    salePrice: "",
    image: "",
    type: "",
    capacity: "",
    inStock: false,
    description: "",
    short_description: "",
    Features: "",
    Specification: "",
    Warranty_Summary: "",
    Usage: "",
  });

  const openAddModal = () => {
    setEditMode(false);
    setNewProduct({
      name: "",
      originalPrice: "",
      salePrice: "",
      image: "",
      type: "",
      capacity: "",
      inStock: false,
      description: "",
      short_description: "",
      Features: "",
      Specification: "",
      Warranty_Summary: "",
      Usage: "",
    });
    setFormErrors({});
    setModalIsOpen(true);
  };

  const openEditModal = (product) => {
    setEditMode(true);
    setCurrentId(product._id || product.id);
    setNewProduct({
      name: product.name,
      originalPrice: product.originalPrice,
      salePrice: product.salePrice,
      image: product.image,
      type: product.type,
      capacity: product.capacity,
      inStock: product.inStock,
      description: product.description || "",
      short_description: product.short_description || "",
      Features: product.Features || "",
      Specification: product.Specification || "",
      Warranty_Summary: product.Warranty_Summary || "",
      Usage: product.Usage || "",
    });
    setFormErrors({});
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({
        ...newProduct,
        imageFile: file,
        image: URL.createObjectURL(file),
      });
      if (formErrors.image) {
        setFormErrors({
          ...formErrors,
          image: "",
        });
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!newProduct.name.trim()) errors.name = "Name is required";
    if (!newProduct.originalPrice)
      errors.originalPrice = "Original price is required";
    if (!newProduct.salePrice) errors.salePrice = "Sale price is required";
    if (!newProduct.type.trim()) errors.type = "Type is required";
    if (!newProduct.capacity) errors.capacity = "Capacity is required";
    if (!newProduct.image && !newProduct.imageFile)
      errors.image = "Image is required";
    if (!newProduct.description.trim())
      errors.description = "Description is required";
    if (!newProduct.short_description.trim())
      errors.short_description = "Short description is required";

    if (
      parseFloat(newProduct.salePrice) > parseFloat(newProduct.originalPrice)
    ) {
      errors.salePrice = "Sale price cannot be greater than original price";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("originalPrice", newProduct.originalPrice);
    formData.append("salePrice", newProduct.salePrice);
    formData.append("type", newProduct.type);
    formData.append("capacity", newProduct.capacity);
    formData.append("inStock", newProduct.inStock);
    formData.append("description", newProduct.description);
    formData.append("short_description", newProduct.short_description);
    formData.append("Features", newProduct.Features);
    formData.append("Specification", newProduct.Specification);
    formData.append("Warranty_Summary", newProduct.Warranty_Summary);
    formData.append("Usage", newProduct.Usage);

    if (newProduct.imageFile) {
      formData.append("image", newProduct.imageFile);
    }

    try {
      if (editMode) {
        await axios.put(
          `${BaseUrl}/products/put/${currentId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        console.log("✅ Product updated successfully");
      } else {
        await axios.post(`${BaseUrl}/products/create`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("✅ Product created successfully");
      }
      getdata();
      closeModal();
    } catch (error) {
      console.error("❌ Error saving product:", error);
      setFormErrors({
        ...formErrors,
        submit: "Failed to save product. Please try again.",
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${BaseUrl}/products/delete/${id}`);
        setProducts(
          products.filter((product) => (product._id || product.id) !== id)
        );
      } catch (error) {
        console.error("❌ Error deleting product:", error);
        alert("Failed to delete product. Please try again.");
      }
    }
  };

  const renderProductCard = (product) => (
    <motion.div
      key={product._id || product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/150?text=Image+Not+Found";
          }}
        />
        <span
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${
            product.inStock
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <span className="text-gray-500 line-through text-sm">
              ₹{parseFloat(product.originalPrice).toLocaleString()}
            </span>
            <span className="text-gray-800 font-bold">
              ₹{parseFloat(product.salePrice).toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-sm">
            {product.capacity} HP | {product.type}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openEditModal(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDelete(product._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm9 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                clipRule="evenodd"
              />
            </svg>
            Logout
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openAddModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2 mb-6 w-full md:w-auto justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Product
        </motion.button>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <button onClick={getdata} className="mt-2 text-blue-500 underline">
              Try Again
            </button>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-xl font-semibold">No products found</p>
            <p className="mt-2">Add your first product to get started</p>
          </div>
        ) : (
          <>
            {isMobileView ? (
              <div className="grid grid-cols-1 gap-4">
                {products.map((product) => renderProductCard(product))}
              </div>
            ) : (
              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="p-3 text-left">Image</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Original Price</th>
                      <th className="p-3 text-left">Sale Price</th>
                      <th className="p-3 text-left">Type</th>
                      <th className="p-3 text-left">Model</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <motion.tr
                        key={product._id || product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ backgroundColor: "#f9fafb" }}
                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
                      >
                        <td className="p-3">
                          <img
                            src={`http://localhost:5000/${product.image}`}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/150?text=Image+Not+Found";
                            }}
                          />
                        </td>
                        <td className="p-3 max-w-xs truncate">
                          {product.name}
                        </td>
                        <td className="p-3">
                          ₹{parseFloat(product.originalPrice).toLocaleString()}
                        </td>
                        <td className="p-3">
                          ₹{parseFloat(product.salePrice).toLocaleString()}
                        </td>
                        <td className="p-3">{product.type}</td>
                        <td className="p-3">{product.capacity} HP</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              product.inStock
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex justify-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => openEditModal(product)}
                              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
                              title="Edit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDelete(product._id)}
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                              title="Delete"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      <AnimatePresence>
        {modalIsOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto overflow-x-auto"
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {editMode ? "Edit Product" : "Add Product"}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {formErrors.submit && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    <span className="block sm:inline">{formErrors.submit}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Name:
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        placeholder="Product name"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.name ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Original Price (₹):
                    </label>
                    <div className="flex-1">
                      <input
                        type="number"
                        name="originalPrice"
                        value={newProduct.originalPrice}
                        placeholder="Original price"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.originalPrice
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.originalPrice && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Sale Price (₹):
                    </label>
                    <div className="flex-1">
                      <input
                        type="number"
                        name="salePrice"
                        value={newProduct.salePrice}
                        placeholder="Sale price"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.salePrice
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.salePrice && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.salePrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Type:
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="type"
                        value={newProduct.type}
                        placeholder="Product type"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.type ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {formErrors.type && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.type}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Model (HP):
                    </label>
                    <div className="flex-1">
                      <input
                        type="number"
                        name="capacity"
                        value={newProduct.capacity}
                        placeholder="Model"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.capacity
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.capacity && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.capacity}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      In Stock:
                    </label>
                    <div className="flex-1">
                      <input
                        type="checkbox"
                        id="inStock"
                        name="inStock"
                        checked={newProduct.inStock}
                        onChange={handleChange}
                        className="rounded text-blue-500 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Description:
                    </label>
                    <div className="flex-1">
                      <textarea
                        name="description"
                        value={newProduct.description}
                        placeholder="Description"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.description
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        rows="2"
                      />
                      {formErrors.description && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Short Desc:
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="short_description"
                        value={newProduct.short_description}
                        placeholder="Short description"
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                          formErrors.short_description
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.short_description && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.short_description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Features:
                    </label>
                    <div className="flex-1">
                      <textarea
                        name="Features"
                        value={newProduct.Features}
                        placeholder="Features"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
                        rows="2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Specification:
                    </label>
                    <div className="flex-1">
                      <textarea
                        name="Specification"
                        value={newProduct.Specification}
                        placeholder="Specification"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
                        rows="2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Warranty:
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="Warranty_Summary"
                        value={newProduct.Warranty_Summary}
                        placeholder="Warranty summary"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <label className="text-gray-700 whitespace-nowrap">
                      Usage:
                    </label>
                    <div className="flex-1">
                      <textarea
                        name="Usage"
                        value={newProduct.Usage}
                        placeholder="Usage"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
                        rows="2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 col-span-1 md:col-span-2 lg:col-span-3">
                    <label className="text-gray-700 whitespace-nowrap">
                      Image:
                    </label>
                    <div className="flex-1 flex items-center space-x-4">
                      <label
                        className={`flex-1 flex items-center justify-center border-2 border-dashed rounded-md p-2 cursor-pointer ${
                          formErrors.image
                            ? "border-red-400"
                            : "border-gray-300"
                        } hover:border-blue-400`}
                      >
                        <span className="text-gray-500">Choose file</span>
                        <input
                          type="file"
                          onChange={handleImageChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                      {newProduct.image && (
                        <div className="w-16 h-16">
                          <img
                            src={newProduct.image}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      )}
                    </div>
                    {formErrors.image && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.image}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    {editMode ? "Update" : "Add"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPanel;

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../pages/redux/AuthSlice";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";

// const AdminPanel = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

//   // Monitor screen size for responsive layout
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch data on component mount
//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/v1/products/getdata"
//       );
//       console.log("✅ Products Fetched:", response.data);
//       setProducts(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("❌ Error fetching products:", error);
//       setError("Failed to fetch products. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     originalPrice: "",
//     salePrice: "",
//     image: "",
//     type: "",
//     capacity: "",
//     inStock: false,
//   });

//   // Open modal in add mode
//   const openAddModal = () => {
//     setEditMode(false);
//     setNewProduct({
//       name: "",
//       originalPrice: "",
//       salePrice: "",
//       image: "",
//       type: "",
//       capacity: "",
//       inStock: false,
//     });
//     setFormErrors({});
//     setModalIsOpen(true);
//   };

//   // Open modal in edit mode
//   const openEditModal = (product) => {
//     setEditMode(true);
//     setCurrentId(product._id || product.id); // Use _id for MongoDB documents
//     setNewProduct({
//       name: product.name,
//       originalPrice: product.originalPrice,
//       salePrice: product.salePrice,
//       image: product.image,
//       type: product.type,
//       capacity: product.capacity,
//       inStock: product.inStock,
//     });
//     setFormErrors({});
//     setModalIsOpen(true);
//   };

//   const closeModal = () => setModalIsOpen(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewProduct({
//       ...newProduct,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     // Clear error for this field when user starts typing
//     if (formErrors[name]) {
//       setFormErrors({
//         ...formErrors,
//         [name]: "",
//       });
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewProduct({
//         ...newProduct,
//         imageFile: file, // Store the actual file for form data
//         image: URL.createObjectURL(file), // For preview only
//       });
//       if (formErrors.image) {
//         setFormErrors({
//           ...formErrors,
//           image: "",
//         });
//       }
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!newProduct.name.trim()) errors.name = "Name is required";
//     if (!newProduct.originalPrice)
//       errors.originalPrice = "Original price is required";
//     if (!newProduct.salePrice) errors.salePrice = "Sale price is required";
//     if (!newProduct.type.trim()) errors.type = "Type is required";
//     if (!newProduct.capacity) errors.capacity = "Capacity is required";
//     if (!newProduct.image && !newProduct.imageFile)
//       errors.image = "Image is required";

//     // Validate that sale price is not greater than original price
//     if (
//       parseFloat(newProduct.salePrice) > parseFloat(newProduct.originalPrice)
//     ) {
//       errors.salePrice = "Sale price cannot be greater than original price";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     // Create FormData object for the API request
//     const formData = new FormData();
//     formData.append("name", newProduct.name);
//     formData.append("originalPrice", newProduct.originalPrice);
//     formData.append("salePrice", newProduct.salePrice);
//     formData.append("type", newProduct.type);
//     formData.append("capacity", newProduct.capacity);
//     formData.append("inStock", newProduct.inStock);

//     // If we have a new image file, append it to the form data
//     if (newProduct.imageFile) {
//       formData.append("image", newProduct.imageFile);
//     }

//     try {
//       if (editMode) {
//         // Update existing product
//         await axios.put(
//           `http://localhost:5000/api/v1/products/put/${currentId}`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         console.log("✅ Product updated successfully");
//       } else {
//         // Add new product
//         await axios.post(
//           "http://localhost:5000/api/v1/products/create",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         console.log("✅ Product created successfully");
//       }

//       // Refresh the product list
//       getdata();
//       closeModal();
//     } catch (error) {
//       console.error("❌ Error saving product:", error);
//       setFormErrors({
//         ...formErrors,
//         submit: "Failed to save product. Please try again.",
//       });
//     }
//   };

//   const handleDelete = async (id) => {
//     // Add confirmation dialog
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/v1/products/delete/${id}`
//         );
//         console.log("✅ Product deleted successfully");

//         // Update local state to remove the product
//         setProducts(
//           products.filter((product) => (product._id || product.id) !== id)
//         );
//       } catch (error) {
//         console.error("❌ Error deleting product:", error);
//         alert("Failed to delete product. Please try again.");
//       }
//     }
//   };

//   // Render product card for mobile view
//   const renderProductCard = (product) => (
//     <motion.div
//       key={product._id || product.id}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
//     >
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src =
//               "https://via.placeholder.com/150?text=Image+Not+Found";
//           }}
//         />
//         <span
//           className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${
//             product.inStock
//               ? "bg-green-500 text-white"
//               : "bg-red-500 text-white"
//           }`}
//         >
//           {product.inStock ? "In Stock" : "Out of Stock"}
//         </span>
//       </div>

//       <div className="p-4">
//         <h3 className="font-semibold text-lg mb-2 line-clamp-2">
//           {product.name}
//         </h3>

//         <div className="flex justify-between items-center mb-2">
//           <div className="flex flex-col">
//             <span className="text-gray-500 line-through text-sm">
//               ₹{parseFloat(product.originalPrice).toLocaleString()}
//             </span>
//             <span className="text-gray-800 font-bold">
//               ₹{parseFloat(product.salePrice).toLocaleString()}
//             </span>
//           </div>
//           <div className="bg-gray-100 px-2 py-1 rounded text-sm">
//             {product.capacity} HP | {product.type}
//           </div>
//         </div>

//         <div className="flex justify-between mt-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => openEditModal(product)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//             </svg>
//             Edit
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => handleDelete(product._id)}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Delete
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
//       <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Admin Dashboard
//           </h1>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm9 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Logout
//           </motion.button>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={openAddModal}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2 mb-6 w-full md:w-auto justify-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Add Product
//         </motion.button>

//         {/* Loading and Error States */}
//         {loading ? (
//           <div className="flex justify-center items-center py-8">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : error ? (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//             <strong className="font-bold">Error: </strong>
//             <span className="block sm:inline">{error}</span>
//             <button onClick={getdata} className="mt-2 text-blue-500 underline">
//               Try Again
//             </button>
//           </div>
//         ) : products.length === 0 ? (
//           <div className="text-center py-8 text-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-16 w-16 mx-auto text-gray-400 mb-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//               />
//             </svg>
//             <p className="text-xl font-semibold">No products found</p>
//             <p className="mt-2">Add your first product to get started</p>
//           </div>
//         ) : (
//           <>
//             {/* Mobile Card View */}
//             {isMobileView ? (
//               <div className="grid grid-cols-1 gap-4">
//                 {products.map((product) => renderProductCard(product))}
//               </div>
//             ) : (
//               /* Desktop Table View */
//               <div className="overflow-x-auto shadow-md rounded-lg">
//                 <table className="w-full border-collapse bg-white">
//                   <thead>
//                     <tr className="bg-gray-800 text-white">
//                       <th className="p-3 text-left">Image</th>
//                       <th className="p-3 text-left">Name</th>
//                       <th className="p-3 text-left">Original Price</th>
//                       <th className="p-3 text-left">Sale Price</th>
//                       <th className="p-3 text-left">Type</th>
//                       <th className="p-3 text-left">Capacity</th>
//                       <th className="p-3 text-left">Status</th>
//                       <th className="p-3 text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {products.map((product) => (
//                       <motion.tr
//                         key={product._id || product.id}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         whileHover={{ backgroundColor: "#f9fafb" }}
//                         className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
//                       >
//                         <td className="p-3">
//                           <img
//                             // src={product.image}
//                             src={`http://localhost:5000/${product.image}`}
//                             alt={product.name}
//                             className="w-16 h-16 object-cover rounded-md shadow-sm"
//                             onError={(e) => {
//                               e.target.onerror = null;
//                               e.target.src =
//                                 "https://via.placeholder.com/150?text=Image+Not+Found";
//                             }}
//                           />
//                         </td>
//                         <td className="p-3 max-w-xs truncate">
//                           {product.name}
//                         </td>
//                         <td className="p-3">
//                           ₹{parseFloat(product.originalPrice).toLocaleString()}
//                         </td>
//                         <td className="p-3">
//                           ₹{parseFloat(product.salePrice).toLocaleString()}
//                         </td>
//                         <td className="p-3">{product.type}</td>
//                         <td className="p-3">{product.capacity} HP</td>
//                         <td className="p-3">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs ${
//                               product.inStock
//                                 ? "bg-green-100 text-green-800"
//                                 : "bg-red-100 text-red-800"
//                             }`}
//                           >
//                             {product.inStock ? "In Stock" : "Out of Stock"}
//                           </span>
//                         </td>
//                         <td className="p-3">
//                           <div className="flex justify-center gap-2">
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               onClick={() => openEditModal(product)}
//                               className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
//                               title="Edit"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 viewBox="0 0 20 20"
//                                 fill="currentColor"
//                               >
//                                 <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                               </svg>
//                             </motion.button>
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               onClick={() =>
//                                 handleDelete(product._id)
//                               }
//                               className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
//                               title="Delete"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 viewBox="0 0 20 20"
//                                 fill="currentColor"
//                               >
//                                 <path
//                                   fillRule="evenodd"
//                                   d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                                   clipRule="evenodd"
//                                 />
//                               </svg>
//                             </motion.button>
//                           </div>
//                         </td>
//                       </motion.tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Modal - Same for both mobile and desktop */}
//       <AnimatePresence>
//         {modalIsOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-y-auto max-h-90vh"
//             >
//               <div className="p-4 md:p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-800">
//                     {editMode ? "Edit Product" : "Add Product"}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {formErrors.submit && (
//                   <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//                     <span className="block sm:inline">{formErrors.submit}</span>
//                   </div>
//                 )}

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Product Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={newProduct.name}
//                       placeholder="Enter product name"
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                         formErrors.name ? "border-red-500" : "border-gray-300"
//                       }`}
//                     />
//                     {formErrors.name && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {formErrors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Original Price (₹)
//                       </label>
//                       <input
//                         type="number"
//                         name="originalPrice"
//                         value={newProduct.originalPrice}
//                         placeholder="Original price"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.originalPrice
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.originalPrice && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.originalPrice}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Sale Price (₹)
//                       </label>
//                       <input
//                         type="number"
//                         name="salePrice"
//                         value={newProduct.salePrice}
//                         placeholder="Sale price"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.salePrice
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.salePrice && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.salePrice}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 mb-1">Type</label>
//                       <input
//                         type="text"
//                         name="type"
//                         value={newProduct.type}
//                         placeholder="Product type"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.type ? "border-red-500" : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.type && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.type}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Capacity (HP)
//                       </label>
//                       <input
//                         type="number"
//                         name="capacity"
//                         value={newProduct.capacity}
//                         placeholder="Capacity"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.capacity
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.capacity && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.capacity}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="inStock"
//                       name="inStock"
//                       checked={newProduct.inStock}
//                       onChange={handleChange}
//                       className="rounded text-blue-500 focus:ring-blue-200"
//                     />
//                     <label htmlFor="inStock" className="ml-2 text-gray-700">
//                       In Stock
//                     </label>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Product Image
//                     </label>
//                     <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
//                       <div className="flex-1">
//                         <label
//                           className={`w-full flex items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer ${
//                             formErrors.image
//                               ? "border-red-400"
//                               : "border-gray-300"
//                           } hover:border-blue-400`}
//                         >
//                           <span className="text-gray-500">Choose file</span>
//                           <input
//                             type="file"
//                             onChange={handleImageChange}
//                             className="hidden"
//                             accept="image/*"
//                           />
//                         </label>
//                         {formErrors.image && (
//                           <p className="text-red-500 text-sm mt-1">
//                             {formErrors.image}
//                           </p>
//                         )}
//                       </div>
//                       {newProduct.image && (
//                         <div className="w-20 h-20 mx-auto md:mx-0">
//                           <img
//                             src={newProduct.image}
//                             alt="Product preview"
//                             className="w-full h-full object-cover rounded-md"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row md:justify-end gap-3 mt-6">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={closeModal}
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 order-2 md:order-1"
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleSubmit}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 order-1 md:order-2"
//                   >
//                     {editMode ? "Update" : "Add"}
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AdminPanel;






















// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../pages/redux/AuthSlice";

// const AdminPanel = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout()); // Clear authentication
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       <p className="mb-4">Welcome to the admin panel.</p>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AdminPanel;

///// without api

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../pages/redux/AuthSlice";
// import { motion, AnimatePresence } from "framer-motion";

// const AdminPanel = () => {
//   const [products, setProducts] = useState([
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
//   ]);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

//   // Monitor screen size for responsive layout
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     originalPrice: "",
//     salePrice: "",
//     image: "",
//     type: "",
//     capacity: "",
//     inStock: false,
//   });

//   // Open modal in add mode
//   const openAddModal = () => {
//     setEditMode(false);
//     setNewProduct({
//       name: "",
//       originalPrice: "",
//       salePrice: "",
//       image: "",
//       type: "",
//       capacity: "",
//       inStock: false,
//     });
//     setFormErrors({});
//     setModalIsOpen(true);
//   };

//   // Open modal in edit mode
//   const openEditModal = (product) => {
//     setEditMode(true);
//     setCurrentId(product.id);
//     setNewProduct({
//       name: product.name,
//       originalPrice: product.originalPrice,
//       salePrice: product.salePrice,
//       image: product.image,
//       type: product.type,
//       capacity: product.capacity,
//       inStock: product.inStock,
//     });
//     setFormErrors({});
//     setModalIsOpen(true);
//   };

//   const closeModal = () => setModalIsOpen(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewProduct({
//       ...newProduct,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     // Clear error for this field when user starts typing
//     if (formErrors[name]) {
//       setFormErrors({
//         ...formErrors,
//         [name]: "",
//       });
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewProduct({ ...newProduct, image: reader.result });
//         if (formErrors.image) {
//           setFormErrors({
//             ...formErrors,
//             image: "",
//           });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!newProduct.name.trim()) errors.name = "Name is required";
//     if (!newProduct.originalPrice)
//       errors.originalPrice = "Original price is required";
//     if (!newProduct.salePrice) errors.salePrice = "Sale price is required";
//     if (!newProduct.type.trim()) errors.type = "Type is required";
//     if (!newProduct.capacity) errors.capacity = "Capacity is required";
//     if (!newProduct.image) errors.image = "Image is required";

//     // Validate that sale price is not greater than original price
//     if (
//       parseFloat(newProduct.salePrice) > parseFloat(newProduct.originalPrice)
//     ) {
//       errors.salePrice = "Sale price cannot be greater than original price";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validateForm()) return;

//     if (editMode) {
//       // Update existing product
//       setProducts(
//         products.map((product) =>
//           product.id === currentId ? { ...product, ...newProduct } : product
//         )
//       );
//     } else {
//       // Add new product
//       setProducts([...products, { id: products.length + 1, ...newProduct }]);
//     }

//     closeModal();
//   };

//   const handleDelete = (id) => {
//     // Add confirmation dialog
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       setProducts(products.filter((product) => product.id !== id));
//     }
//   };

//   // Render product card for mobile view
//   const renderProductCard = (product) => (
//     <motion.div
//       key={product.id}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
//     >
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover"
//         />
//         <span
//           className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${
//             product.inStock
//               ? "bg-green-500 text-white"
//               : "bg-red-500 text-white"
//           }`}
//         >
//           {product.inStock ? "In Stock" : "Out of Stock"}
//         </span>
//       </div>

//       <div className="p-4">
//         <h3 className="font-semibold text-lg mb-2 line-clamp-2">
//           {product.name}
//         </h3>

//         <div className="flex justify-between items-center mb-2">
//           <div className="flex flex-col">
//             <span className="text-gray-500 line-through text-sm">
//               ₹{product.originalPrice.toLocaleString()}
//             </span>
//             <span className="text-gray-800 font-bold">
//               ₹{product.salePrice.toLocaleString()}
//             </span>
//           </div>
//           <div className="bg-gray-100 px-2 py-1 rounded text-sm">
//             {product.capacity} HP | {product.type}
//           </div>
//         </div>

//         <div className="flex justify-between mt-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => openEditModal(product)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//             </svg>
//             Edit
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => handleDelete(product.id)}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-1"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Delete
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
//       <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Admin Dashboard
//           </h1>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm9 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Logout
//           </motion.button>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={openAddModal}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2 mb-6 w-full md:w-auto justify-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Add Product
//         </motion.button>

//         {/* Mobile Card View */}
//         {isMobileView ? (
//           <div className="grid grid-cols-1 gap-4">
//             {products.map((product) => renderProductCard(product))}
//           </div>
//         ) : (
//           /* Desktop Table View */
//           <div className="overflow-x-auto shadow-md rounded-lg">
//             <table className="w-full border-collapse bg-white">
//               <thead>
//                 <tr className="bg-gray-800 text-white">
//                   <th className="p-3 text-left">Image</th>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Original Price</th>
//                   <th className="p-3 text-left">Sale Price</th>
//                   <th className="p-3 text-left">Type</th>
//                   <th className="p-3 text-left">Capacity</th>
//                   <th className="p-3 text-left">Status</th>
//                   <th className="p-3 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <motion.tr
//                     key={product.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     whileHover={{ backgroundColor: "#f9fafb" }}
//                     className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
//                   >
//                     <td className="p-3">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-16 h-16 object-cover rounded-md shadow-sm"
//                       />
//                     </td>
//                     <td className="p-3 max-w-xs truncate">{product.name}</td>
//                     <td className="p-3">
//                       ₹{product.originalPrice.toLocaleString()}
//                     </td>
//                     <td className="p-3">
//                       ₹{product.salePrice.toLocaleString()}
//                     </td>
//                     <td className="p-3">{product.type}</td>
//                     <td className="p-3">{product.capacity} HP</td>
//                     <td className="p-3">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs ${
//                           product.inStock
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {product.inStock ? "In Stock" : "Out of Stock"}
//                       </span>
//                     </td>
//                     <td className="p-3">
//                       <div className="flex justify-center gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => openEditModal(product)}
//                           className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
//                           title="Edit"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                           </svg>
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleDelete(product.id)}
//                           className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
//                           title="Delete"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </motion.button>
//                       </div>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Modal - Same for both mobile and desktop */}
//       <AnimatePresence>
//         {modalIsOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-y-auto max-h-90vh"
//             >
//               <div className="p-4 md:p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-800">
//                     {editMode ? "Edit Product" : "Add Product"}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Product Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={newProduct.name}
//                       placeholder="Enter product name"
//                       onChange={handleChange}
//                       className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                         formErrors.name ? "border-red-500" : "border-gray-300"
//                       }`}
//                     />
//                     {formErrors.name && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {formErrors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Original Price (₹)
//                       </label>
//                       <input
//                         type="number"
//                         name="originalPrice"
//                         value={newProduct.originalPrice}
//                         placeholder="Original price"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.originalPrice
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.originalPrice && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.originalPrice}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Sale Price (₹)
//                       </label>
//                       <input
//                         type="number"
//                         name="salePrice"
//                         value={newProduct.salePrice}
//                         placeholder="Sale price"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.salePrice
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.salePrice && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.salePrice}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 mb-1">Type</label>
//                       <input
//                         type="text"
//                         name="type"
//                         value={newProduct.type}
//                         placeholder="Product type"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.type ? "border-red-500" : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.type && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.type}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Capacity (HP)
//                       </label>
//                       <input
//                         type="number"
//                         name="capacity"
//                         value={newProduct.capacity}
//                         placeholder="Capacity"
//                         onChange={handleChange}
//                         className={`w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
//                           formErrors.capacity
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         }`}
//                       />
//                       {formErrors.capacity && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formErrors.capacity}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="inStock"
//                       name="inStock"
//                       checked={newProduct.inStock}
//                       onChange={handleChange}
//                       className="rounded text-blue-500 focus:ring-blue-200"
//                     />
//                     <label htmlFor="inStock" className="ml-2 text-gray-700">
//                       In Stock
//                     </label>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Product Image
//                     </label>
//                     <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
//                       <div className="flex-1">
//                         <label
//                           className={`w-full flex items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer ${
//                             formErrors.image
//                               ? "border-red-400"
//                               : "border-gray-300"
//                           } hover:border-blue-400`}
//                         >
//                           <span className="text-gray-500">Choose file</span>
//                           <input
//                             type="file"
//                             onChange={handleImageChange}
//                             className="hidden"
//                             accept="image/*"
//                           />
//                         </label>
//                         {formErrors.image && (
//                           <p className="text-red-500 text-sm mt-1">
//                             {formErrors.image}
//                           </p>
//                         )}
//                       </div>
//                       {newProduct.image && (
//                         <div className="w-20 h-20 mx-auto md:mx-0">
//                           <img
//                             src={newProduct.image}
//                             alt="Product preview"
//                             className="w-full h-full object-cover rounded-md"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row md:justify-end gap-3 mt-6">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={closeModal}
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 order-2 md:order-1"
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleSubmit}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 order-1 md:order-2"
//                   >
//                     {editMode ? "Update" : "Add"}
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AdminPanel;

//// with api
