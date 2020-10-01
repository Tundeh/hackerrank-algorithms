"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let checked = [];
  let pairCount = 0;
  let result = 0;
  ar.map((x, index) => {
    if (checked.find((a) => a === x)) return;
    pairCount = 1;
    for (let i = 1; i < n - index + 1; i++) {
      if (x === ar[index + i]) {
        pairCount++;
      }
    }
    result += Math.floor(pairCount / 2);
    checked = [...checked, x];
  });
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
