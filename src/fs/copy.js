import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const targetFolder = __dirname + "/files";
const newFolder = __dirname + "/files_copy";

const copy = async () => {
  const targetFolderExist = fs.existsSync(targetFolder);
  const newFolderExist = fs.existsSync(newFolder);

  if (targetFolderExist && !newFolderExist) {
    fs.mkdirSync(newFolder);
    fs.readdir(targetFolder, (err, files) => {
      for (let file of files) {
        fs.copyFile(
          targetFolder + "/" + file,
          newFolder + "/" + file,
          (err) => {}
        );
      }
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
