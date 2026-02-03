const fs = require('fs');
const path=require('path');
const express = require("express");
const bodyParser = require("body-parser");
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const {authRouter} = require('./routers/authRouter');

const rootDir=require('./utils/path-util');
const errorController=require('./controllers/errorController');
const mongoose=require('mongoose');

const app = express();
app.set('view engine','ejs');     
app.set('views','views');

app.use(express.static(path.join(rootDir,"public")));  
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method,req.body);  
  next();
});

// app.use((req, res, next) => {
//   req.isLoggedIn=false;
//   next();
// });



app.use((req, res, next) => {
  
  if (req.headers.cookie) {
    console.log(req.get('Cookie').split('=')[1]==='true');
    req.isLoggedIn=req.get('Cookie').split('=')[1]='true';
  } else {
    console.log("No cookies found");
  }
  next();
});


app.use(storeRouter);
app.use(authRouter);

app.use('/host',(req, res, next) => {
  if(!req.isLoggedIn){
    return res.redirect('/login');
  }
  next();
});


app.use("/host",hostRouter);

app.use(errorController.get404);


const PORT = 3002;

const mongoDb_Url='mongodb://127.0.0.1:27017/airbnb';

mongoose.connect(mongoDb_Url).then(()=>{
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
