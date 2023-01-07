const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mentorConnectedSchema = new Schema({
    isConnected:{ 
        type:Boolean,
        required:true
    },
})

module.exports = mongoose.model('mentorConnected' , mentorConnectedSchema)