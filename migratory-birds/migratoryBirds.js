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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  const checked = [];
  const counts = [];
  let highest = 0;
  let hig_indx = 0;
  arr.map((x, index) => {
    let count = 0;
    if (checked.find((e) => e === x)) return;
    for (let i = 0; i < arr.length + 1; i++) {
      if (x === arr[index + i]) {
        count++;
      }
    }
    checked.push(x);
    counts.push(count);
  });
  counts.map((c, index) => {
    if (c > highest) {
      highest = c;
      hig_indx = index;
    } else if (c === highest) {
      if (checked[index] < checked[hig_indx]) {
        highest = c;
        hig_indx = index;
      }
    }
  });
  return checked[hig_indx];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
