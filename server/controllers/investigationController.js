// src/controllers/investigationController.js
import Investigation from '../models/Investigation.js';

export const createInvestigation = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    const investigation = await Investigation.create({
      caseId: `INV-${Date.now()}`,
      title,
      description,
      assignedTo
    });
    res.status(201).json(investigation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getInvestigations = async (req, res) => {
  try {
    const investigations = await Investigation.find().populate('assignedTo', 'name email');
    res.status(200).json(investigations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default createInvestigation;