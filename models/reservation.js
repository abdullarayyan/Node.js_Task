const mongoose = require('mongoose')


const seat_reservation = new mongoose.Schema({
        flight_number: {type: String, index: true, ref: "fare"},
        leg_number: {type: Number},
        date: {type: String},
        Seat_number: {type: String},
        customer_name: {type: String},
        customer_phone: {type: String},
        fare: [{
            fare_code: {type: String},
            amount: {type: Number},
        }]
        
    }, {collection: 'seat_reservation'},
)

module.exports = mongoose.model('seat_reservation', seat_reservation);
