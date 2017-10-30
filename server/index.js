require('dotenv').config();
const express            = require('express')
    , session            = require('express-session')
    , bodyParser         = require('body-parser')
    , massive            = require('massive')
    , passport           = require('passport')
    , Auth0Strategy      = require('passport-auth0')
    , cors               = require('cors')
    , inquiry_controller = require('./controllers/inquiry_controller.js');

// Create express app
const app = express();

/* ---Middleware--- */



// cors
app.use(cors());
// Body Parser
app.use(bodyParser.json());
// Session Config
app.use(session({               // Step one
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize()); // Step two
app.use(passport.session());    // Step three
// Massive
massive(process.env.CONNECTION_STRING)
  .then(db=>{
    app.set('db', db);
    console.log('massive initialized.');
  })
  .catch(err=>console.log('massive failed to initialize:\n\n', err));
// Passport Config
passport.use(new Auth0Strategy({ // Set strategy
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken,extraParams, profile, done){
    //console.log(profile);
    //return done(null, profile); // will need to be edited
    const db = app.get('db'); // Sets the db to a variable
    //console.log('Profile object:\n\n',profile); // Uncomment to test profile object
    db.find_user_by_authid([profile._json.user_id])
      .then(user=>{
        if(user[0]){
          return done(null, user[0].userid);
        }else{
          const user = profile._json; // Sets the profile json object to a variable
          db.create_user([
            user.name,
            user.email,
            user.user_id
          ]).then(user=>{
            return done(null, user[0].userid);
          });
        }
      })
    .catch(err=> console.log('There was a problem:\n\n', err));
  }
));
passport.serializeUser((id, done)=>{
  done(null, id); // EDIT THIS?
});
passport.deserializeUser((id, done)=>{
  app.get('db').find_user_by_userid([id])
    .then(user=>{
      return done(null, user[0]);
    });
});

/* ---End Points--- */

// auth0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: '/failure'
}));
app.get('/auth/me', (req, res)=>{
  if(!req.user){
    return res.status(200).send({userid: null}); //falsey value, used to indicate a user is not in session.
  }else{
    return res.status(200).send(req.user);
  }
});
app.get('/auth/logout', (req, res)=>{
  req.logOut();
  res.redirect(302, 'http://localhost:3000');
});

// inquiries
app.get('/api/inquiries', inquiry_controller.getInquiries);
app.post('/api/inquiries', inquiry_controller.createInquiry);
app.get('/api/inquiries/inquiryitems/:inquiryid', inquiry_controller.getInquiryItems);

// Test Endpoints
app.get('/success', (req, res)=>{
  res.status(200).send('<h2 style="color: green">Success!</h2>');
});
app.get('/failure', (req, res)=>{
  res.status(500).send('<h2 style="color: red">Failure :\'(</h2>')
});
app.get('/test', (req,res)=>{
  res.status(200).send('<h1>Hello world</h1>');
});

/* ---Listener--- */

const PORT = process.env.PORT || process.env.LOCAL_PORT;
app.listen(PORT, ()=> console.log(`Now serving ${PORT.toLocaleString()} leagues under the sea...`));
