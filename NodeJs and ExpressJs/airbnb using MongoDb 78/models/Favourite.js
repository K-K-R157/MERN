const { json } = require('body-parser');
const rootDir=require('../utils/path-util');
const fs=require('fs');
const path=require('path');
const {getDb}=require('../utils/mongodb-util');   


const favouriteFilePath= path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  constructor(homeId){
    this.homeId=homeId;
  }


  save(){
    const db=getDb();
    return db.collection('favourites').findOne({homeId:this.homeId})
    .then(existingFav=>{
      if(!existingFav){
        return  db.collection('favourites').insertOne(this);
      }
      return Promise.resolve();
    })
  }

  static fetchAllFavourites() {
    const db=getDb();
    return db.collection('favourites').find().toArray();
  }



  // static AddToFavourites(homeId){
  //   const db=getDb();  
  // }

   static deleteById(homeId){
    const db=getDb();
    return db.collection('favourites').deleteOne({homeId});
  }

};