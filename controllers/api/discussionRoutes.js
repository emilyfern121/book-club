//dependecies for route and discussion model
const router = require('express').Router();
const { Discussion } = require('../../models');
const withAuth = require('../../utils/auth');
//Create new Discussion 
router.post('/', withAuth, async (req, res) => {
    try {
      const newDiscussion = await Discussion.create({
        //...req.body,
        user_id: req.session.user_id,
        name: req.body.username_text,
        user_comment: req.body.comment_text,
      });
  
      res.status(200).json(newDiscussion);
    } catch (err) {
      res.status(400).json(err);
    }
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

module.exports = router;