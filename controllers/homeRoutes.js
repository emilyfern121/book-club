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

/**
 *! Send user to home page if logged in else go to login
 */
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

/**
 *! Send user to rating page if logged in
*/
router.get('/rating', withAuth, (req, res) => {
if (req.session.loggedIn) {
    res.redirect('/');
    return;
}

res.render('ratings');
});

/**
 *! Send user to discussion page if logged in
 */
router.get('/discussion', withAuth, (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('discussion');
  });



module.exports = router;