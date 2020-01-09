const express = require("express");
const router = express.Router();
const Spot = require("../../models/Spot");

router.get("/location", (req, res) => {
    const distanceInMiles = req.body.distance;
    const distanceInMeters = distanceInMiles * 1609.34;
    const long = req.body.long;
    const lat = req.body.lat;
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
          spherical: true
        }
      },
      { $sort: { distance: -1 } }
    ], 
    (err, docs) => {
        if (err) res.send(err);
        res.json(docs);
    });
})