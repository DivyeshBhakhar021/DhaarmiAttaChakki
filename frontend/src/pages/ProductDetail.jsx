import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { BaseUrl } from "../App";

const ProductDetail = ({ cart, setCart }) => {
  const { productId } = useParams(); // Changed from 'id' to 'productId' to match route
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/products/getdata/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching product details:", error);
        setLoading(false);
      }
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
              src={`http://localhost:5000/${product.image}`}
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

            {/* Short Description */}
            <p className="text-gray-600 mb-4">{product.short_description}</p>

            {/* Tags */}
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

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all w-full shadow-md hover:shadow-lg mb-6"
            >
              Add to Cart
            </button>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600 whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Features */}
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

            {/* Specification */}
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

            {/* Warranty Summary */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-black-800 mb-2">
                Warranty Summary
              </h2>
              <p className="text-gray-600">{product.Warranty_Summary}</p>
            </div>

            {/* Usage */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Usage Instructions
              </h2>
              {product.Usage.split(/Step \d+ : /).map((part, index) => {
                if (index === 0) return null; // First split part empty hoga, ignore karein

                const lines = part.trim().split(/\r?\n/).filter(Boolean); // Remove extra newlines
                const title = `Step ${index} : ${lines.shift()}`; // Pehli line Step ka title hoga

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
          {/* <div className="md:w-1/2">
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
            <p className="text-gray-600 mb-4">
              {product.name} - a powerful domestic flour mill with{" "}
              {product.capacity} kg capacity. Fully automatic operation with
              superior grinding quality.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
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
            <button
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all w-full shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
