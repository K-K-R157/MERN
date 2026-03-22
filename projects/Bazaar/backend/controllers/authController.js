const { firstNameValidation, lastNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, userTypeValidation } = require("./validations");
const bcrypt=require('bcryptjs');
const User=require('../model/User');
const { validationResult } = require("express-validator");
const jwt=require('jsonwebtoken');

exports.signup=[
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    userTypeValidation,

    async (req,res,next)=>{

        const {firstName,lastName,email,password,userType}=req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errorMessages: errors.array().map(err=>err.msg)});
        }
        try{
            const hashedPassword=await bcrypt.hash(password,10);
            const user=new User({firstName,lastName,email,password:hashedPassword,userType});
            await user.save();
            res.status(201).json({message:"User created successfully"});
        } catch (error) {
            res.status(500).json({errorMessages: [error.message]});
        }

    }

]


exports.login = async (req,res,next)=>{
    const {email,password}=req.body;
   
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({errorMessages: ["Invalid email or password"]});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({errorMessages: ["Invalid email or password"]});
        }
        const token=jwt.sign({userId: user._id, userType: user.userType}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: "Login successful", token, userType: user.userType});

    } catch (error) {
        res.status(500).json({errorMessages: [error.message]});
    }

}

