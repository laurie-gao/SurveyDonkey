const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//automatically called by passport with user model fetched from mongoDB in the GoogleStrategy callback
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStretegy
    ({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
            return done(null, existingUser);
        } 
        const user = await new User({ googleId: profile.id }).save()
        done(null, user);
    })
);



