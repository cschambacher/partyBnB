// const axios = require("axios");
// const randomLocation = require("random-location");
// const key = require('./config/geocode_key');

// const locations = [
//   { lat: 40.7484445, lon: -73.9878584 },
//   { lat: 37.7749295, lon: -122.4194155 },
//   { lat: 32.8209281, lon: -97.0124255 },
//   { lat: 34.0207289, lon: -118.6926149 },
//   { lat: 33.6056695, lon: -112.4059336 },
// ];
// const randomPoint = randomLocation.randomCirclePoint({
//   latitude: 37.7749295,
//   longitude: -122.4194155
// }, 6000);
// const { latitude, longitude } = randomPoint;
// const baseUrl =
//   "https://geoservices.tamu.edu/Services/ReverseGeocoding/WebService/v04_01/Rest/";

// axios.get(`${baseUrl}?apiKey=${key.geoCodeKey}&lat=${latitude}&lon=${longitude}&version=4.10&format=json`)
// .then(res => {
//     const address = {
//       streetAddress: res.data.StreetAddresses[0].StreetAddress,
//       city: res.data.StreetAddresses[0].City,
//       state: res.data.StreetAddresses[0].State,
//       zip: res.data.StreetAddresses[0].Zip
//     };
//     const precise = {
//       type: "Point",
//       coordinates: [longitude, latitude]
//     };
//     const location = {
//         location: address,
//         precise
//     }
//     console.log("location", location);
// }).catch(e => console.log("Error", e));