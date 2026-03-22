// const ENV=process.env.NODE_ENV || 'production'
const ENV=process.env.NODE_ENV || 'development'
require('dotenv').config({
  path:`.env.${ENV}`
}); 

const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/errorController");
const mongoose = require("mongoose");
const sellerRouter = require('./routers/sellerRouter');
const cors=require('cors');
const authRouter = require('./routers/authRouter');
const mongodb_url=process.env.MONGO_DB_URL;
const app = express();
const { isLoggedIn, isSeller } = require('./middleware/auth');
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(cors());
app.use(express.json());
app.use('/api/seller',isLoggedIn, isSeller, sellerRouter);
app.use('/api/auth',authRouter);

app.use(errorController.get404);
app.use(authRouter)
const PORT = process.env.PORT || 3000;


mongoose.connect(mongodb_url)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);});
  })
  .catch(err => console.log("Mongoose Connection Error: ", err));
