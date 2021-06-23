//import dependencies
const router = require('express').Router();
const { User, Book , Discussion} = require('../models');
const withAuth = require('../utils/auth');


//! Render home page upon hitting the homeroute

router.get('/', async (req,res) => {
    try {
        //const dbUserData = await User.findAll();
        const dbBookData = await Book.findAll();
        const books = dbBookData.map((newBook)=> newBook.get({plain: true})
); 
        //*Placeholder for homepage render via handlebars 
        res.render('homepage', {books, loggedIn: req.session.loggedIn,});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


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



//! Send user to home page if logged in else go to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


//! Send user to signup page route once logged in send home
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});


//! Send user to rating page if logged in
router.get('/rating', withAuth, (req, res) => {
if (!req.session.loggedIn) {
    res.redirect('/');
    return;
}
//*include the loggedIn helper to display logout btn
res.render('ratings', {loggedIn: req.session.loggedIn,});
});


//! Send user to discussion page if logged in else go to login
router.get('/discussion', withAuth, (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('discussion', {loggedIn: req.session.loggedIn,});
});

//! Send user to nextread page if logged in else go to login
router.get('/nextRead', withAuth, (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('next-read', {loggedIn: req.session.loggedIn,});
});


module.exports = router;