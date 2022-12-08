const express = require('express')
const profileRouter = express.Router()
const Profile = require('../models/profile.js')

//post
//put
//delete
//get
profileRouter.post('/add', (req,res, next)=>{
    req.body.user = req.auth._id
const updatedProfile = new Profile(req.body)
updatedProfile.save( (err, newProfileItems)=>{
res.send(newProfileItems)
})
})

profileRouter.get('/', (req,res, next)=>{
Profile.find({user:req.auth._id}, (err, profileItems)=>{
if(err){
    res.status(500)
    return next(err)
}
res.send(profileItems)
})
})

profileRouter.put('/update/:profileId', (req,res,next)=>{
    console.log(req.params.profileId)
    Profile.findOneAndUpdate({user:req.auth._id, _id:req.params.profileId}, req.body, {new:true}, (err, updatedProfile)=>{
if(err){
    res.status(500)
    return next(err)
}
res.send(updatedProfile)
    })
})



module.exports = profileRouter