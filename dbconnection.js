const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/test';

function setConnection() {
    mongoose.connect(connectionString).then(()=> {
        console.log('connection establised');
    }).catch(err => {
        console.log(`${err} in connection`)
    });
    
}

module.exports = setConnection;