// const jwt = require('jsonwebtoken');

// // Middleware to check authentication
export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};


// // src/middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// module.exports = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(403).json({ message: 'Unauthorized' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select('-password');
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };



// src/middleware/authMiddleware.js
export const token  = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');
  
      if (!user || !['Admin', 'Investigator'].includes(user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  export default isAuthenticated;