const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const UsersShema = new Schema({
  name:{
    type:String,
    required:true
  }
})
module.exports = users = mongoose.model('users',UsersShema)