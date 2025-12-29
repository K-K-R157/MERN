const storeController=require('./../controllers/storeController');
const express=require('express');
const path=require('path');
const storeRouter=express.Router();
const rootDir=require('../utils/path-util');


storeRouter.get("/",storeController.getHome);


module.exports=storeRouter;
