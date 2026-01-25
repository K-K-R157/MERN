const { json } = require('body-parser');
const Favourite = require('./Favourite');
const {getDb}=require('../utils/mongodb-util');   
const { ObjectId } = require("mongodb");


module.exports = class Home {
  // constructor(houseName, price, location, rating, photoUrl,description) {
    constructor(houseName, price, location, rating, photoUrl,description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl; 
    this.description=description;

    if(_id){
      this._id=new ObjectId(String(_id));
    }
  }


  saveHome() {
    const db=getDb();
    // return db.collection('homes').insertOne(this).then(result=>{
    //   console.log(result);
    // });

    if(this._id){
      // return db.collection('homes').updateOne({_id:new ObjectId(String(this._Id))},{$set:this});
       return db.collection('homes').updateOne({_id:this._id},{$set:this});
    }
    else{
      return db.collection('homes').insertOne(this)
    }
  }

  
  static fetchAllHome() {
    const db=getDb();

    // return db.collection('homes').find().toArray()
    // .then(registeredHomes=>{
    //   console.log(registeredHomes);
    //   return registeredHomes;
    // })
    // .catch(error=>{
    //   console.log('Error came while fetching home : ',error);
    // });

    return db.collection('homes').find().toArray()

  }

  // static findById(homeId){
  //   const db=getDb();
  //   // return db.collection('homes').find({_id:homeId})
  //   return db.collection('homes').find({_id:new ObjectId(String(homeId))})
  //   .next().then(home=>{
  //     console.log(home);
  //     return home;
  //   })
  //   .catch(error=>{
  //     console.log('error came while find by id : ', error);
  //   })
  // }


  static findById(homeId){
    const db=getDb();
    return db.collection('homes').find({_id:new ObjectId(String(homeId))})
    .next();
  }

  static deleteById(homeId){
    const db=getDb();
    return db.collection('homes').deleteOne({_id:new ObjectId(String(homeId))})
  }
};