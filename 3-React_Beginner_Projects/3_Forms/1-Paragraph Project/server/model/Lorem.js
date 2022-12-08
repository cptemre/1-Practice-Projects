const mongoose = require('mongoose');

const lorem = mongoose.Schema({
    id: Number,
    lorem: String
})

module.exports = mongoose.model('Lorem', lorem)