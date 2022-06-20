const express = require('express')
const Route = express.Router()
const studyTypes = require('../../moudels/studyType')
const fs = require('fs')
/**
 * @router get api/studyTypes/insertmes
 * @desc 插入数据
 * @access public 
 */
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
      }else{
        const hellomd = fs.openSync('hello.md','w')
        console.log(hellomd);
        fs.writeSync(hellomd,'#hello',2)
        fs.closeSync(hellomd)
      }
  })
})
/**
 * @router api/studyTypes/allmes
 * @desc 获取所有数据
 * @accsess public
 */
Route.get('/allmes',(req,res)=>{
  studyTypes.find().then(mes=>{
    res.json(mes)
  })
})

module.exports = Route