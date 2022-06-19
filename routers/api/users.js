const express = require('express')
const users = require('../../moudels/user')
const Route = express.Router()
Route.get('/',(req,res)=>{
  res.json({mes:'users'})
})

Route.get('/allmes',(req,res)=>{
  users.find().then(mes=>{
    res.json({mes})
  })
})
module.exports = Route