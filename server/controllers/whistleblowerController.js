/**
submitReport: Accepts an encrypted report from a whistleblower.
getReports: Allows authorized users to view whistleblower reports anonymously.
 */

// controllers/whistleblowerController.js
import  WhistleblowerReport from '../models/Whistleblower.js';

export const createReport = async (req, res) => {
  const { title, description, sensitiveData } = req.body;
  try {
    const caseId = `WB-${Date.now()}`;
    const followUpToken = `TOKEN-${crypto.randomBytes(16).toString('hex')}`;
    
    const report = await WhistleblowerReport.create({
      caseId,
      title,
      description,
      sensitiveData,
      followUpToken
    });

    res.status(201).json({
      message: 'Report submitted successfully',
      caseId,
      followUpToken
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await WhistleblowerReport.find().select('-sensitiveData');
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReportByCaseId = async (req, res) => {
  const { caseId } = req.params;
  const { token } = req.query;

  try {
    const report = await WhistleblowerReport.findOne({ caseId });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    // Validate follow-up token
    if (token !== report.followUpToken) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    const decryptedSensitiveData = report.decryptSensitiveData();
    res.status(200).json({ ...report._doc, sensitiveData: decryptedSensitiveData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default createReport
