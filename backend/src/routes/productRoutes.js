const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload"); // Multer middleware import

router.post("/create", upload.single("image"), productController.addProduct);
router.get("/getdata", productController.getProducts);
router.get("/getdata/:id", productController.getProduct);
router.put("/put/:id", upload.single("image"), productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
