const { Router } = require('express')
const express = require('express')

const{getIsConnected,updateIsConnected} = require('../controller/mentorConnectedController')

const router = express.Router()

//GET isConnected
router.get('/',getIsConnected)

//UPDATE single code block
router.patch('/:id',updateIsConnected)

module.exports = router
