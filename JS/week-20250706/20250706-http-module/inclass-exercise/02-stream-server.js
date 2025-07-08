const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyString = Buffer.concat(body).toString();
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Headers:`, req.headers);
    console.log(`Request Body: ${bodyString}`);

    // Set response headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    // Send response
    res.end("Hello from the stream server!");
  });

  req.on("error", (err) => {
    console.error(`Error in request: ${err.message}`);
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
