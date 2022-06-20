const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema()
const UploadStudysSchema = new Schema({
  name:{
    type:String,
    required:true
  }
})
module.exports = UploadStudys = mongoose.model(UploadStudysSchema)