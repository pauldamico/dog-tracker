const express = require("express");
const Bathroom = require("../models/bathroom.js");
const Treats = require("../models/treats.js");
const trackerRouter = express.Router();
const Tracker = require("../models/tracker.js");
const date = new Date();
const todaysDate = `${
  date.getMonth() + 1
} ${date.getDate()} ${date.getFullYear()}`;

trackerRouter.post("/add", (req, res, next) => {
  Tracker.find({ user: req.auth._id, date: todaysDate }, (err, foundItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (foundItem[0]) {
      res.status(403);
      return next(new Error("Todays tracker already exist"));
    }
    if (!foundItem[0]) {
      req.body.user = req.auth._id;
      const newTracker = new Tracker(req.body);
      newTracker.save((err, savedItem) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        res.send(savedItem);
      });
    }
  });
});

trackerRouter.post("/add/bathroom/:timeId", (req, res, next) => {
  Tracker.find(
    { user: req.auth._id, _id: req.params.timeId },
    (err, foundItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (foundItem) {
        Tracker.findOneAndUpdate(
          { user: req.auth._id, _id: req.params.timeId },
          { $set: { bathroomAM: [], bathroomPM: [] } },
          { new: true },
          (err, item) => {
            console.log(item);

            Tracker.findOneAndUpdate(
              { user: req.auth._id, _id: req.params.timeId },
              {
                $push: {
                  bathroomAM: req.body.bathroomAM,
                  bathroomPM: req.body.bathroomPM,
                },
              },
              { new: true },
              (err, updatedItem) => {
                if (err) {
                  res.status(500);
                  return next(err);
                }

                res.send({
                  bathroomAM: [updatedItem.bathroomAM],
                  bathroomPM: [updatedItem.bathroomPM],
                });
              }
            );
          }
        );
      }
    }
  );
});

trackerRouter.get("/", (req, res, next) => {
  Tracker.find({ user: req.auth._id }, (err, foundItems) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.send(foundItems);
  });
});

trackerRouter.put("/update/:trackerId", (req, res, next) => {
  Tracker.findOneAndUpdate(
    { user: req.auth._id, _id: req.params.trackerId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      res.send(updatedItem);
    }
  );
});

// trackerRouter.put('/updateTime/:trackerId', (req, res, next)=>{
//     Tracker.find({user:req.auth._id, _id:req.params.trackerId}, req.body, {new:true}, (err, updatedItem)=>{
//     if(err)
//     {res.status(500)
//     return (next(err))
//     }
//     if(updatedItem){
//         console.log(req.body)
//        Tracker.updateOne({_id:req.params.trackerId}, {$set:{[req.body]:req.body.selected}}, (err, updated)=>{
// res.send(updated)
//        })

//     }
//     })
//     })

trackerRouter.put("/updateTimeBathAM/:timeId", (req, res, next) => {
  const value = req.body.selected;
  const timeId = req.params.timeId;
  Tracker.find(
    { user: req.auth._id, "bathroomAM._id": timeId },
    (err, foundItem) => {
      Tracker.findOneAndUpdate(
        { user: req.auth._id, "bathroomAM._id": timeId },
        { $set: { "bathroomAM.$.selected": value } },
        (err, updatedItem) => {
          res.send(updatedItem);
        }
      );
      if (err) {
        res.status(500);
        return next(err);
      }
    }
  );
});

trackerRouter.put("/updateTimeBathPM/:timeId", (req, res, next) => {
  const value = req.body.selected;
  const timeId = req.params.timeId;
  Tracker.find(
    { user: req.auth._id, "bathroomPM._id": timeId },
    (err, foundItem) => {
      Tracker.findOneAndUpdate(
        { user: req.auth._id, "bathroomPM._id": timeId },
        { $set: { "bathroomPM.$.selected": value } },
        (err, updatedItem) => {
          res.send(updatedItem);
        }
      );
      if (err) {
        res.status(500);
        return next(err);
      }
    }
  );
});

trackerRouter.put("/updateTimeTreatsAM/:timeId", (req, res, next) => {
  const value = req.body.selected;
  const timeId = req.params.timeId;
  Tracker.find(
    { user: req.auth._id, "treatsAM._id": timeId },
    (err, foundItem) => {
      Tracker.findOneAndUpdate(
        { user: req.auth._id, "treatsAM._id": timeId },
        { $set: { "treatsAM.$.selected": value } },
        (err, updatedItem) => {
          res.send(updatedItem);
        }
      );
      if (err) {
        res.status(500);
        return next(err);
      }
    }
  );
});

trackerRouter.put("/updateTimeTreatsPM/:timeId", (req, res, next) => {
  const value = req.body.selected;
  const timeId = req.params.timeId;
  Tracker.find(
    { user: req.auth._id, "treatsPM._id": timeId },
    (err, foundItem) => {
      Tracker.findOneAndUpdate(
        { user: req.auth._id, "treatsPM._id": timeId },
        { $set: { "treatsPM.$.selected": value } },
        (err, updatedItem) => {
          res.send(updatedItem);
        }
      );
      if (err) {
        res.status(500);
        return next(err);
      }
    }
  );
});

trackerRouter.delete("/delete/:trackerId", (req, res, next) => {
  const trackerId = req.params.trackerId;
  Tracker.findOneAndDelete(
    { user: req.auth._id, _id: trackerId },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!deletedItem) {
        res.status(403);
        return next(new Error("Tracker ID does not Exist"));
      }
      res.send(`${trackerId} has been deleted`);
    }
  );
});

trackerRouter.post("/add/time/:timeId", (req, res, next) => {
  Tracker.find(
    { _id: req.params.timeId, user: req.auth._id },
    (err, locatedItem) => {
      if (!locatedItem) {
        res.status(500);
        return next(err);
      }
      Tracker.find(
        { bathroomAM: { $eleMatch: { $eq: { id: req.body.id } } } },
        (err, itemExist) => {
          console.log(itemExist);
          if (!itemExist) {
            console.log(itemExist);
            if (locatedItem) {
              Tracker.findOneAndUpdate(
                { _id: req.params.timeId },
                { $push: { bathroomAM: req.body } },
                { new: true },
                (err, foundItem) => {
                  if (err) {
                    res.status(500);
                    return next(err);
                  }

                  if (foundItem === req.body) {
                  }
                }
              );
            }
          }
          if (!itemExist) {
            res.status(403);
            return next(new Error("Already Exist"));
          }
        }
      );
    }
  );
});

module.exports = trackerRouter;
