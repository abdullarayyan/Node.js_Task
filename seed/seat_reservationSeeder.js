const seat_reservation = require('../models/reservation')
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

const Seat_reservations = [
    new seat_reservation({
        "flight_number": "UA560",
        "leg_number": 1,
        "date": "2018-01-28",
        "seat_number": "1A",
        "customer_name": "Osvaldo",
        "customer_phone": "555-55-5555",
        fare: {
            fare_code: 'L',
            amount: '350'
        }
    }),
    new seat_reservation({
        "flight_number": "G4155",
        "leg_number": 1,
        "date": "2018-01-28",
        "seat_number": "2A",
        "customer_name": "Deana",
        "customer_phone": "867-5309",
        fare: {
            fare_code: 'y',
            amount: '106'
        }
    }),
    new seat_reservation({
        "flight_number": "G4154",
        "leg_number": 1,
        "date": "2018-01-31",
        "seat_number": "1A",
        "customer_name": "Mike",
        "customer_phone": "555-5309",
        fare: {
            fare_code: 'y', amount: '142'
        }
    }),
    new seat_reservation({
        "flight_number": "G4154",
        "leg_number": 1,
        "date": "2018-01-31",
        "seat_number": "11A",
        "customer_name": "Dan",
        "customer_phone": "555-0000",
        fare: {
            fare_code: 'B', amount: '500'
        }
    }),
    new seat_reservation({
        "flight_number": "G4154",
        "leg_number": 1,
        "date": "2018-01-31",
        "seat_number": "3A",
        "customer_name": "Ryan",
        "customer_phone": "555-0001",
        fare: {
            fare_code: 'F', amount: '1000'
        }
    }),
    new seat_reservation({
        "flight_number": "DL1149",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "17A",
        "customer_name": "Mark",
        "customer_phone": "555-0002",
        fare: {
            fare_code: 'y', amount: '250'
        }
    }),
    new seat_reservation({
        "flight_number": "DL5841",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7A",
        "customer_name": "Edgar",
        "customer_phone": "555-0003",
        fare: {
            fare_code: 'y', amount: '150'
        }
    }),
    new seat_reservation({
        "flight_number": "DL1149",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "11B",
        "customer_name": "Naomi",
        "customer_phone": "555-0004",
        fare: {
            fare_code: 'y', amount: '256'
        }
    }),
    new seat_reservation({
        "flight_number": "DL5841",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7F",
        "customer_name": "Mitchell",
        "customer_phone": "555-0005",
        fare: {
            fare_code: 'y', amount: '98'
        }
        
    }),
    new seat_reservation({
        "flight_number": "DL5841",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7D",
        "customer_name": "KC",
        "customer_phone": "555-0006",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "DL5841",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7C",
        "customer_name": "Jillian",
        "customer_phone": "555-0007",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "DL1149",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "8A",
        "customer_name": "Carissa",
        "customer_phone": "555-0008",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "7E",
        "customer_name": "Clement",
        "customer_phone": "555-0009",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "10A",
        "customer_name": "John",
        "customer_phone": "555-0010",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "13A",
        "customer_name": "Sahib",
        "customer_phone": "555-0011",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "1E",
        "customer_name": "Alex",
        "customer_phone": "555-0012",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "14A",
        "customer_name": "KH",
        "customer_phone": "555-0013",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "15E",
        "customer_name": "Lisa",
        "customer_phone": "555-0014",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "HA48",
        "leg_number": 1,
        "date": "2018-02-24",
        "seat_number": "6A",
        "customer_name": "Kyla",
        "customer_phone": "555-0015",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "6A",
        "customer_name": "Dorothy",
        "customer_phone": "555-0016",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7E",
        "customer_name": "Max",
        "customer_phone": "555-0017",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "2A",
        "customer_name": "Jillian",
        "customer_phone": "555-0018",
        fare: {
            fare_code: 'L',
            amount: '350'
        }
    }),
    new seat_reservation({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7F",
        "customer_name": "Michael",
        "customer_phone": "555-0019",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "13A",
        "customer_name": "Lisa",
        "customer_phone": "555-0020",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7D",
        "customer_name": "Drew",
        "customer_phone": "555-0021",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA1522",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7F",
        "customer_name": "An",
        "customer_phone": "555-0022",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "1A",
        "customer_name": "Edgar",
        "customer_phone": "555-0023",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7B",
        "customer_name": "Jeremy",
        "customer_phone": "555-0024",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "6A",
        "customer_name": "KH",
        "customer_phone": "555-0025",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "7C",
        "customer_name": "Katya",
        "customer_phone": "555-0026",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7A",
        "customer_name": "Alicia",
        "customer_phone": "555-0027",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "B6624",
        "leg_number": 1,
        "date": "2018-02-09",
        "seat_number": "3D",
        "customer_name": "Hillary",
        "customer_phone": "555-0028",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7E",
        "customer_name": "Antonio",
        "customer_phone": "555-0029",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "AA3472",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "2B",
        "customer_name": "Jaskaran",
        "customer_phone": "555-0030",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7C",
        "customer_name": "Tom",
        "customer_phone": "555-0031",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7A",
        "customer_name": "Norlan",
        "customer_phone": "555-0032",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "9B",
        "customer_name": "Ryan",
        "customer_phone": "555-0033",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "8A",
        "customer_name": "Naomi",
        "customer_phone": "555-0034",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "7F",
        "customer_name": "Mitchell",
        "customer_phone": "555-0035",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 1,
        "date": "2018-08-05",
        "seat_number": "8F",
        "customer_name": "Clement",
        "customer_phone": "555-0036",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "23D",
        "customer_name": "Danilo",
        "customer_phone": "555-0037",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "19A",
        "customer_name": "Sahib",
        "customer_phone": "555-0038",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "7E",
        "customer_name": "Alex",
        "customer_phone": "555-0039",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "9A",
        "customer_name": "KC",
        "customer_phone": "555-0040",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "7B",
        "customer_name": "Kyla",
        "customer_phone": "555-0041",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
    new seat_reservation({
        "flight_number": "WN380",
        "leg_number": 2,
        "date": "2018-08-05",
        "seat_number": "10C",
        "customer_name": "Drew",
        "customer_phone": "555-0042",
        fare: {
            fare_code: '',
            amount: ''
        }
    }),
]

let done = 0
for (let i = 0; i < Seat_reservations.length; i++) {
    Seat_reservations[i].save(function (err, result) {
        done = done + 1;
        if (done === Seat_reservations.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}