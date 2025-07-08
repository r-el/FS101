// Exercise 3: Return the request headers
const http = require("http");

const PORT = 3000;

// Create a server that returns all request headers as JSON
const server = http.createServer((req, res) => {
  // Return all request headers as a JSON string
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.headers, null, 2));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Server will return all request headers as JSON");
});
