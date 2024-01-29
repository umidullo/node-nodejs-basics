import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const ws = fs.createWriteStream(__dirname + "/files/fileToWrite.txt");

  process.stdin.on("data", (chunk) => {
    ws.write(chunk);
  });

  process.stdin.on("end", () => {
    ws.end();
  });
};

await write();
