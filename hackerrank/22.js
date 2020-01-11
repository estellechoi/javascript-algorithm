// Picking Numbers
// Given an array of integers, find and print the maximum number of integers you can select from the array
// such that the absolute difference between any two of the chosen integers is less than or equal to 1.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
	const alength = a.length;
	let max = 1;

	for (var i = 0; i < alength; i++) {
		var temp = a[i];
		let count = 1;
		for (var j = 0; j < alength; j++) {
			if (j === i) continue;
			var diff = a[j] - temp;
			if (diff === 1 || diff === 0) {
				count++;
				if (count > max) {
					max = count;
				}
			}
		}
	}

	return max;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

	const result = pickingNumbers(a);

	ws.write(result + '\n');

	ws.end();
}