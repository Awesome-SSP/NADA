// routes/whistleblowerRoutes.js
// const express = require('express');
// const router = express.Router();
// const { createReport, getReports, getReportByCaseId } = require('../controllers/whistleblowerController');
// const authMiddleware = require('../middleware/authMiddleware');

import express from 'express';
import { createReport, getReports, getReportByCaseId } from '../../controllers/whistleblowerController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route for anonymous submission
router.post('/', createReport);

// Protected routes for investigators/admins
router.get('/', authMiddleware, getReports);
router.get('/:caseId', authMiddleware, getReportByCaseId);

// module.exports = router;
export default router;

