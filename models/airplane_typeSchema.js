const mongoose = require('mongoose')


const airplane_type = new mongoose.Schema({
        airplane_type_name: {type: String},
        max_seats: {type: Number},
        company: {type: String},
    }, {collection: 'airplane_type'},
)

module.exports = mongoose.model('airplane_type', airplane_type);
