const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    available: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;