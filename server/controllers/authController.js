/*
login: Authenticates users, generates JWTs based on roles.
register: Registers new investigators and assigns roles.
*/



// controllers/authController.js
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
import User from '../models/User.js';
import jwt from 'jsonwebtoken';


const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your secret key

export const authController = {

    // Register a new user
    register: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = new User({ email, password });
            await user.save();
            res.status(201).json({ message: 'User registered successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Registration failed', details: error });
        }
    },

    // Login a user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

            // Set token as a cookie
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ error: 'Login failed', details: error });
        }
    },

    // Logout a user
    logout: (req, res) => {
        res.clearCookie('token'); // Clear the token cookie
        res.status(200).json({ message: 'Logout successful' });
    },

    // Middleware to authenticate users
    authenticate: (req, res, next) => {
        const token = req.cookies.token || req.headers['authorization'];
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    },
};


// Mock user data (replace with database query in a real app)
const mockUser = {
    id: 1,
    username: 'testuser',
    password: 'password123', // Use hashed passwords in production!
};

// Login logic
export const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Simple user validation (replace with DB lookup in production)
    if (username !== mockUser.username || password !== mockUser.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: mockUser.id, username: mockUser.username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Send token as HTTP-only cookie
    res.cookie('token', token, {
        expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000),
        httpOnly: true,
    });

    res.status(200).json({ success: true, token, message: 'Logged in successfully' });
};

// Protected route logic
export const getProtectedData = (req, res) => {
    res.status(200).json({ success: true, message: 'Accessed protected route', user: req.user });
};



