// Jumping on the Clouds: Revisited
// Aerith is given an array of clouds, c and an energy level e = 100.
// She starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud [(i + k) % n].
// If Aerith lands on a thundercloud c[i] = 1, her energy (e) decreases by 2 additional units.
// The game ends when Aerith lands back on cloud 0.
// can you determine the final value of e after the game ends?
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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
	let indices = [];
	const n = c.length;
	let e = 100;

	let isFirst = true;
	let i = 0;
	while (i !== 0 || isFirst) {
		if (i === 0) {
			isFirst = false;
		}
		if (c[(i + k) % n] === 1) {
			e -= 2;
		}
		i = (i + k) % n;
		e -= 1;
	}

	return e;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const nk = readLine().split(" ");

	const n = parseInt(nk[0], 10);

	const k = parseInt(nk[1], 10);

	const c = readLine()
		.split(" ")
		.map(cTemp => parseInt(cTemp, 10));

	let result = jumpingOnClouds(c, k);

	ws.write(result + "\n");

	ws.end();
}
