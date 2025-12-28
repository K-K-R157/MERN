const express=require('express');
const path=require('path');

const hostRouter=express.Router();

const rootDir=require('../utils/path-util');


hostRouter.get("/add-home",(req,res,next)=>{
  res.render('add-home',{pageTitle:'Host your home'});
})

const registeredHomes=[];

hostRouter.post("/add-home",(req,res,next)=>{
  // console.log(req.body);
  registeredHomes.push(req.body);
  res.render('home-added',{pageTitle:'Home hosted'});
  
})





// module.exports=hostRouter;
exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;


