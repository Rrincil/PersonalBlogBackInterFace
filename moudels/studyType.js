const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StudyTypeSchema = new Schema({
  name:{
    type:String,
    require:true
  }
})
module.exports = studyTypes = mongoose.model('studyTypes',StudyTypeSchema)