const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// create mongoodb users collection if it does not exist
mongoose.model('users', userSchema);