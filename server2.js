const mysql = require('mysql')
const conn = mysql.createConnection({
  host:'101.201.220.43',
  port:"3306",
  user:'personalBlog',
  password:'',
  database:'personalblog',
  multipleStatements:true//允许在一个query中传递多个查询语句
})
conn.connect(err=>{
  if(err){
    console.log(err);
  }else{
    console.log('连接成功');
  }
})

//查询全部
let sqlQuery = "select * from users";
//插入数据
let sqlQuery2 = "INSERT INTO users(name,idusers) VALUES('yy',2)";
//删除数据
let sqlQuery3 = "Delete From users where(name='yy')";
//条件查询
let sqlQuery4 = "select name,idusers from users where(name='Rrincil')";
//更新数据
let sqlQuery5 = "Update users Set name = 'Rrincil222' Where idusers = 0";

conn.query(sqlQuery3,function(err,result){
    if(err){
        console.log(`SQL error: ${err}!`);
    }else{
        console.log(result);
        closeMysql(conn);
    }
});
//查询成功后关闭mysql
function closeMysql(conn){ 
    conn.end((err)=>{
        if(err){
            console.log(`mysql关闭失败:${err}!`);
        }else{
            console.log('mysql关闭成功!');
        }
});
}