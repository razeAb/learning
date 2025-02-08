const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// define  User Schma 

const userSchema = new.mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    passsword: { type: String, required: true },
});

// pre-save Hook: Hash password before saving
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();

});



// create User Model
const User = mongoose.model("User", userSchema);

module.exports = User;