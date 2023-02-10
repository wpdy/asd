const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
}));

module.exports = Course;