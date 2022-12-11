const express = require('express')
const tracker = require('../models/tracker.js')
const trackerRouter = express.Router()
const Tracker = require('../models/tracker.js')


trackerRouter.post('/add', (req,res, next)=>{
    req.body.user = req.auth._id
const newTracker = new Tracker(req.body)
newTracker.save((err, savedItem)=>{
if(err)
{res.status(500)
return next(err)}
res.send(savedItem)
})
})

trackerRouter.get('/', (req, res, next)=>{
Tracker.find({user:req.auth._id}, (err, foundItems)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    res.send(foundItems)
    })
})

module.exports = trackerRouter