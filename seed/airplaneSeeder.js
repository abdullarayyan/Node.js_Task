const airplane = require('../models/flight_legSchema')
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

const airplanes = [
    
    new airplane({
        "airplane_id": 1,
        "total_number_of_seats": 180,
        "airplane_type": "A320"
    }),
    new airplane({
        "airplane_id": 2,
        "total_number_of_seats": 175,
        "airplane_type": "A320"
    }),
    new airplane({
        "airplane_id": 3,
        "total_number_of_seats": 156,
        "airplane_type": "A319"
    }),
    new airplane({
        "airplane_id": 4,
        "total_number_of_seats": 150,
        "airplane_type": "A319"
    }),
    new airplane({
        "airplane_id": 5,
        "total_number_of_seats": 145,
        "airplane_type": "A319"
    }),
    new airplane({
        "airplane_id": 6,
        "total_number_of_seats": 188,
        "airplane_type": 707
    }),
    new airplane({
        "airplane_id": 7,
        "total_number_of_seats": 187,
        "airplane_type": 707
    }),
    new airplane({
        "airplane_id": 8,
        "total_number_of_seats": 124,
        "airplane_type": 727
    }),
    new airplane({
        "airplane_id": 9,
        "total_number_of_seats": 123,
        "airplane_type": 737
    }),
    new airplane({
        "airplane_id": 10,
        "total_number_of_seats": 120,
        "airplane_type": 737
    }),
    new airplane({
        "airplane_id": 11,
        "total_number_of_seats": 550,
        "airplane_type": 747
    }),
    new airplane({
        "airplane_id": 12,
        "total_number_of_seats": 500,
        "airplane_type": 747
    }),
    new airplane({
        "airplane_id": 13,
        "total_number_of_seats": 225,
        "airplane_type": 757
    }),
    new airplane({
        "airplane_id": 14,
        "total_number_of_seats": 290,
        "airplane_type": 767
    }),
    new airplane({
        "airplane_id": 15,
        "total_number_of_seats": 285,
        "airplane_type": 767
    }),
    new airplane({
        "airplane_id": 16,
        "total_number_of_seats": 440,
        "airplane_type": 777
    }),
    new airplane({
        "airplane_id": 17,
        "total_number_of_seats": 323,
        "airplane_type": 787
    }),
    new airplane({
        "airplane_id": 18,
        "total_number_of_seats": 50,
        "airplane_type": "ERJ145"
    }),
    new airplane({
        "airplane_id": 19,
        "total_number_of_seats": 50,
        "airplane_type": "ERJ145"
    }),
    new airplane({
        "airplane_id": 20,
        "total_number_of_seats": 110,
        "airplane_type": 190
    }),
    new airplane({
        "airplane_id": 21,
        "total_number_of_seats": 80,
        "airplane_type": 170
    }),
    new airplane({
        "airplane_id": 22,
        "total_number_of_seats": 44,
        "airplane_type": "CRJ440"
    }),
    new airplane({
        "airplane_id": 23,
        "total_number_of_seats": 40,
        "airplane_type": "CRJ440"
    }),
    new airplane({
        "airplane_id": 24,
        "total_number_of_seats": 50,
        "airplane_type": "CRJ100"
    }),
    new airplane({
        "airplane_id": 25,
        "total_number_of_seats": 70,
        "airplane_type": "CRJ700"
    }),
    new airplane({
        "airplane_id": 26,
        "total_number_of_seats": 75,
        "airplane_type": "CRJ700"
    }),
    new airplane({
        "airplane_id": 27,
        "total_number_of_seats": 77,
        "airplane_type": "CRJ700"
    }),
    new airplane({
        "airplane_id": 28,
        "total_number_of_seats": 166,
        "airplane_type": "MD80"
    }),
    new airplane({
        "airplane_id": 29,
        "total_number_of_seats": 200,
        "airplane_type": "A321"
    }),
    new airplane({
        "airplane_id": 30,
        "total_number_of_seats": 180,
        "airplane_type": "A332"
    }),
    new airplane({
        "airplane_id": "}",
        "total_number_of_seats": "",
        "airplane_type": ""
    })

]


let done = 0
for (let i = 0; i < airplanes.length; i++) {
    airplanes[i].save(function (err, result) {
        done = done + 1;
        if (done === airplanes.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}