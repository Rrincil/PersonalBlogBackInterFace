const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UploadStudysSchema = new Schema({
  filename:{
    type:String,
    required:true
  },
  fileUrl:{
    type:String,
    required:true
  }
})
module.exports = UploadStudys = mongoose.model('uploadStudys',UploadStudysSchema)