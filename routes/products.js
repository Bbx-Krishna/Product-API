const express = require('express');

const routes = express.Router();

const productsController = require("../Controller/ProductsController");

routes.post("/add-product", productsController.addProduct);
routes.get("/products", productsController.getProducts);
routes.get("/view-product/:id", productsController.getProductById);
routes.put("/update-product/:id", productsController.updateProduct);
routes.delete("/delete-product/:id", productsController.deleteProduct);

console.log("products routes");

module.exports = routes;