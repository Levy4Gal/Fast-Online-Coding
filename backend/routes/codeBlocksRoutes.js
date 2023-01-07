const { Router } = require('express')
const express = require('express')

const{getCodeBlocks,
    getSingleCodeBlock,
    createCodeBlock,
    updateCodeBlock} = require('../controller/codeBlockController')

const router = express.Router()

//GET all code blocks
router.get('/',getCodeBlocks)

//GET a single code block
router.get('/:id' ,getSingleCodeBlock)

//POST a single code block
router.post('/',createCodeBlock)


//DELETE a single code block
router.delete('/:id',(req,res)=>{
    res.json({msssg:"DELETE single code blocks"})
})

//UPDATE single code block
router.patch('/:id',updateCodeBlock)

module.exports = router
