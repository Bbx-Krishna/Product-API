const express = require('express');

const routes = express.Router();

const productsController = require("../Controller/ProductsController");
const upload = require("../middleware/multer");

routes.post("/add-product",upload.single("product_image"), productsController.addProduct);
routes.get("/products", productsController.getProducts);
routes.get("/view-product/:id", productsController.getProductById);
routes.put("/update-product/:id", upload.single("product_image"), productsController.updateProduct);
routes.delete("/delete-product/:id", productsController.deleteProduct);

console.log("products routes");

module.exports = routes;