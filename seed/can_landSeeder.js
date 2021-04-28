const can_land = require('../models/flight_legSchema')
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

const can_lands = [
    new can_land({
        "airplane_type_name": "MD80",
        "airport_code": "SCK"
    }),
    new can_land({
        "airplane_type_name": "MD80",
        "airport_code": "SAN"
    }),
    new can_land({
        "airplane_type_name": "MD80",
        "airport_code": "IWA"
    }),
    new can_land({
        "airplane_type_name": "MD80",
        "airport_code": "LAS"
    }),
    new can_land({
        "airplane_type_name": "ERJ145",
        "airport_code": "IWA"
    }),
    new can_land({
        "airplane_type_name": "ERJ145",
        "airport_code": "FAT"
    }),
    new can_land({
        "airplane_type_name": "ERJ145",
        "airport_code": "ORD"
    }),
    new can_land({
        "airplane_type_name": "ERJ145",
        "airport_code": "MSN"
    }),
    new can_land({
        "airplane_type_name": "CRJ440",
        "airport_code": "MSN"
    }),
    new can_land({
        "airplane_type_name": "CRJ440",
        "airport_code": "MSP"
    }),
    new can_land({
        "airplane_type_name": "CRJ100",
        "airport_code": "MSN"
    }),
    new can_land({
        "airplane_type_name": "CRJ100",
        "airport_code": "MSP"
    }),
    new can_land({
        "airplane_type_name": "CRJ700",
        "airport_code": "MSN"
    }),
    new can_land({
        "airplane_type_name": "CRJ700",
        "airport_code": "SLC"
    }),
    new can_land({
        "airplane_type_name": "CRJ700",
        "airport_code": "ORD"
    }),
    new can_land({
        "airplane_type_name": 170,
        "airport_code": "OAK"
    }),
    new can_land({
        "airplane_type_name": 170,
        "airport_code": "LAX"
    }),
    new can_land({
        "airplane_type_name": 190,
        "airport_code": "SLC"
    }),
    new can_land({
        "airplane_type_name": 190,
        "airport_code": "OAK"
    }),
    new can_land({
        "airplane_type_name": 707,
        "airport_code": "HNL"
    }),
    new can_land({
        "airplane_type_name": 707,
        "airport_code": "OAK"
    }),
    new can_land({
        "airplane_type_name": 707,
        "airport_code": "MDW"
    }),
    new can_land({
        "airplane_type_name": 707,
        "airport_code": "SJC"
    }),
    new can_land({
        "airplane_type_name": 727,
        "airport_code": "SMF"
    }),
    new can_land({
        "airplane_type_name": 727,
        "airport_code": "SJC"
    }),
    new can_land({
        "airplane_type_name": 727,
        "airport_code": "LAX"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "OAK"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "SFO"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "ORD"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "MDW"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "ONT"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "SMF"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "SJC"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "SAN"
    }),
    new can_land({
        "airplane_type_name": 737,
        "airport_code": "LAS"
    }),
    new can_land({
        "airplane_type_name": 747,
        "airport_code": "SFO"
    }),
    new can_land({
        "airplane_type_name": 747,
        "airport_code": "JFK"
    }),
    new can_land({
        "airplane_type_name": 747,
        "airport_code": "ORD"
    }),
    new can_land({
        "airplane_type_name": 747,
        "airport_code": "MSP"
    }),
    new can_land({
        "airplane_type_name": 747,
        "airport_code": "DEN"
    }),
    new can_land({
        "airplane_type_name": 757,
        "airport_code": "LAS"
    }),
    new can_land({
        "airplane_type_name": 757,
        "airport_code": "PHX"
    }),
    new can_land({
        "airplane_type_name": 757,
        "airport_code": "DCA"
    }),
    new can_land({
        "airplane_type_name": 757,
        "airport_code": "LAX"
    }),
    new can_land({
        "airplane_type_name": 757,
        "airport_code": "HNL"
    }),
    new can_land({
        "airplane_type_name": 777,
        "airport_code": "ORD"
    }),
    new can_land({
        "airplane_type_name": 777,
        "airport_code": "LAX"
    }),
    new can_land({
        "airplane_type_name": 777,
        "airport_code": "IAD"
    }),
    new can_land({
        "airplane_type_name": 787,
        "airport_code": "IAH"
    }),
    new can_land({
        "airplane_type_name": 787,
        "airport_code": "JFK"
    }),
    new can_land({
        "airplane_type_name": 787,
        "airport_code": "EWR"
    }),
    new can_land({
        "airplane_type_name": "A321",
        "airport_code": "DFW"
    }),
    new can_land({
        "airplane_type_name": "A321",
        "airport_code": "DEN"
    }),
    new can_land({
        "airplane_type_name": "A332",
        "airport_code": "OAK"
    }),
    new can_land({
        "airplane_type_name": "A332",
        "airport_code": "HNL"
    }),
    new can_land({
        "airplane_type_name": "A320",
        "airport_code": "JFK"
    }),
    new can_land({
        "airplane_type_name": "A320",
        "airport_code": "LAX"
    }),
    new can_land({
        "airplane_type_name": "A320",
        "airport_code": "IAH"
    }),
    new can_land({
        "airplane_type_name": "A319",
        "airport_code": "SLC"
    }),
    new can_land({
        "airplane_type_name": "A319",
        "airport_code": "PHX"
    }),
    new can_land({
        "airplane_type_name": "A319",
        "airport_code": "MSP"
    }),
    new can_land({
        "airplane_type_name": "A319",
        "airport_code": "SFO"
    }),
    new can_land({
        "airplane_type_name": "A319",
        "airport_code": "MDW"
    })
]


let done = 0
for (let i = 0; i < can_lands.length; i++) {
    can_lands[i].save(function (err, result) {
        done = done + 1;
        if (done === can_lands.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}