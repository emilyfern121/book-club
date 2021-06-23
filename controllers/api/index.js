//
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const discussionRoutes = require('./discussionRoutes');

router.use('/users', userRoutes);
//router.use('/books', bookRoutes);
//router.use(/discussions, discussionRoutes)

module.exports = router;