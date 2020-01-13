const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    },
    startDate: Date,
    endDate: Date,
    guests: Number,
    price: Number
});

module.exports = Booking = mongoose.model("Booking", BookingSchema);