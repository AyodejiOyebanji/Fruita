
const express = require('express');
const Product= require("../model/product.model.js");
const User = require("../model/user.model.js")

// import data from "../data.js"
const rootRouter= express.Router()

rootRouter.get("/", async (req,res)=>{w
    await Product.remove({}) //to remove all products
    const createdProducts= await Product.insertMany(data.products);
    await User.remove({})
    const createdUsers= await User.insertMany(data.users);
    res.send({createdProducts,createdUsers})
})
module.exports = rootRouter;
