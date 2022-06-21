const express = require('express')
const Route = express.Router()
const fs = require('fs')
const multer=require('multer'); 
const upload=multer({dest:'uploads/'})
const path = require('path')
const UploadStudys = require('../../moudels/UploadStudys')

/**
 * @router get api/UploadStudys
 * @desc 测试接口
 * @assess public 
 */
Route.get('/',(req,res)=>{
  res.json({mes:'UploadStudys'})
})


/**
 * @router post api/UploadStudys/geturl
 * @desc 获取文件地址url
 * @assess public 
 */
 Route.post('/geturl',(req,res)=>{
  UploadStudys.findOne({filename:req.filename}).then(mes=>{
    res.json(mes)
  })
})

/**
 * @router post api/UploadStudys/insertmes
 * @desc 插入数据 并存入数据库
 * @assess public 
 */
Route.post('/insertmes',upload.single('mdfiles'),(req,res)=>{
  console.log(req.file);
  console.log(req.filename);

  // 读取文件
  fs.readFile(req.file.path,(err,data)=>{
    if(!err){
      // 创建文件
      console.log(data);
      // fs.open("./static"+req.filename,'w',(err,fd)=>{
      //   if(!err){
      //     // 写入文件,插入返回的数据
      //     fs.write(fd,data,(err,fd)=>{
      //       console.log("存入成功");
      //       // res.json({mes:"存入成功"})
      //       // fs.close(fd)
      //     })
      //   }else{
      //     console.log(err);
      //   }
      // })
      let extpname = '.md'
      let keepname = req.file.originalname
      fs.writeFile(path.join(__dirname,'../../static/md/'+keepname),data,(err)=>{
        if(!err){
          newUploadStudys = new UploadStudys({
            filename:keepname,
            fileUrl:`http://101.201.220.43:3002/md/${keepname}`
          })
          newUploadStudys.save()
          // res.json({path:`http://localhost:3002/md/${keepname}`})
          res.json({path:`http://101.201.220.43:3002/md/${keepname}`})

        }else{
          console.log(err);
        }
      })
    }else{
      console.log(err);
    }
  })
})
module.exports = Route