// Exercise 10: Get Data → Parse JSON → Show Title (Chained .then)
// Usage: node 10-getUserTitle.js <userId>

const https = require("https");

/* * Fetches user data
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<string>} A promise that resolves with the user data as a string.
 */
const fetchUserData = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${userId}`;
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", (err) => reject(err));
  });
};

const showTitle = (obj, userId) => {
  if (obj && obj.title) {
    console.log(`User ${userId}'s title: ${obj.title}`);
  } else {
    throw new Error("No title found");
  }
};

const parseJson = (data) => {
  try {
    return JSON.parse(data);
  } catch {
    throw new Error("Invalid JSON");
  }
};

/* * Fetches user data, parses it, and shows the title.
 * @param {number} userId - The ID of the user to fetch.
 */
const getUserTitle = (userId) => {
  fetchUserData(userId)
    .then(parseJson)
    .then((obj) => showTitle(obj, userId))
    .catch((err) => {
      console.error("Error:", err.message);
    });
};

// Example usage:
const userId = 7;
getUserTitle(userId);
