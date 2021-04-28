const flight = require('./models/flight_legSchema')
const fares = require('./models/flight_legSchema')
const reservations = require('./models/reservationSchema')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/flight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const express = require('express')
const app = express()

app.get('/flights', function (req, res) {
    flight.find(function (err, result) {
        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            flights: result,
        })
        if (err) {
            res.status(500).json({
                error: err
            })
        }
    });
});

app.get('/flight', function (req, res) {
    const query = req.query.flight_number
    flight.find({flight_number: {$regex: query, $options: '$i'}}, function (err, result) {
        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            flights: result,
        })
        if (err) {
            res.status(500).json({
                error: err
            })
        }
    });
});

app.get('/fares', function (req, res) {
    fares.find({}, {flight_number: 1, fare_code: 1, amount: 1}, function (err, result) {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            fares: result
        })
    });
});

app.get('/reservations', function (req, res) {
    reservations.find({}, {flight_number: 1, date: 1, seat_number: 1, customer_name: 1}, function (err, result) {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            reservations: result
        })
    });
});

app.get('/invoice', function (req, res) {
    const query = req.query.customer_name
    reservations.find({customer_name: {$regex: query, $options: '$i'}}, {
        flight_number: 1,
        date: 1,
        fare: 1
    }, function (err, result) {
        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            reservations: result,
        })
        if (err) {
            res.status(500).json({
                error: err
            })
        }
    });
});

const PORT = process.env.PORT || 999;
app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})
