const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Rating too low.'],
        max: [5, 'That is impossible. 5 is the highest rating'],
        required: true
    }
})

module.exports = mongoose.model('Beer', BeerSchema)