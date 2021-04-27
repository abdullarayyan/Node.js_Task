const leg_instance = require('../models/flight')
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

const leg_instances = [
    new leg_instance({
        "flight_number": "G4155",
        "leg_number": 1,
        "date": "2018-01-28",
        "number_of_available_seats": 3,
        "airplane_id": 28,
        "departure_airport_code": "SCK",
        "departure_time": "535PM",
        "arrival_airport_code": "IWA",
        "arrival_time": "819PM"
    }),
    new leg_instance({
        "flight_number": "G4155",
        "leg_number": 1,
        "date": "2018-01-31",
        "number_of_available_seats": 16,
        "airplane_id": 28,
        "departure_airport_code": "SCK",
        "departure_time": "531PM",
        "arrival_airport_code": "IWA",
        "arrival_time": "813PM"
    }),
    new leg_instance({
        "flight_number": "G4154",
        "leg_number": 1,
        "date": "2018-02-03",
        "number_of_available_seats": 19,
        "airplane_id": 28,
        "departure_airport_code": "SCK",
        "departure_time": "406PM",
        "arrival_airport_code": "IWA",
        "arrival_time": "451PM"
    }),
    new leg_instance({
        "flight_number": "DL5841",
        "leg_number": 1,
        "date": "2018-02-09",
        "number_of_available_seats": 5,
        "airplane_id": 21,
        "departure_airport_code": "OAK",
        "departure_time": "1245PM",
        "arrival_airport_code": "LAX",
        "arrival_time": "205PM"
    }),
    new leg_instance({
        "flight_number": "DL1149",
        "leg_number": 1,
        "date": "2018-02-09",
        "number_of_available_seats": 20,
        "airplane_id": 13,
        "departure_airport_code": "LAX",
        "departure_time": "645PM",
        "arrival_airport_code": "HNL",
        "arrival_time": "1043PM"
    }),
    new leg_instance({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "number_of_available_seats": 10,
        "airplane_id": 30,
        "departure_airport_code": "HNL",
        "departure_time": "215PM",
        "arrival_airport_code": "OAK",
        "arrival_time": "910PM"
    }),
    new leg_instance({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "number_of_available_seats": 70,
        "airplane_id": 9,
        "departure_airport_code": "SFO",
        "departure_time": "1205AM",
        "arrival_airport_code": "ORD",
        "arrival_time": "604AM"
    }),
    new leg_instance({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "number_of_available_seats": 15,
        "airplane_id": 18,
        "departure_airport_code": "ORD",
        "departure_time": "719AM",
        "arrival_airport_code": "MSN",
        "arrival_time": "819AM"
    }),
    new leg_instance({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "number_of_available_seats": 130,
        "airplane_id": 10,
        "departure_airport_code": "MDW",
        "departure_time": "755AM",
        "arrival_airport_code": "ONT",
        "arrival_time": "1010AM"
    }),
    new leg_instance({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "number_of_available_seats": 130,
        "airplane_id": 10,
        "departure_airport_code": "ONT",
        "departure_time": "1045AM",
        "arrival_airport_code": "SMF",
        "arrival_time": "1145AM"
    }),
    new leg_instance({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "number_of_available_seats": 100,
        "airplane_id": 1,
        "departure_airport_code": "LAX",
        "departure_time": "915PM",
        "arrival_airport_code": "JFK",
        "arrival_time": "522AM"
    })
]

let done = 0
for (let i = 0; i < leg_instances.length; i++) {
    leg_instances[i].save(function (err, result) {
        done = done + 1;
        if (done === leg_instances.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}