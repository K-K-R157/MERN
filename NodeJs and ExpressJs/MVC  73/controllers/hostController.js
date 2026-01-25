// const {registeredHomes}=require('./../models/Home')
// const registeredHomes=[];

const Home = require("../models/Home"); 

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Host your home" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.saveHome((error) => {
    if (error) res.redirect("/");    
    else res.render("home-added", { pageTitle: "Home hosted" });
  });
};
