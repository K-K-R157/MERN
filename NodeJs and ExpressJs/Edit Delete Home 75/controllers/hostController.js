const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  // res.render("host/add-home", { pageTitle: "Add your home",editing:false });
  res.render("host/edit-home", { pageTitle: "Add your home",editing:false });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.saveHome((error) => {
    if (error) res.redirect("/");
    else res.render("host/home-added", { pageTitle: "Home hosted" });
  });
};


exports.getHostHomes= (req, res, next) => {   
  Home.fetchAllHome((registeredHomes) => {
    res.render("host/host-homes", {
      homes: registeredHomes,
      pageTitle: "Host Homes",
    });
  });
};


exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  // const editing = req.query.editing;
  const editing = req.query.editing==='true';
  if(!editing){
    console.log('editing flag not set properly');
    return res.redirect('/host/host-homes');
  }
  Home.findById(homeId,home=>{
    if(!home){   
      console.log('home not found for editing');
      return res.redirect('/host/host-homes');

    }
    res.render("host/edit-home", { pageTitle: "Edit your Home", home:home,editing:editing});

  })
};

exports.postEditHome = (req, res, next) => {
  const {id,houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.id=id;
  newHome.saveHome((error) => {
    if (error) console.log('error while Updating home',error);
    res.redirect('/host/host-homes');
  });
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId,error=>{
    if(error)
      console.log('error while deleting home : ',error);
    
    res.redirect('/host/host-homes');
  })
};

