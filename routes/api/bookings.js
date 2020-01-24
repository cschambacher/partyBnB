const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Booking = require("../../models/Booking");


router.get("/user/:userId", passport.authenticate("jwt", {session: false}), (req, res) => {
    const userId = req.params.userId;
    Booking
    .where("user", userId)
    .populate("spot")
    .exec((err, booking) => {
        if (err) console.log(err);
        return res.json(booking);
    })
})

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const newBooking = {...req.body, user: req.user.id};
    console.log(req.body);
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
            return res.status(435).json({ message: "Overlapping booking. Spot already booked" })
        } 
        else {
            Booking
            .where("user", newBooking.user)
            .where("spot", newBooking.spot)
            .where("startDate").lte(newBooking.endDate)
            .where("endDate").gte(newBooking.startDate)
            .count((err,count) => {
                if (err) console.log(err);
                if (count > 0){
                    res.statusMessage = "You have already booked this spot";
                    return res.status(436).json({ message: "You already booked this spot." });
                } else {
                    const newBookingModel = new Booking(newBooking);
                    newBookingModel.save((err, booking) => {
                        if (err) console.log(err);
                        booking.populate('spot', (err, populatedBooking) => {
                            if (err) console.log(err);
                            return res.json(populatedBooking);
                        })
                    })
                }
            });

        }
    }).catch(fullError => console.log(fullError));
    //newBooking.save().then(booking => res.json(booking)).catch(error => console.log(error));
}
);

router.get("/:bookingId", (req, res) => {
    Booking.findById(req.params.bookingId)
    .populate('spot')
    .exec((err, booking) => {
        if (err) console.log(err);
        return res.json(booking);
    })
})
module.exports = router;