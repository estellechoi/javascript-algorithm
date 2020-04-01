// Find Digits
// An integer d is a divisor of an integer n if the remainder of n % d = 0.
// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
// Each digit is considered to be unique, so each occurrence of the same digit should be counted.
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

// Complete the findDigits function below.
function findDigits(n) {
	const digits = n
		.toString()
		.split("")
		.map(item => parseInt(item))
		.filter(item => item !== 0);

	let countDivisor = 0;
	digits.forEach(item => {
		if (n % item === 0) countDivisor++;
	});

	return countDivisor;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const n = parseInt(readLine(), 10);

		let result = findDigits(n);

		ws.write(result + "\n");
	}

	ws.end();
}
