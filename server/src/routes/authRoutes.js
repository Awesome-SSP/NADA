// const express = require('express');
// const authController = require('../../controllers/authController');
// const { loginUser, getProtectedData } = require('../../controllers/authController');
// const { isAuthenticated } = require('../middleware/authMiddleware.js');
// const path = require('path');
// const router = express.Router();

//------------ES6--------------
import express from 'express';
import * as authController from '../../controllers/authController.js';
// import { loginUser, getProtectedData } from '../../controllers/authController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import path from 'path';

const router = express.Router();


//---------------------
// const { register, login } = require('../../controllers/authController');

router.post('/register', authController.authController.register);
router.post('/login', authController.authController.login);
//-----------------------



// Public route: Login
router.post('/login', authController.loginUser);

// Protected route: Only accessible with valid JWT
router.get('/protected', isAuthenticated, authController.getProtectedData);

// module.exports = router;
// Ensure this path is correct according to your file structure




//const authController = require(path.join(__dirname, '../controllers/authController'));



// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.post('/register', authController.register);

export default router;