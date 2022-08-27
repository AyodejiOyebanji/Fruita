
import express  from 'express';
import Product from "../model/product.model.js";
import User from "../model/user.model.js"

import data from "../data.js"

const rootRouter= express.Router()

rootRouter.get("/", async (req,res)=>{w
    await Product.remove({}) //to remove all products
    const createdProducts= await Product.insertMany(data.products);
    await User.remove({})
    const createdUsers= await User.insertMany(data.users);
    res.send({createdProducts,createdUsers})
})

export default rootRouter

