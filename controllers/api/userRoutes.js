//
const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) =>{
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.isSoftDeleted;
            req.session.logged_in = true;
        
            res.status(200).json(userData);
        });//end save function
        
    } catch (err) {
        res.status(400).json(err);
    }
});