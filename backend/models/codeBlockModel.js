const mongoose = require('mongoose')

const Schema = mongoose.Schema

const codeBlockSchema = new Schema({
    title:{ //codeBlock name
        type:String,
        required:true
    },
    code:{ //the code as a string
        type:String,
        required:true
    }
})

module.exports = mongoose.model('CodeBlock' , codeBlockSchema)  