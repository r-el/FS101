const http = require("http");

const PORT = 3000;

// Create a server on port 3000
const server = http.createServer((req, res) => {
  // Log the request method, URL, and HTTP version
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`HTTP Version: ${req.httpVersion}`);
  console.log('---');
  
  // Send a basic response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Request logged successfully!");
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Make requests to see the logged information");
});
