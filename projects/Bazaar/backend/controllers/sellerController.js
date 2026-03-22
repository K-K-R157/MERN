const Product = require("../model/Product");

exports.createProduct=async (req,res,next)=>{
    console.log(req.body);
    const {name,brand,price,description,category,rating}=req.body;
    const sellerId=req.userId; // Assuming userId is set in auth middleware

    if(!req.file){
        return res.status(400).json({message: "No image provided"});
    }

    const imageUrl=req.file.path;
    try{
        const product=new Product({name,brand,price,description,category,rating,imageUrl,seller: sellerId});
        await product.save();
        res.status(201).json({message:"Product created successfully", product});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }  
}

exports.getProducts=async (req,res,next)=>{
    const sellerId=req.userId; // Assuming userId is set in auth middleware
    try{
        const products=await Product.find({seller: sellerId});
        res.status(200).json({products});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

