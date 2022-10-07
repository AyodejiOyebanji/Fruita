const mongoose = require("mongoose");
const bcrypt = require('bcryptjs') 


const userSchema=new mongoose.Schema(
    {
        name:{type:String, required:true, },
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        isAdmin:{type:Boolean, default:false, required:true}

    },
    {
        timestamps:true,
    }
)
// Hashed password
const saltRound=10
userSchema.pre('save', function(next){
 bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
     if(err){
         console.log(err);
         
     }else{
         this.password=hashedPassword
            next()
         
     }
 })
    
})
const User= mongoose.model("User", userSchema)
module.exports = User