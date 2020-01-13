const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Booking = require("../../models/Booking");

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log("banana")
    const newBooking = {...req.body, user: req.user.id};
    // Booking
    // .where("user", newBooking.user)
    // .where("spot", newBooking.spot)
    // .where("startDate" > "endDate" )
    Booking
    .where("user").ne(newBooking.user)
    .where("spot", newBooking.spot)
    .where("startDate").lte(newBooking.endDate)
    .where("endDate").gte(newBooking.startDate)
    .count((err, count) => {
        if (err) console.log(err);
        if (count > 0){
            res.statusMessage = "Spot already booked";
            return res.status(435).json({ statusMessage: "Overlapping booking. Spot already booked" })
        } else {
            const newBookingModel = new Booking(newBooking);
            newBookingModel.save().then(booking => res.json(booking)).catch(error => console.log(error));
        }
    })
    //newBooking.save().then(booking => res.json(booking)).catch(error => console.log(error));
}
);
module.exports = router;