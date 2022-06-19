const express =  require("express") ;
const mongoose= require("mongoose") ;
// import Body
const users = require('./routers/api/users')
const MongoURL =  require('./config/MongoURL').MongoURL;
const app = express()
//连接mongodb
mongoose.connect(MongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology:true
}).then(res=>{
  if(res){
  console.log('连接数据库成功');
  }
}).catch(err=>{
  console.log(err);
})
//测试端口
app.get('/',(req,res)=>{
  res.json({mes:'jdjjd'})
})

// 使用users
app.use('/api/user',users)

//监听端口
app.listen(3001,()=>{
  console.log('已启动');
})