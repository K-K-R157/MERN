const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add your home",editing:false });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl,description} = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl,description);
  // newHome.saveHome().then(() => {
  newHome.saveHome().then(() => {
    res.render("host/home-added", { pageTitle: "Home hosted" });
  }).catch(error=>{
    console.log(error);
    res.redirect('/');
  })
};


exports.getHostHomes= (req, res, next) => {
  // Home.fetchAllHome().then(([registeredHomes]) => {
    Home.fetchAllHome().then((registeredHomes) => {
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
  // Home.findById(homeId).then(([homes])=>{
  Home.findById(homeId).then((home)=>{ 
    // console.log(homes);
    // const home=homes[0];
    if(!home){
      console.log('home not found for editing');
      return res.redirect('/host/host-homes');

    }
    res.render("host/edit-home", { pageTitle: "Edit your Home", home:home,editing:editing});

  })
};

exports.postEditHome = (req, res, next) => {
  const {id,houseName, price, location, rating, photoUrl,description } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl,description,id);
  // newHome._id=id;
  newHome.saveHome().then(() => {
    res.redirect('/host/host-homes');
  })
  .catch(error=>{
    console.log('error while updating home : ',error);
    res.redirect('/host/host-homes');
  })
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId).then(()=>{
    res.redirect('/host/host-homes');
  })
};

