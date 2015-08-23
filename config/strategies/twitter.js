var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function() {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_ID,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
    passReqToCallback: true
  }, function(req, token, tokenSecret, profile, done) {

    var user = {
      image: profile._json.profile_image_url,
      displayName: profile.displayName,

      twitter: {
        id: profile.id,
        token: token
      }


    };

    done(null, user);


  }));
};
