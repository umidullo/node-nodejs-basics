import zlib from "zlib";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(__dirname + "/files/fileToCompress.txt");
  const destination = fs.createWriteStream(__dirname + "/files/archive.gz");

  source.pipe(gzip).pipe(destination);
};

await compress();
