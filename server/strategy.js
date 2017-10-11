require('dotenv').config();
const Auth0Strategy = require('passport-auth0');

module.exports = new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken,extraParams, profile, done){
    return done(null, profile); // will need to be edited
  }
);
