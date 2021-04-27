const airport = require('../models/flight')
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

const airports =[
    new airport({
        airport_code: 'SFO',
        name: 'San-Francisco-International',
        city: 'San-Francisco',
        state: 'CA'

    }),
    new airport({
        airport_code: 'SFO',
        name: 'San-Francisco-International',
        city: 'San-Francisco',
        state: 'CA'

    }),
    new airport({
        airport_code: 'OAK',
        name: 'Oakland-International',
        city: 'Oakland',
        state: 'CA'
    }),
    new airport({
        airport_code: ' LAS',
        name: 'McCarren-International',
        city: 'Las-Vegas',
        state: 'NV'
    }),
//	HNL, Honolulu-International, Honolulu, HI
    new airport({
        airport_code: ' HNL',
        name: 'Honolulu-International',
        city: 'Honolulu',
        state: 'HI'
    }),
    //	JFK, John-F-Kennedy-International, New-York, NY
    new airport({
        airport_code: 'JFK',
        name: 'John-F-Kennedy-International',
        city: 'New-York',
        state: 'NY'
    }),
//    	FAT, Fresno-Yosemite-International, Fresno, CA
    new airport({
        airport_code: 'FAT',
        name: 'Fresno-Yosemite-International',
        city: 'Fresno',
        state: 'CA'
    }),
    new airport({
        airport_code: 'MSY',
        name: ' Louis-Armstrong',
        city: 'New-Orleans',
        state: 'LA'
    }),
    new airport({
        airport_code: 'ORD',
        name: ' Chicago-OHare-International',
        city: 'Chicago',
        state: 'IL'
    }),
    new airport({
        airport_code: 'MDW',
        name: 'Midway',
        city: 'Chicago',
        state: 'IL'
    }),
    new airport({
        airport_code: 'SMF',
        name: 'Sacramento-International',
        city: 'Sacramento',
        state: 'CA'
    }),
    new airport({
        airport_code: 'SCK',
        name: 'Stockton-Metropolitan',
        city: 'Stockton',
        state: 'CA'
    }),
    new airport({
        airport_code: 'PHX',
        name: 'Phoenix-Sky-Harbor',
        city: 'Phoenix',
        state: 'AZ'
    }),
    new airport({
        airport_code: 'DEN',
        name: 'Denver-Interational',
        city: 'Denver',
        state: 'CO'
    }),
    new airport({
        airport_code: 'EWR',
        name: 'Newark-International',
        city: 'Newark',
        state: 'NJ'
    }),
    new airport({
        airport_code: 'IAH',
        name: 'Bush-Intercontinental',
        city: 'Houston',
        state: 'TX'
    }),
    new airport({
        airport_code: 'LAX',
        name: 'Los-Angeles-International',
        city: 'Los-Angeles',
        state: 'CA'
    }),
    new airport({
        airport_code: 'DCA',
        name: 'Ronald-Reagan-National',
        city: 'Arlington',
        state: 'CV'
    }),
    new airport({
        airport_code: 'IAD',
        name: ' Washington-Dulles-Internationall',
        city: 'Dulles',
        state: 'VA'
    }),
    new airport({
        airport_code: 'MSN',
        name: ' Dane-County-Regional',
        city: 'Madison',
        state: 'WI'
    }),
    new airport({
        airport_code: 'MSP',
        name: '  Minneapolis-St-Paul',
        city: 'Minneapolis-St-Paul',
        state: 'MN'
    }),
    new airport({
        airport_code: 'SLC',
        name: 'Salt-Lake-City-International',
        city: 'Salt-Lake-City',
        state: 'UT'
    }),
    new airport({
        airport_code: 'DFW',
        name: 'Dallas-Fort-Worth',
        city: 'DFW',
        state: 'TX'
    }),
    new airport({
        airport_code: 'SAN',
        name: 'San-Diego-International',
        city: 'San-Diego',
        state: 'CA'
    }),
    new airport({
        airport_code: 'IWA',
        name: 'Phoenix-Mesa-Gateway',
        city: 'Phoenix',
        state: 'AZ'
    }),
    new airport({
        airport_code: 'SJC',
        name: 'San-Jose-International',
        city: 'San-Jose',
        state: 'CA'
    }),
    new airport({
        airport_code: 'ONT',
        name: 'Ontario-International',
        city: 'Ontario',
        state: 'CA'
    }),
]

// for (let i=0;i<airports.length;i++){
//     airports[i].save();
// }
// mongoose.disconnect()

let done = 0
for (let i = 0; i < airports.length; i++) {
    airports[i].save(function (err, result) {
        done = done + 1;
        if (done === airports.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect()
}