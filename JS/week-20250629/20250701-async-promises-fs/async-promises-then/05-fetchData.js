// Exercise 5: Get Data from Website (with .then)
const https = require("https");

/**
 * Fetch data from a URL using HTTPS module and return it as a Promise.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<string>} - A Promise that resolves with the fetched data as a string.
 */
const fetchData = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        // Every time a chunk of data is received, add it to the data variable
        response.on("data", (chunk) => (data += chunk));

        response.on("end", () => resolve(data));
      })
      .on("error", (err) => reject(err));
  });

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(url)
  .then((data) => {
    console.log(`Received data from ${url}:`);
    console.log(data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err.message);
  });
