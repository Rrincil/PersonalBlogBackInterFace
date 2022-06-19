const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const UsersShema = new Schema({
  name:{
    type:String,
    require:true
  }
})
module.exports = users = mongoose.model('users',UsersShema)