const express=require('express');
const path=require('path');

const hostRouter=express.Router();

const rootDir=require('../utils/path-util')


// 1 st method

// hostRouter.get("/host/add-home",(req,res,next)=>{
//   res.send(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <title>Add Home</title>
//       <link rel="stylesheet" href="/styles/output.css">
//     </head>
//     <body class="min-h-screen bg-gray-100">
//       <div class="container mx-auto px-4 py-8">
//         <h1 class="text-4xl font-bold text-blue-600 mb-8 text-center">Add your Home</h1>
//         <div class="flex justify-center">
//           <form action="/host/add-home" method="POST" class="w-full max-w-md">
//             <input 
//               type="text" 
//               name="houseName"
//               placeholder="Name of your house"
//               class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//             <div class="flex justify-center">
//               <input 
//                 type="submit" 
//                 value="Add Home"
//                 class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
//               >
//             </div>
//           </form>
//         </div>
//       </div>
//     </body>
//     </html>`
//   )

  
// })

// hostRouter.post("/host/add-home", (req, res, next) => {
//   console.log(req.body);
//   res.send(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <title>Home Added</title>
//       <link rel="stylesheet" href="/styles/output.css">
//     </head>
//     <body class="min-h-screen bg-gray-100">
//       <div class="container mx-auto px-4 py-8">
//         <h1 class="text-4xl font-bold text-blue-600 mb-8 text-center">Home Added Successfully</h1>
//         <div class="flex justify-center">
//           <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
//             Go to Home
//           </a>
//         </div>
//       </div>
//     </body>
//     </html>`
//   )

// })


// 2nd method

// hostRouter.get("/host/add-home",(req,res,next)=>{
  
//   res.sendFile(path.join(__dirname,"../views","add-home.html"));
  
// })

// hostRouter.post("/host/add-home",(req,res,next)=>{
  
//   res.sendFile(path.join(__dirname,"../views","home-added.html"));
  
// })

// prefer this


// hostRouter.get("/host/add-home",(req,res,next)=>{
  
//   res.sendFile(path.join(rootDir,"views","add-home.html")); 
  
// })

// hostRouter.post("/host/add-home",(req,res,next)=>{
  
//   res.sendFile(path.join(rootDir,"views","home-added.html"));
  
// })

hostRouter.get("/add-home",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir,"views","add-home.html"));
  
})

hostRouter.post("/add-home",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir,"views","home-added.html"));
  
})





module.exports=hostRouter;

