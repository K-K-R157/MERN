const Product = require("../model/Product");

exports.createProduct=async (req,res,next)=>{
    console.log(req.body);
    const {name,brand,price,description,category,rating}=req.body;

    if(!req.file){
        return res.status(400).json({message: "No image provided"});
    }

    const imageUrl=req.file.path;
    try{
        const product=new Product({name,brand,price,description,category,rating,imageUrl});
        await product.save();
        res.status(201).json({message:"Product created successfully", product});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }  
}