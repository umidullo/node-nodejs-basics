import fs from "fs";
import crypto from "crypto";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const input = fs.createReadStream(
    __dirname + "/files/fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");

  input.on("end", function () {
    hash.end();
    console.log(hash.read());
  });

  input.pipe(hash);
};

await calculateHash();
