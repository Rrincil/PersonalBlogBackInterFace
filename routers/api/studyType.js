const express = require('express')
const Route = express.Router()
const studyTypes = require('../../moudels/studyType')
Route.get('/insertmes',(req,res)=>{
  const name = 'xx'
  const newstudyTypes = new studyTypes({
    name
  })
  studyTypes.findOne({name})
    .then(mes=>{
      if(!mes){
        newstudyTypes.save()
        res.json('成功')
      }
  })
})
Route.get('/allmes',(req,res)=>{
  studyTypes.find().then(mes=>{
    res.json(mes)
  })
})
module.exports = Route