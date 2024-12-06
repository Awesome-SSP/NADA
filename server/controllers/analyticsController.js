/** 
predictRiskScore: Uses AI/ML services to predict doping risk scores.
getVisualizationData: Fetches data visualization (e.g., patterns, trends) for case analysis.
 */

/**
detectAnomalies: This function scans test results and filters for anomalies, such as results marked as "positive" or those above a certain threshold. The criteria for "anomaly" can be modified as needed.

generateReport: Fetches cases, including evidence and investigator information, and generates a report with details like the number of evidence items and investigator names. This data can be used for further analysis or exported for reporting.

visualizeData: Collects summary statistics, such as the number of athletes and the ratio of positive doping test results, and prepares data suitable for visualization, providing insights into data trends.
 */

// controllers/AnalyticsController.js

//------------------------------------------------------------------
// const TestResult = require('../models/TestResult');
// const Athlete = require('../models/Athlete');
// const Case = require('../models/Case');
import TestResult from "../models/TestResult.js";
import Athlete from "../models/Athlete.js";
import Case from "../models/Case.js";
//---------------------------------------------------------------------

const analyticsController = {
  // Detect anomalies in athlete data
  detectAnomalies: async (req, res) => {
    try {
      const results = await TestResult.find();
      const anomalies = results.filter((result) => {
        // Define criteria for anomalies (e.g., unusually high results)
        return result.result === "positive" || result.value > certainThreshold;
      });
      res.status(200).json({ anomalies });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to detect anomalies", details: error });
    }
  },
  //-------------------------------------------------------------------------------------------------------------
  // Generate case reports based on case status and evidence
  generateReport: async (req, res) => {
    try {
      const cases = await Case.find().populate("evidence assignedInvestigator");
      const reportData = cases.map((caseData) => ({
        caseId: caseData.caseId,
        status: caseData.status,
        evidenceCount: caseData.evidence.length,
        investigator: caseData.assignedInvestigator.name,
      }));
      res.status(200).json({ report: reportData });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to generate report", details: error });
    }
  },
  //---------------------------------------------------------------------------------------------------
  // Visualize data trends for investigation (e.g., test result distribution)
  visualizeData: async (req, res) => {
    try {
      const athletes = await Athlete.find();
      const positiveResults = await TestResult.countDocuments({
        result: "positive",
      });
      const totalResults = await TestResult.countDocuments();

      const visualizationData = {
        athleteCount: athletes.length,
        positiveResultRatio: (positiveResults / totalResults) * 100,
      };

      res.status(200).json({ visualization: visualizationData });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to visualize data", details: error });
    }
  },

  //---------------------------------------------------------------------------------------------
  predictRiskScore: async (req, res) => {
    try {
      const { athleteId } = req.body;

      // Find athlete
      const athlete = await Athlete.findById(athleteId);
      if (!athlete) {
        return res.status(404).json({ message: "Athlete not found" });
      }

      // Fetch test results
      const testResults = await TestResult.find({ athleteId });
      if (!testResults || testResults.length === 0) {
        return res
          .status(404)
          .json({ message: "No test results found for the athlete" });
      }

      // Calculate risk score based on some criteria (this is just a sample calculation)
      const totalScore = testResults.reduce(
        (acc, result) => acc + result.score,
        0
      );
      const riskScore = totalScore / testResults.length;

      res.status(200).json({ athleteId, riskScore });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Server Error" });
    }
  },
};

export default analyticsController;
