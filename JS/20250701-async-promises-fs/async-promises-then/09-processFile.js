// Exercise 9: Read File → Count Words → Save Result (Chained .then)
// Usage: node 09-processFile.js <inputPath> <outputPath>
const { readFile, writeFile } = require("fs").promises; // Import promise-based readFile and writeFile

const countWords = (text) => text.trim().split(/\s+/).length; // \s matches any whitespace character (space, tab, newline, etc.)

/**
 * Read a file, count the words in its content, and write the word count to another file.
 * @param {string} inputPath - The path to the input file to read.
 * @param {string} outputPath - The path to the output file to write the word count.
 * @returns {Promise<number>} - A Promise that resolves with the word count.
 */
const processFile = (inputPath, outputPath) =>
  // Read the input file
  readFile(inputPath, "utf-8").then((content) => {
    const count = countWords(content); // Count words

    // Write count to the output file
    return writeFile(outputPath, `Word count: ${count}\n`).then((/* and return the count */) => count);
  });

const input = process.argv[2] || "example_file.txt";
const output = process.argv[3] || "result.txt";

// Example usage:
processFile(input, output)
  .then((count) => {
    console.log(`Word count written to ${output}:`);
    console.log(`Word count: ${count}`);
  })
  .catch((err) => console.error("Error:", err.message));
