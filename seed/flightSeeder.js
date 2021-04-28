const flight_ = require('../models/flight_legSchema')
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

/*
* 	Flight_number, airline, weekdays
	

	* */
const flights = [
    new flight_({
        flight_number: 'UA560',
        airline: 'United',
        weekdays: '1',
    }),
    new flight_({
        flight_number: 'B6624',
        airline: 'Jetblue',
        weekdays: '1'
    }),
    new flight_({
        flight_number: 'DL5841',
        airline: 'Delta',
        weekdays: '1',
    }),
    new flight_({
        flight_number: 'DL1149',
        airline: 'Delta',
        weekdays: '1',
    }),
    new flight_({
        flight_number: 'G4529',
        airline: 'Allegiant',
        weekdays: '0',
    }),
    new flight_({
        flight_number: 'G4154',
        airline: 'Allegiant',
        weekdays: '0',
    }),
    new flight_({
        flight_number: 'G4155',
        airline: 'Allegiant',
        weekdays: '0',
    }),
    new flight_({
        flight_number: 'HA48',
        airline: 'Hawaiian',
        weekdays: '0',
    }),
    new flight_({
        flight_number: 'AA1522',
        airline: 'American',
        weekdays: '1',
    }),
    new flight_({
        flight_number: 'AA3472',
        airline: 'American',
        weekdays: '1',
    }),
    new flight_({
        flight_number: 'WN380',
        airline: 'Southwest',
        weekdays: '1',
    }),
]

let done = 0;
for (let i = 0; i < flights.length; i++) {
    flights[i].save(function (err, result) {
        done = done + 1;
        if (done === flights.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}