const Home = require("../models/Home");
const fs = require("fs");
const Favourite = require("../models/Favourite");

exports.getAirbnb = (req, res, next) => {
  Home.fetchAllHome((registeredHomes) => {
    res.render("store/airbnb-home", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAllHome((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) return res.redirect("/homes");

    res.render("store/home-details", { home: home, pageTitle: "home details" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAllFavourites((favouriteHomesId) => {
    Home.fetchAllHome((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favouriteHomesId.includes(home.id)
      );
      res.render("store/favourites", {
        homes: favouriteHomes,
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.AddToFavourites(homeId, (error) => {
    if (error) {
      console.log("error while adding to favourite : ", error);
    }
    res.redirect("/favourites");
  });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, (error) => {
    if (error) {
      console.log("error while deleting from favourites : ", error);
    }
    res.redirect("/favourites");
  });
};
