// src/routes/investigationRoutes.js
// const express = require('express');
import express from 'express';
const router = express.Router();
import { createInvestigation, getInvestigations } from '../../controllers/investigationController.js';
import authMiddleware from '../middleware/authMiddleware.js';

router.post('/', authMiddleware, createInvestigation);
router.get('/', authMiddleware, getInvestigations);

// module.exports = router;

export default router;