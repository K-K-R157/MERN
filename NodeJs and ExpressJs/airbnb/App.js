const fs = require('fs');
const path=require('path');
const express = require("express");
const bodyParser = require("body-parser");
const hostRouter = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir=require('./utils/path-util');

const app = express();
app.use(express.static(path.join(rootDir,"public")));
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method,req.body);  
  next();
});

// app.use(hostRouter);
// app.use(storeRouter);   both can be possible because they are not dependent on each other and both have different adddress

app.use(storeRouter);
// app.use(hostRouter);


app.use("/host",hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
    res.send(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Page Not Found</title>
        </head>
        <body>
          <h1>404 Page Not Found</h1>
        </body>
        </html>
      `);
});


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});