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

/*
router.get('/book/:id', async (req,res) => {
    try {
        const bookData = await Book.findByPk(req.params.id);
        const book = bookData.get({plain: true});

        res.render('homepage', {
            ...book, 
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
*/

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/ratings', (req, res) => {
if (req.session.loggedIn) {
    res.redirect('/');
    return;
}

res.render('ratings');
});

router.get('/discussion', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('discussion');
  });



module.exports = router;