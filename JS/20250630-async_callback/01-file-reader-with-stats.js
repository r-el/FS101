import fs from "fs";

let filePath = "example_file.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File Content:");
    console.log(data);

    console.log(`Size: ${stats.size} bytes`)
    console.log("Created At:",(new Date(stats.ctimeMs)).toISOString());
  });
});
