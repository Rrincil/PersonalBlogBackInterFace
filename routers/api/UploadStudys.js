const express = require('express')
const Route = express.Router()
const fs = require('fs')
const UploadStudys = require('../../moudels/UploadStudys')
/**
 * @router api/UploadStudys/insertmes
 * @desc 插入数据
 * @assess public 
 */
Route.post('insertmes',(req,res)=>{
  // 读取文件
  fs.read(req.file,(err,data)=>{
    if(!err){
      // 创建文件
      console.log(data);
      fs.open("./static"+req.filename,'w',(err,fd)=>{
        if(!err){
          // 写入文件,插入返回的数据
          fs.write(fd,data,(err,fd)=>{
            console.log("插入成功");
            res.json({mes:"插入成功"})
          })
        }else{
          console.log(err);
        }
      })
    }else{
      console.log(err);
    }
  })
})