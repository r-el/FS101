// Exercise 4: Parse and Log URL Parts
const { URL } = require("url");

const urlStr = 'http://localhost:3000/users/list?role=admin&active=true#top';

// Create a new URL object
const myUrl = new URL(urlStr);

// Log the different parts of the URL
console.log("URL:", urlStr);
console.log("---");
console.log("Hostname:", myUrl.hostname);
console.log("Pathname:", myUrl.pathname);
console.log("Protocol:", myUrl.protocol);
console.log("Query:", myUrl.search);
console.log("Hash:", myUrl.hash);
