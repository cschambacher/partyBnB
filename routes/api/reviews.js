const express = require("express")
const router = express.Router()
const Review = require("../../models/Review")
const passport = require("passport");
const jwt = require("jsonwebtoken");


router.get("/spots/:spotId", (req, res) => {
    Review.find({ spotId: req.params.spotId })
        .then(reviews => res.json(reviews))
        .catch(error => console.log(error))
})

router.post("/create", passport.authenticate("jwt", {session: false}), (req, res) => {
    const review = new Review({
        user: req.body.id,
        rating: req.body.rating,
        comment: req.body.comment
    })
    review.save().then(review => res.json(review))
        .catch(error => console.log(error));

})

router.get("/:reviewId", (req, res) => {
    Review.findById(req.params.reviewId)
        .then(review => res.json(review))
        .catch(error => console.log(error))

})

// router.patch("/:reviewId", (req, res) => {

// })

router.delete("/:reviewId", (req, res) => {
    Review.remove({ _id: req.params.reviewId })
        .then(removePost => res.json(removePost))
        .catch(error => console.log(error))
})

module.exports = router;