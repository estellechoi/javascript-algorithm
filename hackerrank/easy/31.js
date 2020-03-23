// Circular Array Rotation
// John Watson knows of an operation called a right circular rotation on an array of integers.
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one.
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers.
// Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
	inputString += inputStdin;
});

process.stdin.on("end", function() {
	inputString = inputString
		.replace(/\s*$/, "")
		.split("\n")
		.map(str => str.replace(/\s*$/, ""));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
	const leng = a.length;
	for (let i = 0; i < k; i++) {
		a.unshift(a[leng - 1]);
		// cut last element.
		a.splice(leng, 1);
	}

	let result = [];
	queries.forEach(index => {
		result.push(a[index]);
	});

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const nkq = readLine().split(" ");

	const n = parseInt(nkq[0], 10);

	const k = parseInt(nkq[1], 10);

	const q = parseInt(nkq[2], 10);

	const a = readLine()
		.split(" ")
		.map(aTemp => parseInt(aTemp, 10));

	let queries = [];

	for (let i = 0; i < q; i++) {
		const queriesItem = parseInt(readLine(), 10);
		queries.push(queriesItem);
	}

	const result = circularArrayRotation(a, k, queries);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
