const mongoose = require('mongoose');

const menu = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    price: Number,
    src: String
})

module.exports = mongoose.model("Menu", menu)