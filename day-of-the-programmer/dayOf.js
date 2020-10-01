"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  let date = "";

  if (year > 1918) {
    if (year % 4 === 0) {
      if (year % 100 === 0 && year % 400 > 0) {
        return (date = "13.09." + year);
      }
      return (date = "12.09." + year);
    }
    return (date = "13.09." + year);
  } else if (year === 1918) {
    return (date = "26.09." + year);
  } else {
    if (year % 4 === 0) {
      return (date = "12.09." + year);
    }
    return (date = "13.09." + year);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
