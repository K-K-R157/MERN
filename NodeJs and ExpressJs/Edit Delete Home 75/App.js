const fs = require('fs');
const path=require('path');
const express = require("express");
const bodyParser = require("body-parser");
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir=require('./utils/path-util');
const errorController=require('./controllers/errorController');

const app = express();
app.set('view engine','ejs');  
app.set('views','views');

app.use(express.static(path.join(rootDir,"public")));
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method,req.body);  
  next();
});


app.use(storeRouter);


app.use("/host",hostRouter);

app.use(errorController.get404);


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});