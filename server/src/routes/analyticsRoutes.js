// const express = require('express');
// const analyticsController = require('../../controllers/analyticsController');

import express from "express";
import analyticsController from "../../controllers/analyticsController.js";

const router = express.Router();

router.get("/anomalies", analyticsController.detectAnomalies);
router.get("/report", analyticsController.generateReport);
router.get("/visualization", analyticsController.visualizeData);
router.get("/predict", analyticsController.predictRiskScore);
// router.get('/visualize', analyticsController.getVisualizationData);

// module.exports = router;
export default router;
