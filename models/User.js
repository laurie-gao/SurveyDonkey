const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema for mongoDB users collection
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);