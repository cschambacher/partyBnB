const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const ReviewSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Reviews", ReviewSchema)