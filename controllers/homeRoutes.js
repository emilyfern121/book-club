//import dependencies
const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req,res) => {
    try {
        const dbUserData = await User.findAll();
        //Placeholder for homepage render via handlebars
        res.render('homepage', { dbUserData });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;