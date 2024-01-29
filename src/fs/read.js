import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  fs.readFile(__dirname + "/files/fileToRead.txt", "utf8", (error, data) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await read();
