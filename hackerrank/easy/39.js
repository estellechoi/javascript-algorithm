// Cut the sticks
// You are given a number of sticks of varying lengths.
// You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left.
// At each iteration you will determine the length of the shortest stick remaining,
// cut that length from each of the longer sticks and then discard all the pieces of that shortest length.
// When all the remaining sticks are the same length, they cannot be shortened so discard them.
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
	inputString += inputStdin;
});

process.stdin.on("end", _ => {
	inputString = inputString
		.replace(/\s*$/, "")
		.split("\n")
		.map(str => str.replace(/\s*$/, ""));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
	let result = [arr.length];

	while (arr.length > 1) {
		let shortest = arr[0];
		arr.forEach((item, index) => {
			if (index === 0) return;
			if (item < shortest) shortest = item;
		});
		arr = arr.filter(item => item > shortest);
		if (arr.length === 0) break;
		result.push(arr.length);
	}

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const arr = readLine()
		.split(" ")
		.map(arrTemp => parseInt(arrTemp, 10));

	let result = cutTheSticks(arr);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
