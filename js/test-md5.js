const md5 = require("md5");
const { spawn } = require('node:child_process');

console.log(md5("hello, world!"));

function hi(user_input) {
  spawn(process.argv);
}
