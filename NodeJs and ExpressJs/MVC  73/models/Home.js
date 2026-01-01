const { json } = require('body-parser');
const rootDir=require('../utils/path-util');
const fs=require('fs');
const path=require('path');


// const registeredHomes=[];
// exports.registeredHomes=registeredHomes;

//  const registeredHomes=[];
 const homeFilePath = path.join(rootDir, "data", "homes.json");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // saveHome(){
  //   registeredHomes.push(this);
  // }

  // static fetchAllHome() {
  //   return registeredHomes;
  // }

  // give error

  // saveHome() {
  //   registeredHomes.push(this);
  //   fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), (error) => {
  //     if (error) console.log("error while writing file : ", error);
  //   });
  // }

  

  // static fetchAllHome() {
  //   fs.readFile(homeFilePath, (error,data) => {
  //     if (error) console.log("error while reading file : ", error);
  //     return JSON.parse(data);
  //   });
  // }


  saveHome(callback) {
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

};