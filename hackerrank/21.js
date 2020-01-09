// Forming a Magic Square
// We define a magic square to be an n * n matrix of distinct positive integers from 1 to n * n.
// where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.
// 3 * 3 matrix  of integers in the inclusive range [1, 9]
// We can convert any digit a to any other digit b in the range [1, 9] at cost of |a - b|.
// convert it into a magic square at minimal cost.
// Print this cost on a new line.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
	// s[i][j]
	let sum = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			sum += s[i][j];
		}
	}
	const magic = Math.round(sum / 3);

	var diff = 0;
	var diagonal1 = 0;
	var diagonal2 = 0;
	for (var i = 0; i < 3; i++) {
		var horizon = 0;
		for (var j = 0; j < 3; j++) {
			horizon += s[i][j];
			if (i === j) {
				diagonal1 += s[i][j];
			}
			if (i + j === 2) {
				diagonal2 += s[i][j];
			}
		}
		if (horizon !== magic) {
			diff += Math.abs(horizon - magic);
		}
		if (diagonal1 !== magic) {
			diff += Math.abs(diagonal1 - magic);
		}
		if (diagonal2 !== magic) {
			diff += Math.abs(diagonal2 - magic);
		}
	}

	return diff;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	let s = Array(3);

	for (let i = 0; i < 3; i++) {
		s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
	}

	const result = formingMagicSquare(s);

	ws.write(result + '\n');

	ws.end();
}