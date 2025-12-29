const Home=require('./../models/Home');
const fs=require('fs');


// exports.getHome=(req,res,next) => {
//   const registeredHomes=Home.fetchAllHome();
//   res.render('airbnb-home',{homes:registeredHomes, pageTitle:'Hamara airbnb'});
// }


exports.getHome=(req,res,next) => {
  Home.fetchAllHome(registeredHomes=>{
    res.render('airbnb-home',{homes:registeredHomes, pageTitle:'Hamara airbnb'});
  });
}





