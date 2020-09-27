const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const userSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    ip_address:{
        type:String
    },
    gender:{
        type:String
    }
})


module.exports = mongoose.model('User', userSchema)