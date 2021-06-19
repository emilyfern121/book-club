const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

//upon calling the root/home URL serve homeRoutes.js
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

