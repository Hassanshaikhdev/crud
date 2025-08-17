const { default: mongoose } = require('mongoose')
// const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    superheroname: {
        type: String,   // ✅ Capital "S"
    },
    name: {
        type: String,   // ✅ Capital "S"
        required: true,
    },
})

module.exports = mongoose.model('Hero', heroSchema)
