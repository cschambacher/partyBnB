
// const mongoose = require("mongoose");
// const db = require("./config/keys").mongoURI;
// const faker = require("faker");
// const Spot = require("./models/Spot");
// const axios = require("axios");
// const randomLocation = require("random-location");
// const key = require("./config/geocode_key");
// const moviesNames = require("movies-names");


// const randomGeneratedAddresses = [];

// async function generateAddresses(){


//     const locations = [
//         { lat: 40.7484445, lon: -73.9878584 },
//         { lat: 37.7749295, lon: -122.4194155 },
//         { lat: 32.8209281, lon: -97.0124255 },
//         { lat: 34.0207289, lon: -118.6926149 },
//         { lat: 33.6056695, lon: -112.4059336 }
//     ];


//     while (randomGeneratedAddresses.length < 101){
//         const location = {};
//         console.log("inside while block");
//         const randomNumber = Math.floor(Math.random() * locations.length)
//         const randomPoint = randomLocation.randomCirclePoint(
//             {
//                 latitude: locations[randomNumber].lat,
//                 longitude: locations[randomNumber].lon
//             },
//             50000
//         );
//         const { latitude, longitude } = randomPoint;
//         const baseUrl =
//             "https://geoservices.tamu.edu/Services/ReverseGeocoding/WebService/v04_01/Rest/";
//         try {
//             let res = await axios
//                 .get(
//                     `${baseUrl}?apiKey=${key.geoCodeKey}&lat=${latitude}&lon=${longitude}&version=4.10&format=json`
//                 );
//             const address = {
//                 streetAddress: res.data.StreetAddresses[0].StreetAddress,
//                 city: res.data.StreetAddresses[0].City,
//                 state: res.data.StreetAddresses[0].State,
//                 zip: res.data.StreetAddresses[0].Zip
//             };
//             const precise = {
//                 type: "Point",
//                 coordinates: [longitude, latitude]
//             };
//             location.location = address;
//             location.precise = precise;
//             //console.log("location", location);
//             randomGeneratedAddresses.push(location)
            
//         } catch (e) {
//             console.log(e);
//         }
//     }

// }
// async function seed(){
//     const users = [
//         "5e1bf3ab9087a9160779b40d",
//         "5e1c308a47c777296d2426f8",
//         "5e1c30d7406e1f29a4b8149b",
//         "5e1c312700794829bdffc184"
//     ]

//     const images = ["1.jpg", "2.jpg", "3.jpg",
//         "4.png", "5.jpg", "6.jpg", "7.png", "8.jpg",
//         "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
//         "14.jpg", "15.jpg"];

//     await generateAddresses();
//     console.log(randomGeneratedAddresses);
//     console.log("I am finished")
//     mongoose
//         .connect(db, { useNewUrlParser: true })
//         .then(() => {
//             console.log("connected successfully");
//             Spot.collection.drop();
//             for (let i = 0; i < 100; i++) {
//                 const view = randomGeneratedAddresses[i];
//                 console.log(view);
//                 Spot.create({
//                   title: moviesNames.random().title,
//                   ...view,
//                   user: users[Math.floor(Math.random() * users.length)],
//                   description: {
//                     description: faker.lorem.words()
//                   },
//                   price: {
//                     basePrice: Math.floor(Math.random() * 1000)
//                   },
//                   imageUrl: `https://partybnb-seeder.s3.us-east-2.amazonaws.com/${
//                     images[Math.floor(Math.random() * 14)]
//                   }`,
//                   published: true
//                 });
//                 console.log("spot created");
//             }
//         }).catch(err => console.log(err));
// }

// seed();



