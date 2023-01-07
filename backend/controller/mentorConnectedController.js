const mentorConnectedSchema = require("../models/mentorConnectedModel")
const mongoose = require('mongoose')
const { response, json } = require('express')

//get mentorConnected
const getIsConnected = async(req,res)=>{
    const isConnected = await mentorConnectedSchema.find({})

    res.status(200).json(isConnected)
}

//update a codeBlock
const updateIsConnected = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"id is WRONG"})
    }
    
    const isConnected = await mentorConnectedSchema.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!isConnected){
        return res.status(400).json({error:"id is WRONG"})
    }

    res.status(200).json(isConnected)

}

module.exports = {
    getIsConnected,
    updateIsConnected
}