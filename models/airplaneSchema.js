const mongoose = require('mongoose')

const airplane = new mongoose.Schema({
        airplane_id: {type: Number},
        total_number_of_seats: {type: Number},
        airplane_type: {type: String},
    }, {collection: 'airplane'},
)

module.exports = mongoose.model('airplane', airplane);
