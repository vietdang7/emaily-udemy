const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');


const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);

const app = express();

// client id: 755359094742-a5vnd43kt26s78reo2aqucvpkpkrcab1.apps.googleusercontent.com
// client secret: glCwSImaxZG42CIEfflMWx2N

//add body parser middleware
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
