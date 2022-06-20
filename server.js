const express =  require("express") ;
const mongoose= require("mongoose") ;
const MongoURL =  require('./config/MongoURL').MongoURL;
const app = express()
const path = require('path')
// import Body
const users = require('./routers/api/users')
const studyTypes = require('./routers/api/studyType')
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
//配置静态资源文件
app.use(express.static(path.join(__dirname,"./static")))

// 使用users
app.use('/api/user',users)
//使用studyTypes
app.use('/api/studyTypes',studyTypes)

//监听端口
app.listen(3001,()=>{
  console.log('已启动');
})