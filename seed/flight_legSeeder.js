const flight_leg = require('../models/flight_legSchema')
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

const flights_leg = [
    new flight_leg({
        "flight_number": "G4155",
        "leg_number": 1,
        "departure_airport_code": "SCK",
        "scheduled_departure_time": "531PM",
        "arrival_airport_code": "IWA",
        "scheduled_arrival_time": "814PM"
    }),
    new flight_leg({
        "flight_number": "G4154",
        "leg_number": 1,
        "departure_airport_code": "IWA",
        "scheduled_departure_time": "406PM",
        "arrival_airport_code": "SCK",
        "scheduled_arrival_time": "451PM"
    }),
    new flight_leg({
        "flight_number": "DL5841",
        "leg_number": 1,
        "departure_airport_code": "OAK",
        "scheduled_departure_time": "1240PM",
        "arrival_airport_code": "LAX",
        "scheduled_arrival_time": "200PM"
    }),
    new flight_leg({
        "flight_number": "DL1149",
        "leg_number": 1,
        "departure_airport_code": "LAX",
        "scheduled_departure_time": "645PM",
        "arrival_airport_code": "HNL",
        "scheduled_arrival_time": "1043PM"
    }),
    new flight_leg({
        "flight_number": "HA48",
        "leg_number": 1,
        "departure_airport_code": "HNL",
        "scheduled_departure_time": "215PM",
        "arrival_airport_code": "OAK",
        "scheduled_arrival_time": "930PM"
    }),
    new flight_leg({
        "flight_number": "AA1522",
        "leg_number": 1,
        "departure_airport_code": "SFO",
        "scheduled_departure_time": "1159PM",
        "arrival_airport_code": "ORD",
        "scheduled_arrival_time": "604AM"
    }),
    new flight_leg({
        "flight_number": "AA3472",
        "leg_number": 1,
        "departure_airport_code": "ORD",
        "scheduled_departure_time": "719AM",
        "arrival_airport_code": "MSN",
        "scheduled_arrival_time": "819AM"
    }),
    new flight_leg({
        "flight_number": "WN380",
        "leg_number": 1,
        "departure_airport_code": "MDW",
        "scheduled_departure_time": "755AM",
        "arrival_airport_code": "ONT",
        "scheduled_arrival_time": "1010AM"
    }),
    new flight_leg({
        "flight_number": "WN380",
        "leg_number": 2,
        "departure_airport_code": "ONT",
        "scheduled_departure_time": "1045AM",
        "arrival_airport_code": "SMF",
        "scheduled_arrival_time": "1145AM"
    }),
    new flight_leg({
        "flight_number": "B6624",
        "leg_number": 1,
        "departure_airport_code": "LAX",
        "scheduled_departure_time": "915PM",
        "arrival_airport_code": "JFK",
        "scheduled_arrival_time": "522AM"
    })
]


let done = 0
for (let i = 0; i < flights_leg.length; i++) {
    flights_leg[i].save(function (err, result) {
        done = done + 1;
        if (done === flights_leg.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}