
const express=require('express');
const path=require('path');
const storeRouter=express.Router();
const rootDir=require('../utils/path-util')

storeRouter.get("/", (req,res,next) => {
  // res.send(`
  // <!DOCTYPE html>
  // <html lang="en">   
  // <head>
  //   <meta charset="UTF-8">
  //   <title>Hamara airbnb</title>
  //   <link rel="stylesheet" href="/styles/output.css">
  // </head>
  // <body class="min-h-screen bg-gray-100">
  //   <div class="container mx-auto px-4 py-8">
  //     <h1 class="text-4xl font-bold text-blue-600 mb-8 text-center">Welcome to Hamara airbnb</h1>
  //     <div class="flex justify-center">
  //       <a href="/host/add-home" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
  //         Add Home
  //       </a>
  //     </div>
  //   </div>
  // </body>
  // </html>`)

  // res.sendFile(path.join(__dirname,"../views","airbnb-home.html"));


  res.sendFile(path.join(rootDir,"views","airbnb-home.html"));


});


module.exports=storeRouter;
