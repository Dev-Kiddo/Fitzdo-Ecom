import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mrp: {
      type: Number,
    },

    discountPercentage: {
      type: Number,
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    images: {
      mainImage: {
        type: String,
      },
      galleryImages: [String],
    },
    stock: {
      type: Number,
      default: 0,
    },

    delivery: {
      freeDelivery: Boolean,
      cashOnDelivery: Boolean,
    },
    boxContents: [String],

    warranty: {
      duration: String,
      description: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
