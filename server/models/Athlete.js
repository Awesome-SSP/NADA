import  mongoose from 'mongoose';

const athleteSchema = new mongoose.Schema({
    athleteId: String,
    name: String,
    biologicalPassport: String,
    medicalRecords: String,
});

const Athlete = mongoose.model('Athlete', athleteSchema);
export default Athlete;