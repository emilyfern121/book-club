//import dependencies
const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const dbUserData = await User.findAll();
        //Placeholder for homepage render via handlebars
        res.render('homepage', { dbUserData });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/book/:id', async (req,res) => {
    try {
        const bookData = await Book.findByPk(req.params.id);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;