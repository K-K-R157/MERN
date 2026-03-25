const express=require('express');
const customerController=require('../controllers/customerController');

const customerRouter=express.Router();

customerRouter.get('/data',customerController.getData);
customerRouter.post('/cart/:productId',customerController.addToCart);
customerRouter.delete('/cart/:productId',customerController.removeFromCart);
customerRouter.post('/order',customerController.createOrder);

module.exports=customerRouter;