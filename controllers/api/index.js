//
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const discussionRoutes = require('./discussionRoutes');

router.use('/users', userRoutes);
router.use('/book', bookRoutes);
router.use('/discussion', discussionRoutes)

module.exports = router;