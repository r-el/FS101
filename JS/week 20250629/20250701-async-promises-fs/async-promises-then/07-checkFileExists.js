// Exercise 7: Check if File Exists (with .then and .catch)
const fs = require("fs");

/** Check if a file exists at the given path.
 * @param {string} path - The path to the file.
 * @returns {Promise<boolean>} - A Promise that resolves with true if the file exists, false otherwise.
 */
const checkFileExists = (path) =>
  fs.promises /* Since node v10.0.0 */
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);

// const checkFileExistsCallback = (path) =>
//   new Promise((res, rej) =>
//     fs.access(path, fs.constants.F_OK, (err) => (err ? rej(false) : res(true)))
//   );

// Example usage:
const filePath = "example_file.txt";
checkFileExists(filePath)
  .then((exists) => console.log("File exists:", exists))
  .catch((exists) => console.log("File exists:", exists));
