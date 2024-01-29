import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  if (fs.existsSync(__dirname + "/files/fileToRemove.txt")) {
    fs.unlink(__dirname + "/files/fileToRemove.txt", (err) => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
