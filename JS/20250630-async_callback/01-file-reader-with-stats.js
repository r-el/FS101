import fs from "fs";

let filePath = "example_file.txt";

function readFileStats(filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Size: ${stats.size} bytes`);
    console.log("Created At:", new Date(stats.ctimeMs).toISOString());
  });
}

function readFileWithStats(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File Content:");
    console.log(data);
  });
}

readFileStats(filePath);
readFileWithStats(filePath);
