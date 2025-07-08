// Exercise 6: Modify Query Parameters
const { URL } = require("url");

const urlStr = 'https://app.com/search?query=node&sort=asc';

// Create a new URL object
const myUrl = new URL(urlStr);

console.log("Exercise 6: Modify Query Parameters");
console.log("Original URL:", urlStr);
console.log("---");

// Change the sort parameter to 'desc'
myUrl.searchParams.set('sort', 'desc');
console.log("After changing sort to 'desc':", myUrl.toString());

// Add a new parameter page=3
myUrl.searchParams.set('page', '3');
console.log("After adding page=3:", myUrl.toString());

// Remove the query parameter
myUrl.searchParams.delete('query');
console.log("After removing query:", myUrl.toString());

console.log("---");
console.log("Final URL:", myUrl.toString());
