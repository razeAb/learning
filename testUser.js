const mongoose = require('mongoose');
const User = require("./User");

// connect to mongoDb

mongoose.connect("mongodb://127.0.0.1:27017/testDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then.(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB", err));
