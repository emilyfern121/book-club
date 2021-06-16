//
const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) =>{
    try {
        const userData = await User.create(req.body);
    } catch (error) {
        
    }
})