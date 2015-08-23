var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'},
    function(req, accessToken, refreshToken, profile, done) {
        var user = {
          email: profile.emails[0].value,
          image: profile._json.image.url,
          displayName: profile.displayName,

          google: {
            id: profile.id,
            token: accessToken
          }


        };

        done(null, user);
    }
  ));

};
