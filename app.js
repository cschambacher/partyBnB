const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bookings = require("./routes/api/bookings");
const spots = require("./routes/api/spots");
const search = require("./routes/api/search");
const bodyParser = require('body-parser');
const User = require('./models/User');
const passport = require('passport');
const path = require("path");
const fileUpload = require("./routes/api/file-upload")

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
      Spot.collection.getIndexes().then(indexes => console.log("indexes", indexes));
    })
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!!")
    // const user = new User({
    //     handle: "jim",
    //     email: "jim@jim.com",
    //     password: "jimbo123"
    // })
    // user.save()
    
});
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/spots", spots);
app.use("/api/search", search);
app.use("/api/upload", fileUpload);
app.use("/api/booking", bookings);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));