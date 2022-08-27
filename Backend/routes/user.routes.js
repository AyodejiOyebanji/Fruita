import express from "express"
import User from "../model/user.model.js";
import  bcrypt  from 'bcryptjs';
import { generateToken, isAuth } from "../sec.js";
import expressAsyncHandular from "express-async-handler"
const userRouter =express.Router();



userRouter.post("/signin", expressAsyncHandular(async (req,res)=>{

    const user= await User.findOne({email:req.body.email})
    if (user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user)
            });
            return


        }
    }

    res.status(401).send({message:"Invalid email or password"})
}))


userRouter.post("/signup", (req,res)=>{

    const userDetails=req.body

    
    
    User.findOne({email:req.body.email},(err,result)=>{
        
        if(err){
            res.status(501).send({message:"Internal Server Error", status:false})
        }else{
            if(result){
                res.send({message:"Email already exist", status:false})
            }else{
                let form =new User(userDetails)
                console.log(form);
                
            
                
                form.save((err)=>{
                    if(err){
                     
                        
                        res.status(501).send({message:"Unable to SignUp, try again",status:false})
                    }else{
                       
                        
                        res.send({message:"Registration Successful", status: true, _id:form._id,
                                         name:form.name,
                                      email:form.email,
                                         isAdmin:form.isAdmin,
                                         token:generateToken(form)})

                    
                            

                    }
                })  
            }
        }
    })


})
// userRouter.post("/signup", expressAsyncHandular(async(req,res)=>{
//     const newUser = new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:bcrypt.hashSync(req.body.password)


//     })
//     const user=await newUser.save()
//      res.send({
//                 _id:user._id,
//                 name:user.name,
//                 email:user.email,
//                 isAdmin:user.isAdmin,
//                 token:generateToken(user)

//             });
// }))
userRouter.put("/profile", isAuth, expressAsyncHandular(async (req,res)=>{
    const user= await User.findById(req.user._id)
    
    if(user){
        user.name= req.body.name || user.name;
        user.email= req.body.email || user.email
        if(req.body.password){
            user.password = bcrypt.hashSync(req.body.password,10)
        }
        const updatedUser= await user.save();
        res.send({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            isAdmin:updatedUser.isAdmin,
            token:generateToken(updatedUser)
        })
    }else{
        res.status(404).send({message:"User Not Foundd"})
    }
}))
export default userRouter;