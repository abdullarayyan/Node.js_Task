const airplane_type = require('../models/flight')
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


const airplane_types = [
    new airplane_type({
        "airplane_type_name": "A320",
        "max_seats": 180,
        "company": "Airbus"
    }),
    new airplane_type({
        "airplane_type_name": "A319",
        "max_seats": 156,
        "company": "Airbus"
    }),
    new airplane_type({
        "airplane_type_name": "A321",
        "max_seats": 236,
        "company": "Airbus"
    }),
    new airplane_type({
        "airplane_type_name": "A332",
        "max_seats": 200,
        "company": "Airbus"
    }),
    new airplane_type({
        "airplane_type_name": 707,
        "max_seats": 189,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 737,
        "max_seats": 124,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 747,
        "max_seats": 550,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 757,
        "max_seats": 228,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 727,
        "max_seats": 189,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 767,
        "max_seats": 290,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 777,
        "max_seats": 440,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": 787,
        "max_seats": 323,
        "company": "Boeing"
    }),
    new airplane_type({
        "airplane_type_name": "ERJ145",
        "max_seats": 50,
        "company": "Embraer"
    }),
    new airplane_type({
        "airplane_type_name": 190,
        "max_seats": 114,
        "company": "Embraer"
    }),
    new airplane_type({
        "airplane_type_name": 170,
        "max_seats": 80,
        "company": "Embraer"
    }),
    new airplane_type({
        "airplane_type_name": "CRJ440",
        "max_seats": 44,
        "company": "Bombardier"
    }),
    new airplane_type({
        "airplane_type_name": "CRJ100",
        "max_seats": 50,
        "company": "Bombardier"
    }),
    new airplane_type({
        "airplane_type_name": "CRJ700",
        "max_seats": 78,
        "company": "Bombardier"
    }),
    new airplane_type({
        "airplane_type_name": "MD80",
        "max_seats": 166,
        "company": "McDonnell-Douglas"
    })

]

let done = 0
for (let i = 0; i < airplane_types.length; i++) {
    airplane_types[i].save(function (err, result) {
        done = done + 1;
        if (done === airplane_types.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}