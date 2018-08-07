const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// create mongoodb users collection if it does not exist
mongoose.model('users', userSchema);