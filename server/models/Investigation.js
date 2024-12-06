// src/models/Investigation.js
// const mongoose = require('mongoose');
import mongoose from  'mongoose';
const investigationSchema = new mongoose.Schema({
  caseId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  evidence: [String],
  createdAt: { type: Date, default: Date.now }
});

// module.exports = mongoose.model('Investigation', investigationSchema);
const Investigation = mongoose.model('Investigation', investigationSchema);

export default Investigation;