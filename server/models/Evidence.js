const mongoose = require('mongoose');
import  mongoose from 'mongoose';
const evidenceSchema = new mongoose.Schema({
    evidenceId: String,
    caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
    description: String,
    type: String,
    source: String,
});

module.exports = mongoose.model('Evidence', evidenceSchema);
