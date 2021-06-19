//dependecies for route and user model
const router = require('express').Router();
const { User } = require('../../models');

/*
router.get('/', async (req, res) =>{
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            order: [['name', 'ASC']],
        }).catch((err) => {
            res.json(err);
        });//end of error catch will display err to page if no data found
        
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});
*/

/**
 * !Creates a mew user
 */
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


/**
 * install better comments plugin
 * !Pulling in login data from login.handlebars
 */

router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }//end of !validPassword function
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  