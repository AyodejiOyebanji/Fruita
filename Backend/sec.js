import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user._id.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

//Authentication
export const isAuth=(req,res,next)=>{
  const authorization =req.headers.authorization;
 
 if(authorization){
   const token= authorization.split(' ')[1]
   
   
   jwt.verify(
     token,
     process.env.JWT_SECRET,
     (err,decode)=>{
       if(err){
         res.status(401).send({message:"invalid Token "})
      
         
       }else{
         req.user=decode;
         next()
       }
     }
   )
 }else{
   res.send(401).send({message:"No token"})
 }
 
}