// Extra Long Factorials
// Calculate and print the factorial of a given integer.
// Complete the extraLongFactorials function in the editor below. It should print the result and return.
"use strict";

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
	let result = 1n;
	for (let i = 0; i < n; i++) {
		const number = BigInt(n - i);
		result = BigInt(result * number);
	}
	// print
	// the type of the printed should be String, not BigInt.
	process.stdout.write(result.toString());
}

function main() {
	const n = parseInt(readLine(), 10);

	extraLongFactorials(n);
}
