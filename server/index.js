require('dotenv').config();
const express     = require('express')
    , session     = require('express-session')
    , bodyParser  = require('body-parser')
    , massive     = require('massive')
    , passport    = require('passport')
    , strategy    = require(`${__dirname}/strategy`);

// Create express app
const app = express();

/* ---Middleware--- */

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
passport.use(strategy);

passport.serializeUser((user, done)=>{
  done(null, user); // EDIT THIS
});

passport.deserializeUser((obj, done)=>{
  done(null, obj); // EDIT THIS
});

/* ---End Points--- */

// auth0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/success',
  failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res)=>{
  if(!req.user){
    return res.status(404).send('<h1>User not found.</h1>')
  }else{
    return res.status(200).send(req.user);
  }
});
app.get('/auth/logout', (req, res)=>{
  req.logOut();
  res.redirect(302, 'http://localhost:3000');
});

// Test Endpoints
app.get('/success', (req, res)=>{
  res.status(200).send('<h2 style="color: green">Success!</h2>');
});
app.get('/test', (req,res)=>{
  res.status(200).send('<h1>Hello world</h1>');
});

/* ---Listener--- */

const PORT = process.env.PORT || process.env.LOCAL_PORT;
app.listen(PORT, ()=> console.log(`Now serving ${PORT.toLocaleString()} leagues under the sea...`));
