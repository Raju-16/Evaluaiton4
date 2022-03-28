const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName:{type:String, require:true},
  lastName:{type:String, require:false},
  email:{type:String, require:true, unique:true},
  password:{type:String, require:true},

},{
    versionKey:false,
    timestamps:true
});

const User = mongoose.model("user", UserSchema);

module.exports = User;