const flight = require('./models/flight')
const fares = require('./models/flight')
const reservations=require('./models/flight')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/flight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const express = require('express')

const flightController = require('./controller/flightController')

let app = express()
db = mongoose.connection;
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
app.get('/flight/number', function (req, res) {
    
    const query=req.query.flight_number
    flight.find({flight_number:{$regex:query,$options:'$i'}},function (err, result) {
        
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
//posts?:id
//posts?name
// /tutorials?title=js   /api/tutorials/:id:

// app.get('/flight/:id', function (req, res) {
//
//     flight.findOne({_id:req.params.id},function (err, result) {
//         if (err) {
//             res.status(500).json({
//                 error: err
//             })
//         }
//         res.status(200).json({
//             status: 200,
//             number_of_results: result.length,
//             flights: result,
//         })
//     });
// });
// app.get("/flightss/:name", async (req, res) => {
//     const post = await flight.findOne()
//     res.send(post)
//     Select Year, sum(Total)
//     from "Sales.Aggregation"
//     group by Year
//     order by Year asc
//     res.status(200).json({
//         status: 200,
//         number_of_results: post,
//         flights: post,
//     })
// })

app.get('/fares', function (req, res) {
    fares.find({},{flight_number:1,fare_code:1,amount:1},function (err, result) {
        if (err) {
            throw err;
        }
        
        res.status(200).json({
            
            status: 200,
            number_of_results: result.length,
            fares: result
        })
    });
});
//Flight_number, Leg_number, Date:date, Seat_number, Customer_name, Customer_phone
// flight_number, date, seat_number, and customer name.
app.get('/reservations', function (req, res) {
    reservations.find({},{flight_number:1,date:1,seat_number:1,customer_name:1},function (err, result) {
        if (err) {
            throw err;
        }
        
        res.status(200).json({
            
            status: 200,
            number_of_results: result.length,
            reservations: result
        })
    });
});


app.get('/r', function (req, res) {
    reservations.findOne({customer_name:'Osvaldo'}).populate('fares').exec(((err, result) => {
        
        if (err) console.log('err')
        console.log(result.fares[0].amount)
    }))

});


const PORT = process.env.PORT || 999;
app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const flight = require('./models/db')
//
// const url=mongoose.connect('mongodb://localhost:27017/flight', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
// const app = express();
// app.use(bodyParser.json())
// app.use('/', express.static(path.join(__dirname, 'public')));
// mongoose.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("flight");
//     //Find all documents in the customers collection:
//     dbo.collection("airplane ").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
//
// app.post('/f', async (req, res) => {
//     console.log("ddd")
//     res.json({status: 'ok'}
//     )
// })
// const PORT = process.env.PORT || 2000;
// app.listen(PORT, () => {
//     console.log(`server running ${PORT}`)
// });