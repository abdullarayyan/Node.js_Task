const mongoose = require('mongoose')

const flight_ = new mongoose.Schema(
    {
        flight_number: {type: String},
        airline: {type: String},
        weekdays: {type: Boolean},
    }, {collection: 'flight'},
)

module.exports = mongoose.model('flight', flight_);
