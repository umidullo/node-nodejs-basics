import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const path = __dirname + "/files";

const list = async () => {
  if (fs.existsSync(path)) {
    fs.readdir(path, (err, files) => {
      console.log(files);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
