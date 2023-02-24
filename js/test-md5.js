const md5 = require("md5");
const { spawn } = require('node:child_process');

console.log(md5("hello, world!"));

spawn(process.argv[2], process.argv).stdout.on("data", data => {
  console.log(data);
});
