const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')



//signup
authRouter.post('/signup', (req,res,next)=>{   
User.findOne({username:req.body.username.toLowerCase()}, (err, foundUsername)=>{
    if(err){
        res.status(500)
        return next(err)
    } 
    if(foundUsername){
        res.status(403)
        return next(new Error("Username or password already exists"))
    }
    const newUser = new User(req.body)     
    newUser.save((err, savedUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }

        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET, )
     res.send({user:savedUser.withoutPassword(), token:token})
    }) 
})
})
//login  still need password check logic
authRouter.post('/login', (req, res, next)=>{
    User.findOne({username:req.body.username}, (err, foundUser)=>{
if(!foundUser){
    res.status(403)
    return next(new Error("Username or password is incorrect"))
}
foundUser.checkPassword(req.body.password, (err, isMatch)=>{

if(err){
res.status(403)
return next(err)}
if(!isMatch){
    res.status(403)
    return next(new Error("Username or password is incorrect"))
}
const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
res.send({user:foundUser.withoutPassword(), token:token})
})
    })
})

module.exports = authRouter