const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    default: "Point",
    required: true
  },
  coordinates: {
    type: [Number],
    required: true,
    index: '2dsphere'
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

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  review: String,
  rating: Number
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
    maxGuestSize: {
      type: Number,
      default: 25
    },
    rooms: {
      type: Number,
      default: 3
    }
  },
  bathrooms: Number,
  location: {
    streetAddress: String,
    suite: String,
    country: String,
    city: String,
    state: {
      type: String,
      set: v => v.toUpperCase()
    },
    zip: String,
  },
  precise: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      default: [-97.1251805, 33.088988]
      //index: '2dsphere'
    }
  },
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
  },
  reviews: {
    average: Number,
    reviews: [reviewSchema]
  }
});

SpotSchema.index({"precise": "2dsphere"});


Spot = mongoose.model('Spot', SpotSchema);
module.exports = Spot;
