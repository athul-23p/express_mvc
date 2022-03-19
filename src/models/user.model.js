const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {type:String, required:true},
    lastName: {type:String},
    gender : {type:String},
    dateOfBirth : {type:Date, required:true},
    type: {type:String,enum:['student','admin','instructor'],required:true}
},{
    versionKey:false,
    timestamps:true,
});

const User = mongoose.model('user',userSchema);

module.exports = User;