// backend/controllers/authController.js

const User = require('../models/user');
const jwt = require('jsonwebtoken');
// --- CHANGE: Import UnauthenticatedError if you weren't already ---
const UnauthenticatedError = require('../errors/unauthenticated'); 

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// ... your signup controller is fine ...
exports.signup = async (req, res, next) => {
  // ... no changes needed here ...
};


// Signin controller
exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      // --- CHANGE: Use UnauthenticatedError for a 401 status ---
      return next(new UnauthenticatedError('Invalid email or password'));
    }
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      // --- CHANGE: Use UnauthenticatedError for a 401 status ---
      return next(new UnauthenticatedError('Invalid email or password'));
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    next(error);
  }
};
