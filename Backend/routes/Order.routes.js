import  express  from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../model/order.model.js";
import { isAuth } from "../sec.js";




const orderRouter=express.Router();
//order 
orderRouter.post("/", isAuth, expressAsyncHandler(async(req,res)=>{

    
    
    const newOrder = new Order({
        orderItems:req.body.orderItems.map((x)=>({...x, product:x._id})),
        shippingAddress:req.body.shippingAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id, 

    });
    const order =await newOrder.save();
    res.status(201).send({message:"New Order Created", order})
}))

orderRouter.get("/history", isAuth, expressAsyncHandler(async(req,res)=>{
    const orders=await Order.find({user:req.user._id});
    res.send(orders)
}))
orderRouter.get("/:id", isAuth, expressAsyncHandler(async(req,res)=>{
   const order= await Order.findById(req.params.id)
   if(order){
       res.send(order)
   }else{
       res.status(404).send({message:"Order Not Found"})
   }
}))

orderRouter.put("/:id/pay", isAuth, expressAsyncHandler(async (req,res)=>{
    const order=await Order.findById(req.params.id);
    if(order){
        order.isPaid=true;
        order.paidAt=Date.now();
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            updated_time:req.body.updated_time,
            email_address:req.body.email_address
        }
        const updatedOrder= await order.save();
        res.send({message:"Order successful", order:updatedOrder})
    }else{
        res.status(404).send({message:"Order Not Found"})
    }
}))
export default orderRouter

//5:01:23