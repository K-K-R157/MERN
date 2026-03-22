const express=require('express');
const sellerController=require('../controllers/sellerController');
const multer=require('multer');


const sellerRouter=express.Router();

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'uploads/');
  },
  filename:(req,file,cb)=>{
    const date = new Date().toISOString().replace(/:/g, '-');
    cb(null,date + '_' + file.originalname);  
  }
})

sellerRouter.post('/products',multer({storage:storage}).single('image'),sellerController.createProduct);
sellerRouter.get('/products',sellerController.getProducts);


module.exports=sellerRouter;