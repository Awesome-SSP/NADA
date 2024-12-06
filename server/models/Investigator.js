const mongoose = require('mongoose');
import  mongoose from 'mongoose';
const investigatorSchema = new mongoose.Schema({
    investigatorId: String,
    name: String,
    role: String,
    contactInfo: String,
});

module.exports = mongoose.model('Investigator', investigatorSchema);
