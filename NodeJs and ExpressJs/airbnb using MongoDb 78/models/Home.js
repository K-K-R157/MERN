const { json } = require('body-parser');
const Favourite = require('./Favourite');


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
  }


  saveHome() {
    
  }

  
  static fetchAllHome() {
  }

  static findById(homeId){
  }

  static deleteById(homeId){
  }
};