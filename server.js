require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');

const port = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main API Routes setup
app.use('/api', registrationRoutes);

// Base route test endpoint
app.get('/', (req, res) => {
    res.send('Event Registration Backend API is running properly...');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
