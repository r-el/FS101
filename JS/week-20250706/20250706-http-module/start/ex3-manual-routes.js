const http = require("http");

const PORT = 3000;

// Create a server that handles routes based on URL and method
const server = http.createServer((req, res) => {
  // Check for GET request to /hello
  if (req.method === "GET" && req.url === "/hello") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from GET");
  } 
  // Check for POST request to /hello
  else if (req.method === "POST" && req.url === "/hello") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from POST");
  }
  // All other requests
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not supported");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Try:");
  console.log("  GET  http://localhost:3000/hello");
  console.log("  POST http://localhost:3000/hello");
  console.log("  Any other URL or method will return 'Not supported'");
});
