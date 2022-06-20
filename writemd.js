// 同步打开写入文件
const fs = require('fs')
const hellomd = fs.openSync('hello.md','w')
console.log(hellomd);
fs.writeSync(hellomd,'# hello',0)
fs.closeSync(hellomd) 

//异步写入
fs.open('hello.md','w',(err,fd)=>{
  if(!err){
    //打开成功
    fs.write(fd,'# text',(err,fd)=>{
      if(!err){
        console.log("写入成功");
      }
    })
  }else{
    console.log(err);
  }
})
// fs.readFile(file,(err,data)=>{
//   console.log(file);
// })