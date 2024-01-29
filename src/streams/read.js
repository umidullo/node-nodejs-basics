import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const rs = fs.createReadStream(__dirname + "/files/fileToRead.txt");
  rs.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
