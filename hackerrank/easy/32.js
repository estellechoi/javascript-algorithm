// Sequence Equation
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

// Complete the permutationEquation function below.
function permutationEquation(p) {
	const n = p.length;
	let y1s = [];

	for (let i = 1; i <= n; i++) {
		p.forEach((item, index) => {
			if (item === i) {
				y1s.push(index + 1);
			}
		});
	}
	let y2s = [];
	y1s.forEach(y1 => {
		p.forEach((item, index) => {
			if (item === y1) {
				y2s.push(index + 1);
			}
		});
	});

	return y2s;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const p = readLine()
		.split(" ")
		.map(pTemp => parseInt(pTemp, 10));

	let result = permutationEquation(p);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
