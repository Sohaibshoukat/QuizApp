const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    Email:{
      type:String,
      requird:true  
    },
    Date:{
        type:Date,
        default:Date.new
    }
})

mongoose.models={}
module.exports = mongoose.model("UserData",UserSchema)