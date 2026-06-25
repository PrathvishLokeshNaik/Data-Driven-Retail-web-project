const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/', async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'Missing required fields.'
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: 'Password must be at least 6 characters long.'
        });
    }

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'User with this email already exists.'
            });
        }

        const newUser = new User({
            username,
            email,
            password,
            lastLogin: []
        });

        const savedUser = await newUser.save();

        console.log(
            'User successfully registered:',
            savedUser.email
        );

        return res.status(201).json({
            message: 'User successfully registered.',
            user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email
            }
        });

    } catch (error) {

        console.error('Signup Error:', error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: 'Email or Username already exists.'
            });
        }

        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

module.exports = router;