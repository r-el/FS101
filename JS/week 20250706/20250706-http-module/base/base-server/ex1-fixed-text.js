// Exercise 1: Return a fixed text
const http = require("http");

const PORT = 3000;

// Create a server that always responds with a fixed text
const server = http.createServer((req, res) => {
  // Always respond with the same message regardless of the request
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Node Server!");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Server will always respond with 'Hello from Node Server!' regardless of the request");
});
