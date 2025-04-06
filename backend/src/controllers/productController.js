const Product = require("../models/Product");
const fs = require("fs");
const path = require("path"); // ✅ Fix: Import path module
const mongoose = require("mongoose");
// Add Product
exports.addProduct = async (req, res) => {
  try {
    console.log("🔥 Request Received:", req.body);
    console.log("🖼️ Uploaded File:", req.file); // Debugging image upload

    const { name, originalPrice, salePrice, type, capacity, inStock,description ,short_description,Features,Specification,Warranty_Summary,Usage } = req.body;
    const image = req.file ? req.file.path : null; // Multer se file ka path milega

    if (!name || !originalPrice || !salePrice || !type || !capacity || !inStock ||!description  || !short_description || !Features || !Specification || !Warranty_Summary ||  (Usage === undefined || Usage === null || Usage === "")) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const product = new Product({
      name,
      originalPrice,
      salePrice,
      image,
      type,
      capacity,
      inStock,
      description ,short_description,Features,Specification,Warranty_Summary,Usage
    });

    console.log(product,"ssssssssssssss")

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("🔥 Error in addProduct:", error.message);
    res.status(400).json({ error: error.message });
  }
};

// Get All
exports.getProducts = async (req, res) => {
    console.log("hello")
  try {
    console.log("📦 Fetching all products...");
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("❌ Error in getProducts:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get Single Product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    console.log("📩 Request Body (Before Fix):", req.body);

    // Ensure `req.body` is a normal object
    const body = JSON.parse(JSON.stringify(req.body));

    console.log("✅ Fixed Request Body:", body);

    // Extract fields
    let { name, originalPrice, salePrice, type, capacity, inStock ,description ,short_description,Features,Specification,Warranty_Summary,Usage } = body;

    // Ensure `inStock` is a boolean
    inStock = inStock === "true" || inStock === true;

    // Validate ObjectId
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Product ID" });
    }

    // Find the existing product
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let image = product.image; // Keep old image

    // If new image is uploaded, delete old one
    if (req.file) {
      if (product.image) {
        const oldImagePath = path.join(__dirname, "..", product.image);
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }
      image = req.file.path;
    }

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, originalPrice, salePrice, image, type, capacity, inStock,description ,short_description,Features,Specification,Warranty_Summary,Usage },
      { new: true }
    );

    console.log("✅ Product Updated:", updatedProduct);

    res.json(updatedProduct);
  } catch (error) {
    console.error("❌ Error in updateProduct:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// // Delete Product
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.deleteProduct = async (req, res) => {
  try {
    // Product find karo
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Image ka actual path
    const imagePath = path.join(__dirname, "..", "uploads", product.image);
    console.log("Image Path:", imagePath); // Debugging ke liye

    // Check karo agar file exist karti hai
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("File delete error:", err);
          return res.status(500).json({ error: "Failed to delete image file" });
        }
        console.log("Image deleted successfully");
      });
    } else {
      console.log("File does not exist:", imagePath);
    }

    // Database se product delete karo
    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product and image deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
