var express = require('express')
var app = express();
var mongoose = require("mongoose")
var personModel = require('./models/User')

// activate environment variables
var dotenv = require('dotenv')
dotenv.config({ path: './config/.env' })
let port = process.env.PORT
mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('error while connection to db --> : ', err)
        } else {
            console.log('connected successfully to the DB')
        }
    }


    
)

let user = new personModel({
    name: "Youssef",
    address: "Zaghouan",
    email: "youssefmellef@yahoo.fr",
    password: "123",
    text: "Hi everyone"
})
user.save((e) => console.log(e.name, " saved !"))

app.get('/usersList', function(req, res) {
    var users = {};

    users.find({}, function (err, user) {
        users[user._id] = user;
    });

    res.send(users);
});


app.listen(port, () => console.log('app connected to port'))