// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { protect, authorize } = require('../middleware/auth');

// User routes
router.post('/', protect, feedbackController.submitFeedback);
router.get('/user', protect, feedbackController.getUserFeedback);

// Admin routes
router.get('/', protect, authorize('admin'), feedbackController.getAllFeedback);
router.put('/:id/status', protect, authorize('admin'), feedbackController.updateFeedbackStatus);

module.exports = router;