import zlib from "zlib";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const gzip = zlib.createGunzip();
  const source = fs.createReadStream(__dirname + "/files/archive.gz");
  const destination = fs.createWriteStream(
    __dirname + "/files/fileToCompress.txt"
  );

  source.pipe(gzip).pipe(destination);
};

await decompress();
