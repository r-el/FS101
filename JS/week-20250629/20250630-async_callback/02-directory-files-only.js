import fs from "fs";
let folderPath = "./";

/** This function lists only files in the specified folder. */
function listFilesOnly(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((fileOrFolder) => {
      fs.stat(fileOrFolder, (err, stats) => {
        if (err) {
          console.log(err);
          return;
        }
        if (stats.isFile()) console.log("File:", fileOrFolder);
      });
    });
  });
}

listFilesOnly(folderPath);
