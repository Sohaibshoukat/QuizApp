const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    UserName:{
      type:String,
      required:true  
    },
    Password:{
      type:String,
      required:true
    }
})

mongoose.models={}
module.exports = mongoose.model("Admin",AdminSchema)