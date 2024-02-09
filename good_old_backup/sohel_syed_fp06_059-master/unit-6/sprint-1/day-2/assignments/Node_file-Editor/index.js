const { throws } = require("assert");
const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case "read":
    const data = fs.readFileSync(`${file}`, "utf-8");
    console.log(data);
    break;
  case "delete":
    try {
      fs.unlinkSync(`${file}`);
      console.log(`File ${file} deleted`);
    } catch (err) {
      console.log(err);
    }
    break;
  case "create":
    fs.writeFileSync(`${file}`, `${content}`);
    console.log(`File ${file} created`);
    break;
  case "append":
    fs.appendFile(`${file}`, `\n${content}`, (err) => {
      console.log(err);
    });
    console.log(`Content appended to the file ${file}`);
    break;
  case "rename":
    fs.renameSync(`${file}`, `${content}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
    break;
  case "list":
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      console.log(files);
    });
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
