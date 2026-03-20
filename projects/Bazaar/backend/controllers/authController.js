const { firstNameValidation, lastNameValidation, emailValidation, passwordValidation, confirmPasswordValidation, userTypeValidation } = require("./validations");
const bcrypt=require('bcryptjs');
const User=require('../model/User');

exports.signup=[
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    userTypeValidation,

    async (req,res,next)=>{

        
        const {firstName,lastName,email,password,confirmPassword,userType}=req.body;
        
        try{
            const hashedPassword=await bcrypt.hash(password,10);
            const user=new User({firstName,lastName,email,password:hashedPassword,userType});
            await user.save();
            res.status(201).json({message:"User created successfully", user});
        } catch (error) {
            res.status(400).json({message:"Error creating user", error});
        }

    }

]