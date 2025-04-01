const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// Routes will be implemented based on sales functionality
router.get('/', protect, (req, res) => {
  res.json({ message: 'Sales routes to be implemented' });
});

module.exports = router; 