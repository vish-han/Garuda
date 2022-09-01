const mongoose=require('mongoose');
const{Schema} = mongoose

const UserSchema = new Schema({
    name:{type:"string",require:true},
    password:{type:"string",require:true},
    college:{type:"string",require:true},
    date: { required: true, type: Date, default: Date.now },
    email:{type:"string",require:true},
    isStudent:{type:"boolean",required:true,default:true},
    isOraganizer:{type:"boolean",required:false,default:false},

})
const User = mongoose.model("User", UserSchema);
module.exports = User;  