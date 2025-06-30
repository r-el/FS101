import { stat, readFile } from "fs";

let filePath = "example_file.txt";

export function readFileStats(filePath) {
  stat(filePath, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Size: ${stats.size} bytes`);
    console.log("Created At:", new Date(stats.ctimeMs).toISOString());
  });
}

export function readFileWithStats(filePath) {
  readFile(filePath, "utf-8", (err, data) => {
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
