const Product = require("../models/Product");

// Add Product 
module.exports.addProduct = async (req, res) => {
    try {
        console.log("Request Body: ", req.body);
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product added successfully", product });
    } catch (err) {
        res.status(400).json({ message: "Error adding product", error: err.message });
    }
};

// View all products
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", error: err.message });
    }
};


// Get Single Product
module.exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Error fetching product", error: err.message });
    }
};

// Update Product
module.exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product updated", product });
    } catch (err) {
        res.status(400).json({ message: "Error updating product", error: err.message });
    }
};

// Delete Product
module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting product", error: err.message });
    }
};

