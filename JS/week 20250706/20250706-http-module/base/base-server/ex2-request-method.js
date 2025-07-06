// Exercise 2: Return the request method
const http = require("http");

const PORT = 3000;

// Create a server that returns the request method
const server = http.createServer((req, res) => {
  // Return the method used in the request
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`You used method: ${req.method}`);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Server will return the HTTP method used in the request");
});
