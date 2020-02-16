const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema for mongoDB users collection
const userSchema = new Schema({
    googleId: String

});

mongoose.model('users', userSchema);