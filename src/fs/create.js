import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const content = "I am fresh and young";

const create = async () => {
  if (fs.existsSync(__dirname + "/files/fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile(__dirname + "/files/fresh.txt", content, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

await create();
