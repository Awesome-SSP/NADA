import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


import errorHandler  from "./src/utils/errorHandler.js";
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

/** CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Use the error handler as the last middleware
app.use(errorHandler);

//------------------------------------------------------------------------------
// const authRoutes = require('./src/routes/authRoutes');
// const connectDB = require('./config/database');
// const investigationRoutes = require('./src/routes/investigationRoutes');
// const whistleblowerRoutes = require('./routes/whistleblowerRoutes');

import authRoutes from "./src/routes/authRoutes.js";
import connectDB from "./config/database.js";
import investigationRoutes from "./src/routes/investigationRoutes.js";
import whistleblowerRoutes from "./src/routes/whistleblowerRoutes.js";
import caseRoutes from "./src/routes/caseRoutes.js";
import analyticsRoutes from "./src/routes/analyticsRoutes.js"
import reports from "./src/routes/reports.js"
//------------------------------------------------------------------------------

// const caseRoutes = require('./src/routes/caseRoutes');
// const analyticsRoutes = require('./src/routes/analyticsRoutes');

//----------------------------------------------------------------------------

connectDB();

/** ROUTES */
app.use("/auth", authRoutes);
app.use("/investigations", investigationRoutes);
app.use("/whistleblowers", whistleblowerRoutes);
app.use("/cases", caseRoutes);
app.use('/analytics', analyticsRoutes);
app.use("/api",reports);
// app.use("/files",fileLists)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//----------------------------------------------------------------------------

// // Database connection
// const URI = 'mongodb://localhost:27017/authExample'
// mongoose.connect((URI),
// {
//     useNewUrlParser: true, useUnifiedTopology: true
// })
//     .then(() => console.log('Database connected'))
//     .catch((err) => console.error('Database connection error:', err));





// // Start server
// const PORT =  5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
