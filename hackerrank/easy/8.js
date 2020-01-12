// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it is possible, return YES, otherwise return NO.
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// Constraints : 0 <= x1 < x2 <= 10000, 1 <= v1 <= 10000, 1 <= v2 <= 10000
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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
	let cando = "NO";
	let getLocation = function (count) {
		var kangaroo1 = x1 + (v1 * count);
		var kangaroo2 = x2 + (v2 * count);
		return kangaroo1 === kangaroo2;
	}
	// (x1 - x2) % (v2 - v1) ?????
	// 최소 공배수 ?
	for (let i = 0; i < 10000; i++) {
		if (getLocation(i)) {
			cando = "YES";
			break;
		}
	}
	return cando;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const x1V1X2V2 = readLine().split(' ');

	const x1 = parseInt(x1V1X2V2[0], 10);

	const v1 = parseInt(x1V1X2V2[1], 10);

	const x2 = parseInt(x1V1X2V2[2], 10);

	const v2 = parseInt(x1V1X2V2[3], 10);

	let result = kangaroo(x1, v1, x2, v2);

	ws.write(result + "\n");

	ws.end();
}