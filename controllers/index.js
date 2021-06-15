const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

//upon calling the root/home URL serve homeRoutes.js
router.use('/', homeRoutes);

module.exports = router;

