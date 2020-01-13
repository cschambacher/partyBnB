const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Booking = require("../../models/Booking");

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log("banana")
    const newBooking = req.body;
    // Booking
    // .where("user", newBooking.user)
    // .where("spot", newBooking.spot)
    // .where("startDate" > "endDate" )
    newBooking.save().then(booking => res.json(booking)).catch(error => console.log(error));
}
);
module.exports = router;