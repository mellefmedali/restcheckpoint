var express = require('express')
var app = express();
var mongoose = require("mongoose")

// activate environment variables
var dotenv = require('dotenv')
dotenv.config({path : './config/.env'})
let port = process.env.PORT
mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.DATABASE_URL,
    null
    ,
    (err) => {
        if (err) {
            console.log('error while connection to db --> : ', err)
        }else{
            console.log('connected successfully to the DB')
        }
    }
)


app.listen(port, () => console.log('app connected to port'))