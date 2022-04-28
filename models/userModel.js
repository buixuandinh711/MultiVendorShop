const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      trim: true,
    },
    userName: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    images: {
      type: Object,
    },
    shopName: {
      type: String,
      trim: true,
      unique: true,
      default: "",
    },
    showroomImg: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function(next) {
  if (!this.shopName) {
    this.shopName = this.get('userName');
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
