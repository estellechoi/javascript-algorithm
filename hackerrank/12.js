// You are given an array of n integers, ar, and a positive integer, k.
// Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// It should return the integer count of pairs meeting the criteria.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
	var count = 0;
	for (var i = 0; i <= n - 2; i++) {
		// j : 1 부터 가능
		for (var j = i + 1; j <= n - 1; j++) {
			var sum = ar[i] + ar[j];
			if (sum % k === 0) {
				count++;
			}
		}
	}

	return count;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const nk = readLine().split(' ');

	const n = parseInt(nk[0], 10);

	const k = parseInt(nk[1], 10);

	const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

	let result = divisibleSumPairs(n, k, ar);

	ws.write(result + "\n");

	ws.end();
}