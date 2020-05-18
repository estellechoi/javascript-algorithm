// Repeated String
// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, , find and print the number of letter a's in the first n letters of Lilah's infinite string.

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

// Complete the repeatedString function below.
function repeatedString(s, n) {
	const length = s.length;
	const split = s.split("");

	let count = 0;
	if (length >= n) {
		for (let i = 0; i < n; i++) {
			if (split[i] === "a") count += 1;
		}
		return count;
	}

	while (s.length < n) {
		s = s + s;
	}
	const exceed = s.length - n;
	s = s.slice(0, s.length - exceed);

	s.split("").forEach((item) => {
		if (item === "a") count += 1;
	});

	return count;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const n = parseInt(readLine(), 10);

	let result = repeatedString(s, n);

	ws.write(result + "\n");

	ws.end();
}
