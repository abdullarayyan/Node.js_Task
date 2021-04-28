const fare = require('../models/flight_legSchema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/flight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err => {
    if (!err) {
        console.log('MongoDB Connection Succeeded')
    } else {
        console.log('Error In DB Connection: ' + err)
    }
}));


const fares = [
    new fare({
        flight_number: "UA560", fare_code: 'L', amount: '350', restrictions: 'no'
    }),
    new fare({
        flight_number: 'G4154', fare_code: 'y', amount: '106', restrictions: 'no'
    }),
    new fare({
        flight_number: 'G4155', fare_code: 'y', amount: '142', restrictions: 'no'
    }),
    new fare({
        flight_number: 'DL1149', fare_code: 'B', amount: '500', restrictions: 'yes'
    }),
    new fare({
        flight_number: 'HA48', fare_code: 'F', amount: '1000', restrictions: 'yes'
    }),
    new fare({
        flight_number: 'AA1522', fare_code: 'y', amount: '250', restrictions: 'no'
    }),
    new fare({
        flight_number: 'AA3472', fare_code: 'y', amount: '150', restrictions: 'yes'
    }),
    new fare({
        flight_number: 'WN380', fare_code: 'y', amount: '256', restrictions: 'no'
    }),
    new fare({
        flight_number: 'B6624', fare_code: 'y', amount: '98', restrictions: 'no'
    }),
]

let done = 0
for (let i = 0; i < fares.length; i++) {
    fares[i].save(function (err, result) {
        done = done + 1;
        if (done === fares.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}