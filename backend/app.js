require('dotenv').config();
const connectDB = require('./config/connect');

const express = require('express');
const app = express();
const cors = require('cors'); // <-- 1. IMPORT CORS

const authRoutes = require('./routes/authRoutes');

// --- MIDDLEWARE ---
app.use(cors()); // <-- 2. USE CORS MIDDLEWARE (must be before routes)
app.use(express.json());

// --- ROUTES ---
// A simple "health check" route to test the connection
app.get('/', (req, res) => { // <-- 3. ADD A TEST ROUTE
  res.send('Backend is running and CORS is enabled!');
});
// Use auth routes
app.use('/api/auth', authRoutes);

// --- ERROR HANDLERS ---
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// --- SERVER START ---
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URI);
    // No need for a separate console log here, your start message is enough
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
