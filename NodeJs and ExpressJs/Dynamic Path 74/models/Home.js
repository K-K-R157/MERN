const { json } = require('body-parser');
const rootDir=require('../utils/path-util');
const fs=require('fs');
const path=require('path');

 const homeFilePath = path.join(rootDir, "data", "homes.json");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }


  saveHome(callback) {
    this.id=Math.random().toString();
    Home.fetchAllHome(registeredHomes=>{
      registeredHomes.push(this);
      fs.writeFile(homeFilePath, JSON.stringify(registeredHomes),callback);
    });
  }

  
  static fetchAllHome(callback) {
    fs.readFile(homeFilePath, (error,data) => {
      if (error) callback([]);
      else callback(JSON.parse(data));
    });
  }

  static findById(homeId,callback){
    Home.fetchAllHome(homes=>{
      const home=homes.find(home=>home.id==homeId);
      callback(home);
    })
  }

};