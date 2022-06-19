const express = require('express')
const users = require('../../moudels/user')
const Route = express.Router()
/**
 * @router get api/users
 * @desc 测试接口
 * @access public
 */
Route.get('/',(req,res)=>{
  res.json({mes:'users'})
})

/**
 * @router get api/users/allmes
 * @desc 返回所有数据
 * @access public
 */
Route.get('/allmes',(req,res)=>{
  users.find().then(mes=>{
    res.json({mes})
  })
})
module.exports = Route