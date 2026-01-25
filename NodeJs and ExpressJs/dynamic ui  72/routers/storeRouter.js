
const express=require('express');
const path=require('path');
const storeRouter=express.Router();
const rootDir=require('../utils/path-util');
const {registeredHomes}=require('./hostRouter');

storeRouter.get("/", (req,res,next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir,"views","airbnb-home.html"));
  res.render('airbnb-home',{homes:registeredHomes , pageTitle:'Hamara airbnb'});   
});


module.exports=storeRouter;
