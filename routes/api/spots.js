const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Spot = require("../../models/Spot");

router.get("/", (req, res) => {
  Spot.find({published: true})
    .populate('user', 'email')
    .sort({ created_at: -1 })
    .then(spots => res.json(spots))
    .catch(err => res.status(404).json({ nospotsfound: "No spots found" }));
});

router.get("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => res.json(spot))
    .catch(err =>
      res.status(404).json({ nospotsfound: "No spot found with that ID" })
    );
});

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    //const { errors, isValid } = validateSpotInput(req.body);

//    if (!isValid) {
//      return res.status(400).json(errors);
//    }

    const newSpot = req.body ? new Spot(req.body) : new Spot({
      user: req.user.id //req.user is accessed through passport
    });

    //console.log(req.body.placeType);

    newSpot.markModified('placeType');

    newSpot.save().then(spot => res.json(spot)).catch(error => console.log(error));
  }
);

router.patch("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
  Spot.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, newSpot) => {
            if (err) {
                console.log(err);
                return res
                  .status(404)
                  .json({ error: "There was an error with the update", err });
          } else return res.json(newSpot);
        });
    }
);

module.exports = router;

