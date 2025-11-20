const express = require('express');
const router = express.Router(); // Use Express Router for modular routes
const User = require('../models/user.model'); // Import the shared User Model

// -------------------------------------------------------------------------
// POST route for /signup
// -------------------------------------------------------------------------
router.post('/signup', async (req, res) => { // Route is simply '/' because we mount it in server.js
    const { username, email, password } = req.body;

    // Server-Side Validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email already exists.' });
        }

        // Create the new user instance (password is hashed automatically by user.model.js pre-save hook)
        const newUser = new User({
            username,
            email,
            password, // Mongoose will hash this before saving!
            lastLogin: [] // Initialize array for sign-in logic
        });
        
        // Save the new user record to MongoDB
        await newUser.save();

        console.log('User successfully registered:', savedUser.email);

        // Send Success Response (excluding the password)
        const userResponse = { 
            id: savedUser._id, 
            username: savedUser.username, 
            email: savedUser.email 
        };
        
        return res.status(201).json({ 
            message: 'User successfully registered.',
            user: userResponse,
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        if (error.code === 11000) { // MongoDB duplicate key error (for unique fields)
            return res.status(409).json({ message: 'Email or Username is already taken.' });
        }
        return res.status(500).json({ message: 'An internal server error occurred.' });
    }
});

module.exports = router;