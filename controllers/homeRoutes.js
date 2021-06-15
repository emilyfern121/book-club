//import dependencies
const router = require('express').Router();
const { User } = require('../models/User');

router.get('/', async (req,res) => {
    try {
        //Placeholder for homepage render via handlebars
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});