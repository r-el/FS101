import { readFile } from "fs";

const filePath = "quotes.txt";

function readRandomLine(filePath) {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const lines = data.split("\n");
    const rndIdx = Math.floor(Math.random() * lines.length);
    console.log(lines.at(rndIdx));
  });
}

readRandomLine(filePath);
