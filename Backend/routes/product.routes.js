const  express  =require("express") ;
const Product =require("../model/product.model.js");
const dotenv =require("dotenv");
const cloudinary=require("cloudinary") 
dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET ,
  });

const productRouter=express.Router()
productRouter.get("/", async (req,res)=>{
    const products =await Product.find();
   
    
    res.send(products)
})
productRouter.get("/caption/:caption", async(req,res)=>{
    const product =await Product.findOne({caption:req.params.caption});
    if(product){
        res.send(product)
    }else{
        res.status(400).send({message:"Product Not Found"})
    }
  
})
productRouter.get("/:id", async (req,res)=>{
    const product = await Product.findById(req.params.id)
   
    
    if(product){
        res.send(product)
    }else{
        res.status(400).send({message:"Product Not Found"})
    }
  
})
productRouter.post("/uploadproduct", (req,res)=>{
    const productFile=req.body.image

    cloudinary.v2.uploader.upload(productFile,(err,result)=>{
        if(err){
            console.log("Unable to Upload File");
            res.send({message:"Unable to upload product ", status:false})
            
        }else{

           const productImage= result.secure_url;
           console.log(req.body);
           let data={...req.body, image: productImage}
        
           
             let form = new Product(data)
             form.save((err)=>{
                 if(err){
                     console.log(err.message);
                     
                    res.status(501).send({message:"Unable to Image at the moment, try again",status:false})
                 }else{
                    res.send({message:"Product Uploaded Successfully"})
                 }
             }
             )
          


        }
    });
    
    

    

})
//Review
productRouter.post("/:id/review", (req,res)=>{
//    console.log(req.body);
   
      Product.findOneAndUpdate({_id:req.params.id},{$push:{
        reviews:req.body}},(err,result)=>{
        if(err){
          res.send({message:"Unable to update your review, please try again", status:false})

            
        }else{
            res.send({message:"Review Updated successfully", status:true})
            
            
        }
    })
    
   
    

})

module.exports = productRouter