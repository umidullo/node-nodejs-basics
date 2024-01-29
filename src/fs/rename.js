import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const oldName = __dirname + "/files/wrongFilename.txt";
const newName = __dirname + "/files/properFilename.md";

const rename = async () => {
  const wrongFilExist = fs.existsSync(oldName);
  const newFileDoesNotExist = fs.existsSync(newName);

  if (wrongFilExist && !newFileDoesNotExist) {
    fs.rename(oldName, newName, (err) => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
