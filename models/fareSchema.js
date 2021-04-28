const mongoose = require('mongoose')


const fare = new mongoose.Schema({
    flight_number: {type: String,ref:"seat_reservation"},
    fare_code: {type: String},
    amount: {type: Number},
    restrictions: {type: Boolean},
    
    
}, {collection: 'fare'},)

module.exports = mongoose.model('fare', fare);
