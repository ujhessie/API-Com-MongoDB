import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

const Products = mongoose.model("Products", ProductsSchema);

export default Products;
