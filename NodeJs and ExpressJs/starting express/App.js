// // Core Module
// // const http = require('http');

// // Local Module
// // const {handler} = require('./RequestHandler');

// //External Module
// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//   console.log("first middleware ", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("second middleware ", req.url, req.method);
//   // next();

//   res.send("<h1>Complete Cding </h1>");
// });

// // const server = http.createServer(app);

// const PORT = 3002;

// // server.listen(PORT, () => {
// //   console.log(`Server running at: http://localhost:${PORT}`);
// // });

// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}`);
// });








const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("first middleware ", req.url, req.method);
//   next();
// });

// app.use('test',(req, res, next) => {
//   console.log("/test","second middleware ", req.url, req.method);
//   // next();

//   res.send("<h1>Complete Cding </h1>");
// });


app.use('/',(req, res, next) => {
  console.log("first middleware ", req.url, req.method);
  next();
});

app.use("/test",(req, res, next) => {
  console.log("second middleware ", req.url, req.method);
  // next();

  res.send("<h1>Complete Cding </h1>");
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
