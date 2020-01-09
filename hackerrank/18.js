// Counting Valleys
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// find and print the number of valleys he walked through.

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
	const track = s.split('');

	let height = 0;
	let valley = 0;

	track.forEach(function (value, i) {
		var isSeaLevel = false;
		if (height === 0) {
			isSeaLevel = true;
		}
		if (value === 'U') {
			height += 1;
		} else if (value === 'D') {
			height -= 1;
		}
		if (isSeaLevel === true && height === -1) {
			valley++;
		}
	});

	return valley;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const s = readLine();

	let result = countingValleys(n, s);

	ws.write(result + "\n");

	ws.end();
}