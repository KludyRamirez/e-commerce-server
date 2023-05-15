const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    postalcode: {
      type: String,
    },
    country: {
      type: String,
    },
    wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
