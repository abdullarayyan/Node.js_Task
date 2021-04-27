const express = require('express')
const mongoose = require('mongoose');
const flight = mongoose.model('flight');
let router = express.Router()

router.get('/',(req,res)=>{
    res.json('sample text')
    flight.find((err, docs) => {
        if (!err) {
            res.render("/", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
})
router.get('/flights',(req,res)=>{

    
})
module.exports=router