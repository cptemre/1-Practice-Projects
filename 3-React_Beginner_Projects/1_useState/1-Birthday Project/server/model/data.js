const mongoose = require('mongoose');

const hobbits = mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    src: String
})

module.exports = mongoose.model("Hobbits", hobbits)