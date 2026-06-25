const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Needed for password comparison
const User = require('../models/user.model'); // Import the shared User Model
const jwt = require("jsonwebtoken");

// -------------------------------------------------------------------------
// POST route for /signin
// -------------------------------------------------------------------------
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        const user = await User.findOne({ email });
        console.log("user:",user);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' }); // Use generic message for security
        }

        // SECURE PASSWORD CHECK using bcrypt.compare
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // --- SUCCESS: Update Login Date in MongoDB ---
        const now = new Date();
        // Use $push to add the current date to the lastLogin array
        await User.updateOne(
            { _id: user._id },
            { $push: { lastLogin: now } }
        );
        console.log(`User ${email} logged in successfully and lastLogin updated.`);
        // ---------------------------------------------

        // Respond with success
        const token =
jwt.sign(

{
id:user._id,
email:user.email
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.status(200).json({

message:
'Sign in successful',

token,

user:{
id:user._id,
username:user.username,
email:user.email
}

});

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during authentication.' });
    }
});

module.exports = router;