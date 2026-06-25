const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Needed for test user setup
const app = express();
const port = process.env.PORT || 3000;
const locationRouter = require("./routes/location");

// IMPORT ROUTE MODULES
const signInRouter = require('./middleware/signin');
const signUpRouter = require('./middleware/signup');
const User = require('./models/user.model'); // Import the model for test setup


require("dotenv").config();
const SALT_ROUNDS = 10; // Used for initial test user creation

// Middleware and Connection Setup
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/api/location",locationRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connection successful!');
        setupTestUser(); // Setup test user only after DB connection
    })
    .catch(err => console.error('MongoDB connection error:', err.message));

// --- Test User Setup (For development only) ---
async function setupTestUser() {
    const testEmail = 'test@user.com';
    const testPassword = 'password123'; 
    const testUsername = 'testuser';

    try {
        const existingUser = await User.findOne({ email: testEmail });
        if (!existingUser) {
            // Hash the password manually for initial creation
            const hashedPassword = await bcrypt.hash(testPassword, SALT_ROUNDS); 

            const newUser = new User({ 
                username: testUsername,
                email: testEmail, 
                password: hashedPassword, 
                lastLogin: []
            });
            await newUser.save();
            console.log(`Test user created: ${testEmail}`);
        } else {
            console.log(`Test user already exists: ${testEmail}`);
        }
    } catch (error) {
        console.error('Error setting up test user:', error.message);
    }
}

// -------------------------------------------------------------------------
// MOUNT THE ROUTERS
// -------------------------------------------------------------------------
app.use('/api/auth/signin', signInRouter);

app.use('/api/auth/signup', signUpRouter);


// Start the server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});