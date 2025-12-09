const express = require('express');
const router = express.Router();
const { authenticateToken, asyncHandler } = require('./middleware/auth');
const User = require('./models/user');

/**
 * @route   GET /api/users/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/users/me', authenticateToken, asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    success: true,
    data: user
  });
}));

/**
 * @route   PUT /api/users/me
 * @desc    Update current user profile
 * @access  Private
 */
router.put('/users/me', authenticateToken, asyncHandler(async (req, res) => {
  const { name, avatar } = req.body;
  
  const user = await User.findByIdAndUpdate(
    req.user.userId,
    { name, avatar, updatedAt: Date.now() },
    { new: true, runValidators: true }
  ).select('-password');

  res.json({
    success: true,
    data: user
  });
}));

/**
 * @route   GET /api/users
 * @desc    Get all users (admin only)
 * @access  Private/Admin
 */
router.get('/users', authenticateToken, asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find()
    .select('-password')
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await User.countDocuments();

  res.json({
    success: true,
    data: users,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
}));

module.exports = router;

