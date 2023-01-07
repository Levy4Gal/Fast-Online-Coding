const CodeBlock = require("../models/codeBlockModel")
const mongoose = require('mongoose')
const { response, json } = require('express')

//get all codeBlocks
const getCodeBlocks = async(req,res)=>{
    const codeBlocks = await CodeBlock.find({}).sort({createdAt:-1})

    res.status(200).json(codeBlocks)
}

//get single codeBlock
const getSingleCodeBlock = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"id is WRONG"})
    }
    const codeBlock = await CodeBlock.findById(id)

    if(!codeBlock){
        return res.status(400).json({error:"id is WRONG"})
    }

    res.status(200).json(codeBlock)
}

//create new codeBlock
const createCodeBlock = async (req,res)=>{
    const{title,code} = req.body

    try{
        const codeBlock = await CodeBlock.create({title,code})
        res.status(200).json(codeBlock)
    }catch(err){
        res.status(400).json({error:err.msssg})
    }
}


//update a codeBlock
const updateCodeBlock = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"id is WRONG"})
    }
    
    const codeBlock = await CodeBlock.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!codeBlock){
        return res.status(400).json({error:"id is WRONG"})
    }

    res.status(200).json(codeBlock)

}


module.exports = {
    getCodeBlocks,
    getSingleCodeBlock,
    createCodeBlock,
    updateCodeBlock,
}