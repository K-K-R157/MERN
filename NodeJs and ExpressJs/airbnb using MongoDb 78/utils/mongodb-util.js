const mongodb=require('mongodb');

const MongoClient=mongodb.MongoClient;

const url="mongodb+srv://KKR:123Candle123%40@cluster0.xxbwcxp.mongodb.net/?appName=Cluster0";

let _db;

const mongoConnect=(callback)=>{
    MongoClient.connect(url)
    .then((client)=>{
        // console.log(client);
        _db=client.db("airbnb");
        callback();
    })
    .catch(error=>{
        console.log('error came while connecting to mongoDb',error);
    })
};

const getDb=()=>{
    if(!_db){
        throw new Error('Could not connect to Db');
    }
    return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;