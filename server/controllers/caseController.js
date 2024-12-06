/**
createCase: Adds a new case for an athlete, assigns it to investigators.
updateCase: Updates case status, adds investigator comments, and attaches evidence.
deleteCase: Deletes a case if no longer needed.
getCaseDetails: Retrieves case details with linked data and evidence.
 */



// controllers/caseController.js
import  Case from '../models/Case.js';
import Athlete from '../models/Athlete.js';
import { validationResult } from 'express-validator';

// Create a new case
export const createCase = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { athleteId, initialEvidence, assignedInvestigator } = req.body;

        // Verify athlete exists
        const athlete = await Athlete.findById(athleteId);
        if (!athlete) return res.status(404).json({ message: "Athlete not found" });

        // Create the case
        const newCase = new Case({
            athlete: athleteId,
            evidence: initialEvidence,
            assigned_investigator: assignedInvestigator,
            status: 'Open'
        });

        await newCase.save();
        res.status(201).json({ message: "Case created successfully", case: newCase });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// Retrieve details for a specific case
export const getCaseDetails = async (req, res) => {
    try {
        const caseId = req.params.id;
        const caseDetails = await Case.findById(caseId).populate('athlete').populate('assigned_investigator');

        if (!caseDetails) return res.status(404).json({ message: "Case not found" });

        res.status(200).json(caseDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// delte case require logicss
export const deleteCase = async (req, res) => {
    try {
        const caseId = req.params.id;
        const caseDetails = await Case.findById(caseId).populate('athlete').populate('assigned_investigator');

        if (!caseDetails) return res.status(404).json({ message: "Case not found" });

        res.status(200).json(caseDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// Retrieve update cse logic required
export const updateCase = async (req, res) => {
    try {
        const caseId = req.params.id;
        const caseDetails = await Case.findById(caseId).populate('athlete').populate('assigned_investigator');

        if (!caseDetails) return res.status(404).json({ message: "Case not found" });

        res.status(200).json(caseDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};


export default createCase;