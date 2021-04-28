const mongoose = require('mongoose')

const can_land = new mongoose.Schema({
        airplane_type_name: {type: String},
        airport_code: {type: String},
        
    }, {collection: 'can_land'},
)
module.exports = mongoose.model('can_land', can_land);
