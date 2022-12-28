var mongoose = require ('mongoose')

let userSchema = mongoose.Schema({
    name: {
        type: String,
        require : true
    },
    address : String,
    email: {
        type: String,
        require : true,
        unique : true
    },
    password : String,
    text : String
})

module.exports = mongoose.model('user', userSchema)