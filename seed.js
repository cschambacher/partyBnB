//const mongoose = require("mongoose");
//const db = require("./config/keys").mongoURI;
//const faker = require("faker");
//const Spot = require("./models/Spot");
//const images = ["1.jpg", "2.jpg", "3.jpg",
//"4.png", "5.jpg", "6.jpg", "7.png", "8.jpg", 
//"9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
//"14.jpg", "15.jpg"];
//mongoose
//  .connect(db, { useNewUrlParser: true })
//  .then(() => {
//    console.log("connected successfully");
//    Spot.collection.drop();
//    for (let i = 0; i < 100; i++){
//      Spot.create({
//        title: faker.lorem.words(),
//        location: {
//          streetAddress: faker.address.streetAddress(),
//          city: faker.address.city(),
//          state: faker.address.state(),
//          point: {
//            type: "Point",
//            coordinates: [faker.address.latitude(), faker.address.longitude()]
//          }
//        },
//        user: "5e140c4388c1c30a83c75690",
//        description: {
//            description: faker.lorem.words()
//        },
//        price: {
//          basePrice: Math.floor(Math.random() * 1000)
//        },
//        imageUrl: `https://partybnb-seeder.s3.us-east-2.amazonaws.com/${images[Math.floor(Math.random() * 14)]}`,
//        published: true
//      });
//      console.log("spot created");//
   // } }).catch(err => console.log(err));