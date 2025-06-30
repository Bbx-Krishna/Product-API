const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_description: {
        type: String
    },
    product_category: {
        type: String,
        enum: [
            "Health & Wellness",
            "Clothing & Accessories",
            "Electronics & Accessories",
            "Groceries",
            "Household Items",
            "Beauty and Personal Care"
        ],
        required: true
    },
    product_discount: {
        type: Number,
        default: 0
    },
    product_stock: {
        type: Number,
        required: true
    },
    product_active: {
        type: Boolean,
        default: true
    },
    product_image: { 
        type: String 
    }
}, {
    timestamps: true
});

console.log("Product model");

module.exports = mongoose.model("Product", productSchema);