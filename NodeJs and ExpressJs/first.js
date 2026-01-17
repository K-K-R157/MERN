// const http = require('http');
// const fs = require('fs');

// const requestHandler = (req, res) => {
//   console.log('Request Received', req.url, req.method);
//   res.setHeader('Content-Type', 'text/html');

//   if (req.url === "/") {
//     res.write(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <title>Myntra</title>
//       </head>
//       <body>
//         <h1>Welcome to First Server</h1>
//         <form action="/buy-product" method="POST">
//           <input type="text" placeholder="Enter the product that you want" name="product">
//           <br />
//           <input type="text" placeholder="Enter your budget" name="budget">
//           <input type="submit">
//         </form>
//       </body>
//       </html>
//     `);
//   } else if (req.url === '/buy-product') {
//     console.log("Form data received.");
//     const buffer = [];
//     req.on('data', (chunk) => {
//       console.log(chunk);
//       buffer.push(chunk);
//     });
//     req.on('end', () => {
//       const body = Buffer.concat(buffer).toString();
//       console.log(body);
//     });

//     fs.writeFileSync('buy.txt', 'Myntra app');
//     res.statusCode = 302;
//     res.setHeader('Location', '/products');
//     console.log('Sending Response');
  
//   } else if (req.url === "/products") {
//     res.write(`
//       <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>Products</title>
//         </head>
//         <body>
//           <h1>Product list will appear here.</h1>
//         </body>
//         </html>
//       `);
//   } else {
//     res.statusCode = 404;
//     res.write(`
//       <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>Page Not Found</title>
//         </head>
//         <body>
//           <h1>404 Page Not Found</h1>
//         </body>
//         </html>
//       `);
//   }
//   res.end();
// }

// const server = http.createServer(requestHandler);
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${3001}`);
// });






// const http = require('http');

// console.log('I was here');

// const requestHandler = (req, res) => {
//   // console.log('Request Received :', req.url, req.method, req.headers);
//   console.log('Request Received :', req.url, req.method, req.headers);

//   res.setHeader('Content-Type', 'text/html');
//   // res.write('<!DOCTYPE html>');
//   // res.write('<html lang="en">');
//   // res.write('<head>');
//   // res.write('<title>Document</title>');
//   // res.write('</head>');
//   // res.write('<body>');
//   // res.write('<h1>Welcome to First Server</h1>');
//   // res.write('</body>');
//   // res.write('</html>');
//   res.write(`
//     <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <title>Document</title>
//       </head>
//       <body>
//         <h1>Welcome to First Server</h1>
//       </body>
//       </html>
//     `);
//   res.end();
//   // process.exit();
// }

// const server = http.createServer(requestHandler);
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${3001}`);
// });





// const http = require('http');
// const fs = require('fs');

// const requestHandler = (req, res) => {
//   console.log('Request Received', req.url, req.method);
//   res.setHeader('Content-Type', 'text/html');

//   if (req.url === "/") {
//     res.write(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <title>Myntra</title>
//       </head>
//       <body>
//         <h1>Welcome to First Server</h1>
//         <form action="/buy-product" method="POST">
//           <input type="text" placeholder="Enter the product that you want" name="product">
//           <br />
//           <input type="text" placeholder="Enter your budget" name="budget">
//           <input type="submit">
//         </form>
//       </body>
//       </html>
//     `);
//   } else if (req.url === '/buy-product') {
//     console.log("Form data received.");
//     const buffer = [];
//     req.on('data', (chunk) => {
//       console.log(chunk);
//       buffer.push(chunk);
//     });
//     req.on('end', () => {
//       const body = Buffer.concat(buffer).toString();
//       console.log(body);
//     });

//     fs.writeFileSync('buy.txt', 'Myntra app');
//     res.statusCode = 302;
//     res.setHeader('Location', '/products');
//     console.log('Sending Response');
  
//   } else if (req.url === "/products") {
//     res.write(`
//       <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>Products</title>
//         </head>
//         <body>
//           <h1>Product list will appear here.</h1>
//         </body>
//         </html>
//       `);
//   } else {
//     res.statusCode = 404;
//     res.write(`
//       <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>Page Not Found</title>
//         </head>
//         <body>
//           <h1>404 Page Not Found</h1>
//         </body>
//         </html>
//       `);
//   }
//   res.end();
// }

// const server = http.createServer(requestHandler);
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${3001}`);
// });



// Core Module
const http = require('http');

// Local Module
const {handler} = require('./RequestHandler');

const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`);
});