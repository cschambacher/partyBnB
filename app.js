const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const spots = require("./routes/api/spots");
const bodyParser = require('body-parser');
const User = require('./models/User');
const passport = require('passport');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
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
app.use("api/spots", spots);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));