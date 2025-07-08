// Exercise 5: Extract Query Parameters
const { URL } = require("url");

const urlStr = 'https://site.com/products?id=15&type=book&lang=en';

// Create a new URL object
const myUrl = new URL(urlStr);

// Extract specific query parameters
const id = myUrl.searchParams.get('id');
const type = myUrl.searchParams.get('type');
const lang = myUrl.searchParams.get('lang');

// Print the extracted values
console.log("Exercise 5: Extract Query Parameters");
console.log("URL:", urlStr);
console.log("---");
console.log("ID:", id);
console.log("Type:", type);
console.log("Language:", lang);
