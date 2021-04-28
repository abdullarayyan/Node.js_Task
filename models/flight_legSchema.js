const mongoose = require('mongoose')

const flight_leg = new mongoose.Schema({
        flight_number: {type: String},
        leg_number: {type: Number},
        departure_airport_code: {type: String},
        scheduled_departure_time: {type: String},
        arrival_airport_code: {type: String},
        scheduled_arrival_time: {type: String}
    }, {collection: 'flight_leg'},
)

module.exports = mongoose.model('flight_leg ', flight_leg);
