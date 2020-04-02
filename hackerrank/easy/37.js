// Sherlock and Squares
// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers.
// Sherlock must determine the number of square integers within that range, inclusive of the endpoints.
// A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, ..
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

// Complete the squares function below.
function squares(a, b) {
	let root = 0;
	for (let i = a; i <= b; i++) {
		if (Math.sqrt(i) % 1 === 0) {
			root = Math.sqrt(i);
			break;
		}
	}

	let count = 0;
	while (root !== 0 && root * root <= b) {
		root += 1;
		count += 1;
	}

	return count;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const q = parseInt(readLine(), 10);

	for (let qItr = 0; qItr < q; qItr++) {
		const ab = readLine().split(" ");

		const a = parseInt(ab[0], 10);

		const b = parseInt(ab[1], 10);

		let result = squares(a, b);

		ws.write(result + "\n");
	}

	ws.end();
}
