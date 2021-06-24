//import dependencies
const router = require('express').Router();
const { User, Book , Discussion} = require('../models');
const withAuth = require('../utils/auth');


//! Render home page upon hitting the homeroute

router.get('/', async (req,res) => {
    try {
        const discussData = await Discussion.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name', 'comment'],
                },
                {
                    model: Book,
                    attributes: ['title', 'author', 'ISBN', 'comment', 'user_id'],
                },
            ]
        });

        const discussions = discussData.map((newDiscussion)=> 
        newDiscussion.get({plain: true}) );

        const dbBookData = await Book.findAll();
        const books = dbBookData.map((newBook)=> 
        newBook.get({plain: true})); 

        //*Placeholder for homepage render via handlebars 
        res.render('homepage', {books, discussions, loggedIn: req.session.loggedIn,});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//! Render book by id upon hitting 
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
router.get('/discussion', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    const discussData = await Discussion.findAll({
        include: [
            {
                model: User,
                attributes: ['name', 'comment'],
            },
            {
                model: Book,
                attributes: ['title', 'author', 'ISBN', 'comment', 'user_id'],
            },
        ]
    });

    const discussions = discussData.map((newDiscussion)=> 
    newDiscussion.get({plain: true}) );
    
    res.render('discussion', {discussions, loggedIn: req.session.loggedIn,});
});

// get one discussion
router.get('/discussion/:id', async (req, res) => {
    try{
        const discussData = await Discussion.findByPk(req.params.id);
        const discussion = discussData.get({plain: true});
        //if no data throw error
        if(!discussion){
            res.status(400);
        };

        res.render('discussion',{...discussion, logged_in: req.session.logged_in
        });

    } catch(err) {
        res.status(500).json(err);
    }
});

//! Send user to nextread page if logged in else go to login
router.get('/pastBooks', withAuth, (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('past-books', {loggedIn: req.session.loggedIn,});
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