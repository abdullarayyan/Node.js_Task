const mongoose = require('mongoose')

const leg_instance = new mongoose.Schema({
        flight_number: {type: String},
        leg_number: {type: Number},
        date: {type: String},
        number_of_available_seats: {type: Number},
        airplane_id: {type: Number},
        departure_airport_code: {type: String},
        departure_time: {type: String},
        arrival_airport_code: {type: String},
        arrival_time: {type: String}
    }, {collection: 'leg_instance'},
)

module.exports = mongoose.model('leg_instance', leg_instance);
