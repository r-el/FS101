const http = require("http");

const PORT = 3000;

// Create a server that responds based on headers and method
const server = http.createServer((req, res) => {
  // Check if method is POST and Content-Type is application/json
  if (req.method === "POST" && req.headers["content-type"] === "application/json") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("JSON accepted");
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Unsupported request");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Send POST requests with Content-Type: application/json to get 'JSON accepted'");
});
