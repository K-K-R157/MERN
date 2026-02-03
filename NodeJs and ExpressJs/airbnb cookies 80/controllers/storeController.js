const Home = require("../models/Home");
const fs = require("fs");
const Favourite = require("../models/Favourite");

exports.getAirbnb = (req, res, next) => {
    // console.log( 'islogin :',req.isLoggedIn);
  // Home.fetchAllHome().then((registeredHomes) => {
  Home.find().then((registeredHomes) => {
    res.render("store/airbnb-home", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
       isLoggedIn:req.isLoggedIn,
    });
  });
};

exports.getHomes = (req, res, next) => {  
  // Home.fetchAllHome().then((registeredHomes) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb", 
       isLoggedIn:req.isLoggedIn,   
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    // const home=homes[0];
    if (!home) return res.redirect("/homes");
    res.render("store/home-details", { home: home, pageTitle: "home details", isLoggedIn:req.isLoggedIn });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.find().populate("homeId").then((favIdHomes) => {
    const favouriteHomes = favIdHomes.map((favIdHome) => favIdHome.homeId);
    res.render("store/favourites", {
      homes: favouriteHomes,
      pageTitle: "Favourites",
       isLoggedIn:req.isLoggedIn, 
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav=new Favourite({homeId});
  fav.save().then(()=>{
    res.redirect("/favourites");
  })
  .catch(error=>{
    console('error while saving favourite : ',error);
    res.redirect("/favourites");
  })
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  // Favourite.findByIdAndDelete(homeId).then(() => {
  Favourite.findOneAndDelete({homeId}).then(() => {
    res.redirect("/favourites");
  })
  .catch(error=> {
      console.log("error while deleting from favourites : ", error);
      res.redirect("/favourites")
    });
};
