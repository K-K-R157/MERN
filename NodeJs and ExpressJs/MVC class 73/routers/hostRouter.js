const express=require('express');
const path=require('path');
const hostController=require('./../controllers/hostController');
const hostRouter=express.Router();
const rootDir=require('../utils/path-util');


hostRouter.get("/add-home",hostController.getAddHome)


hostRouter.post("/add-home",hostController.postAddHome)


exports.hostRouter=hostRouter;


