import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    nameP: { type: String, required: true, unique: true },
    caption: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    countStatus: { type: Number, required: true },
    numberOfReviews: { type: Number, required: true },
    isFeatured:{type:Boolean, required:true},
    reviews:{type:Array}

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
