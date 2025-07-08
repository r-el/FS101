// Exercise 2: Read a File with Promise (with .then)
// Usage: node 02-readFileContent.js <filePath>
const fs = require("fs");

const readFileContent = (path) =>
  new Promise((res, rej) =>
    fs.readFile(path, "utf8", (err, data) => (err ? rej(err) : res(data)))
  );

const filePath = process.argv[2] || "example_file.txt";

readFileContent(filePath)
  .then((content) => {
    console.log(`Content of ${filePath}:`);
    console.log(content);
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });
