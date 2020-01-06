// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
	// Write your code here
	let map = [];
	for (let i = 1; i <= 100; i++) {
		var isFactor = true;
		a.forEach(function (aa) {
			if (i % aa !== 0) isFactor = false;
		});
		if (isFactor === true) {
			b.forEach(function (bb) {
				if (bb % i !== 0) isFactor = false;
			});
			if (isFactor === true) map.push(i);
		}
	}

	return map.length;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

	const n = parseInt(firstMultipleInput[0], 10);

	const m = parseInt(firstMultipleInput[1], 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

	const total = getTotalX(arr, brr);

	ws.write(total + '\n');

	ws.end();
}