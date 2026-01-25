const { json } = require('body-parser');
const rootDir=require('../utils/path-util');
const fs=require('fs');
const path=require('path');

 const favouriteFilePath= path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  static fetchAllFavourites(callback) {
    fs.readFile(favouriteFilePath, (error,data) => {
      if (error) callback([]);
      else {
        // console.log(JSON.parse(data));
        callback(JSON.parse(data));}
    });
  }

  static AddToFavourites(homeId,callback){
    Favourite.fetchAllFavourites((registeredIds) => {
      registeredIds.push(homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(registeredIds), callback);
    });
  }

   static deleteById(homeId,callback){
      Favourite.fetchAllFavourites(homesId=>{
        const newHomesId=homesId.filter(homeid=>homeid!=homeId);
        fs.writeFile(favouriteFilePath, JSON.stringify(newHomesId),callback);
      })
    }
};