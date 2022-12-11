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

trackerRouter.put('/update/:trackerId', (req, res, next)=>{
Tracker.findOneAndUpdate({user:req.auth._id, _id:req.params.trackerId}, req.body, {new:true}, (err, updatedItem)=>{
if(err)
{res.status(500)
return (next(err))
}
res.send(updatedItem)

})
})

trackerRouter.delete('/delete/:trackerId', (req, res, next)=>{
const trackerId = req.params.trackerId
    Tracker.findOneAndDelete({user:req.auth._id, _id:trackerId}, (err, deletedItem)=>{
if(err){
    res.status(500)
    return next(err)
}
if(!deletedItem){
    res.status(403)
    return next(new Error("Tracker ID does not Exist"))
}
res.send(`${trackerId} has been deleted`)

}
)
})

module.exports = trackerRouter