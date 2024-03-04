const mongoose = require('mongoose');


const connectToMongo=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/g27')
    .then(()=>{
        console.log("connected to mongo")
    })
    .catch(()=>{
        console.log("connection refused")
    });
 }  
 
 module.exports={connectToMongo}
