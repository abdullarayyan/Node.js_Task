const mongoose = require('mongoose')

const airport = new mongoose.Schema(
    {
        airport_code: {type: String},
        name: {type: String},
        city: {type: String},
        state: {type: String}
        
    }, {collection: 'airport'}
)

module.exports = mongoose.model('airport', airport);
