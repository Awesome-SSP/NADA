// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["Admin", "Investigator", "Analyst"],
      required: true,
    },
  },
  { timestamps: true }
);

// Password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password verification
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// module.exports = mongoose.model("User", userSchema);

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       min: 2,
//       max: 100,
//     },
//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 5,
//     },
//     city: String,
//     state: String,
//     country: String,
//     occupation: String,
//     phoneNumber: String,
//     transactions: Array,
//     role: {
//       type: String,
//       enum: ["user", "admin", "superadmin"],
//       default: "admin",
//     },
//   },
//   { timestamps: true }
// );

const User = mongoose.model("User", userSchema);
export default User;
