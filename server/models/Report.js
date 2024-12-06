const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  file: {
    data: Buffer,
    contentType: String,
    filename: String,
    extension: {
      type: String, // File extension (e.g., '.png', '.jpg', '.pdf')
      required: true,
    },
    name: String  ,
  },
  submitAnonymously: { type: Boolean, required: true },
  addDetails: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
