const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const { authRouter } = require("./routers/authRouter");
const fetchUser = require("./middleware/fetchUser");     // added extra 
const multer=require('multer');



const rootDir = require("./utils/path-util");
const errorController = require("./controllers/errorController");
const mongoose = require("mongoose");

const session = require("express-session");
const mongodb_session = require("connect-mongodb-session");

const mongodb_url = "mongodb://127.0.0.1:27017/airbnb"; 

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "uploads"))); //  
app.use("/uploads",express.static(path.join(rootDir, "uploads")));  // 

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(multer({dest:'uploads/'}).single('photo'));              // cloudnary website to manage image and videos free

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'uploads/');
    //  cb(null,'public/images/');
  },
  filename:(req,file,cb)=>{
    // cb(null,new Date().toISOString + '_' + file.originalname);  give error

    const date = new Date().toISOString().replace(/:/g, '-');
    cb(null,date + '_' + file.originalname);  
  }
})

const fileFilter=(req,file,cb)=>{
  // if(file.mimetype==='image/jpg'){
  //   cb(null,true);
  // }else{
  //   cb(null,false);
  // }

   //const isValidFile = file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg';
  const isValidFile = ['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype);
  cb(null, isValidFile);
}

app.use(multer({storage:storage,fileFilter}).single('photo'));             


app.use((req, res, next) => {
  console.log("Request Received : ", req.url, req.method, req.body);
  next();
});



const mongodbStore=mongodb_session(session);

const sessionStore=new mongodbStore({
  uri:mongodb_url,
  collection:'sessions',
});



app.use(
  session({
    secret: "airbnb-secret",
    resave: false, 
    saveUninitialized: false, 
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
  })
);
app.use(fetchUser);      // added extra

app.use((req, res, next) => {         // added extra    
  res.locals.isLoggedIn = req.session.isLoggedIn;
  res.locals.user = req.user;
  next();
});

app.use(storeRouter);
app.use(authRouter);


app.use("/host", hostRouter);

app.use(errorController.get404);

const PORT = 3002;



mongoose.connect(mongodb_url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
