const express = require("express");
const router = express.Router();
const Spot = require("../../models/Spot");

router.get("/location", (req, res) => {
    const distanceInMiles = req.query.distance;
    const distanceInMeters = distanceInMiles * 1609.34;
  const long = parseFloat(req.query.lon);
  const lat = parseFloat(req.query.lat);
    console.log("lat", lat);
    Spot.aggregate(
      [
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [long, lat]
            },
            distanceField: "dist.calculated",
            maxDistance: distanceInMeters,
            spherical: true,
            inludeLocs: "dist.precise",
            distanceMultiplier: 0.000621371,
          }
        },
        { $sort: { distance: -1 } }
      ],
      (err, docs) => {
        if (err) res.status(404).json({ nospotsfound: err });
        console.log(docs);
        res.json(docs);
      }
    );
});

router.get("/state", (req, res) => {
  const rock = req.query.state;
  const maxGuestSize = req.query.maxGuestSize;
  console.log("state", rock);
  Spot.find({"location.state": rock}, (err, docs) => {
    console.log(docs);
    if (err) res.status(404).json({ nospotsfound: err });
    res.json(docs);
  }).exists("location")
})

module.exports = router;

//    Spot.find(
//        {"location.point": {
//            $near: {
//                $maxDistance: distanceInMeters,
//                $geometry: {
//                    type: "Point",
//                    coordinates: [long, lat]
//                }
//            }
//        }}
//    )