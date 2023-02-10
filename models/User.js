const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    about: String
}))

module.exports = User;