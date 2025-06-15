const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.post('/signin', async(req, res)=>{
    const {username, password} = req.body
    const usernameExisting = await User.findOne({username})

    if(!usernameExisting){
        return res.status(400).json({message : "Cordonnées Incorrect"})
    }
    if(password !== usernameExisting.password){
        return res.status(400).json({message : "Cordonnées Incorrect"})
    }
    const authClaims = [{name : username}, {jti : jwt.sign({}, 'MDuo')}]
    const token = jwt.sign({authClaims}, 'MDuo', {expiresIn : "2d"})
    return res.status(200).json({id : usernameExisting._id, token : token})
})
module.exports = router