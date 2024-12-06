const mongoose = require('mongoose');
import  mongoose from 'mongoose';
const trainingResourceSchema = new mongoose.Schema({
    resourceId: String,
    title: String,
    content: String,
    type: String,
});

module.exports = mongoose.model('TrainingResource', trainingResourceSchema);
