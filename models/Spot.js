const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const citySchema = new Schema({
  name: String,
  location: {
    type: pointSchema,
    required: true
  }
});

const houseRulesSchema = new Schema({
  childFriendly: Boolean,
  babyFriendly: Boolean,
  petFriendly: Boolean,
  smokingAllowed: Boolean,
  additionalRules: [String],
  detailsGuestsMustKnow: String
});

const placeTypeSchema = new Schema({
  placeType: String,
  propertyType: String,
  whatWillGuestsHave: String,
  dedicatedGuestSpace: Boolean,
  listingForOtherCompany: Boolean
});

const locationSchema = new Schema({
  streetAddress: String,
  suite: String,
  country: String,
  city: String,
  state: String,
  zip: String,
  point: pointSchema
});

const SpotSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  published: {
      type: Boolean,
      default: false
  },
  placeType: placeTypeSchema,
  capacity: {
    maxGuestSize: Number,
    rooms: Number
  },
  bathrooms: Number,
  location: locationSchema,
  amenities: {
    regular: [String],
    safety: [String]
  },
  sharedSpaces: [String],
  imageUrl: String,
  description: {
    description: String,
    hostAvailablity: String,
    spaceDetails: String,
    neighborhood: String,
    transportation: String
  },
  title: String,
  mobileNumber: String,
  houseRules: houseRulesSchema,
  preference: {
    rentedLocationBefore: Boolean,
    howOftenGuests: String
  },
  notice: {
    guestNoticeTime: Number,
    checkInTime: Date
  },
  advance: Number,
  lengthOfStay: {
    min: Number,
    max: Number
  },
  price: {
    basePrice: Number,
    minPrice: Number,
    maxPrice: Number
  }
});



module.exports = Spot = mongoose.model('Spot', SpotSchema);
