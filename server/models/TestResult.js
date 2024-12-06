// const mongoose = require('mongoose');
import  mongoose from 'mongoose';
const testResultSchema = new mongoose.Schema({
    resultId: String,
    athleteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' },
    testDate: Date,
    result: String,
    labDetails: String,
});

const TestResult = mongoose.model('TestResult', testResultSchema);
export default TestResult;