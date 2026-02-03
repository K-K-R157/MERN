const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const { authRouter } = require("./routers/authRouter");


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
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
});

// app.use((req, res, next) => {
//   req.session.isLoggedIn=false;
//   next();
// });

// app.use((req, res, next) => {

//   if (req.headers.cookie) {
//     console.log(req.get('Cookie').split('=')[1]==='true');
//     req.session.isLoggedIn=req.get('Cookie').split('=')[1]='true';
//   } else {
//     console.log("No cookies found");
//   }
//   // req.isLoggedIn=req.get('Cookie').split('=')[1]='true';
//   next();
// });

// app.use(
//   session({
//     secret: "airbnb-secret",
//     resave: false,
//     saveUninitialized: true,
//   }),
// );




// saving session in mongodb

const mongodbStore=mongodb_session(session);

const sessionStore=new mongodbStore({
  url:mongodb_url,
  collection:'sessions',
});

app.use(
  session({
    secret: "airbnb-secret",
    resave: false,
    saveUninitialized: true,
    store:sessionStore,
  }),
);

app.use(storeRouter);
app.use(authRouter);

app.use("/host", (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});

app.use("/host", hostRouter);

app.use(errorController.get404);

const PORT = 3002;



mongoose.connect(mongodb_url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
