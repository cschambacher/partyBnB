const express = require("express");
const router = express.Router();
const Spot = require("../../models/Spot");

router.get("/location", (req, res) => {
    const distanceInMiles = req.query.distance;
    const distanceInMeters = distanceInMiles * 1609.34;
  const long = parseFloat(req.query.long);
  const lat = parseFloat(req.query.lat);
    console.log("lat", lat);
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
    Spot.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [long, lat]
          },
          distanceField: "dist.calculated",
          maxDistance: distanceInMeters,
          spherical: true,
          inludeLocs: "dist.precise"
        }
      },
      { $sort: { distance: -1 } }
    ], 
    (err, docs) => {
        if (err) res.status(404).json({ nospotsfound: err });
        res.json(docs);
    });
})

module.exports = router;