const fs = require("fs");
file =
  "/Volumes/Untitled/Users/quin/Documents/Code/Javascript/genmockdata/data.json";

readfile(file);
deletefile(file, 4);
readfile(file);

function readfile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
}

function writefile(file, content) {
  fs.writeFile(file, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("success");
  });
}

function deletefile(file, num) {
  let filehandle = null;
  try {
    let filehandle = await open(file, "r+");
    await filehandle.truncate(num);
  } finally {
    filehandle.close;
  }
}
