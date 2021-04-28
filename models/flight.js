const mongoose = require('mongoose')

const Schema = mongoose.Schema
const airport = new mongoose.Schema(
    {
        airport_code: {type: String},
        name: {type: String},
        city: {type: String},
        state: {type: String}
        
    }, {collection: 'airport'}
)

const flight_ = new mongoose.Schema(
    {
        flight_number: {type: String},
        airline: {type: String},
        weekdays: {type: Boolean},
    }, {collection: 'flight'},
)

const fare = new Schema({
        flight_number: {type: String,ref:"seat_reservation"},
        fare_code: {type: String},
        amount: {type: Number},
        restrictions: {type: Boolean},
        
        
    }, {collection: 'fare'},)


const airplane_type = new mongoose.Schema({
        airplane_type_name: {type: String},
        max_seats: {type: Number},
        company: {type: String},
    }, {collection: 'airplane_type'},
)

const airplane = new mongoose.Schema({
        airplane_id: {type: Number},
        total_number_of_seats: {type: Number},
        airplane_type: {type: String},
    }, {collection: 'airplane'},
)

const can_land = new mongoose.Schema({
        airplane_type_name: {type: String},
        airport_code: {type: String},
        
    }, {collection: 'can_land'},
)

const flight_leg = new mongoose.Schema({
        flight_number: {type: String},
        leg_number: {type: Number},
        departure_airport_code: {type: String},
        scheduled_departure_time: {type: String},
        arrival_airport_code: {type: String},
        scheduled_arrival_time: {type: String}
    }, {collection: 'flight_leg'},
)

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



module.exports = mongoose.model('airport', airport);
module.exports = mongoose.model('flight', flight_);
module.exports = mongoose.model('fare', fare);
// module.exports = mongoose.model('airplane_type', airplane_type);
// module.exports = mongoose.model('airplane', airplane);
//  module.exports = mongoose.model('seat_reservation', seat_reservation);
// module.exports = mongoose.model('can_land', can_land);
// module.exports = mongoose.model('leg_instance', leg_instance);
// module.exports = mongoose.model('flight_leg ', flight_leg);
