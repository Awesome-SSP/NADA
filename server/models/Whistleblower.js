
import mongoose from 'mongoose';
import crypto from 'crypto';


const whistleblowerSchema = new mongoose.Schema({
  caseId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  sensitiveData: { type: String, required: false }, // Encrypted sensitive information
  followUpToken: { type: String }, // Used for secure follow-ups
  status: { type: String, enum: ['Pending', 'Under Review', 'Resolved'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

// Encrypt sensitive data before saving
whistleblowerSchema.pre('save', function (next) {
  if (!this.isModified('sensitiveData') || !this.sensitiveData) return next();
  const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
  this.sensitiveData = cipher.update(this.sensitiveData, 'utf8', 'hex') + cipher.final('hex');
  next();
});

// Decrypt sensitive data
whistleblowerSchema.methods.decryptSensitiveData = function () {
  const decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
  return decipher.update(this.sensitiveData, 'hex', 'utf8') + decipher.final('utf8');
};

const Whistleblower = mongoose.model('Whistleblower', whistleblowerSchema);
export default Whistleblower;