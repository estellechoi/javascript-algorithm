// Beautiful Days at the Movies
// Lily likes to play games with integers.
// She has created a new game where she determines the difference between a number and its reverse.
// For instance, given the number 12, its reverse is 21.
// The number 120 reversed is 21.
// She decides to apply her game to decision making.
// She will look at a numbered range of days and will only go to a movie on a beautiful day.
// determine the number of days in the range that are beautiful.
// Beautiful numbers are defined as numbers where |i- reverse(i)| is evenly divisible by k.
// if a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
	let days = 0;
	for (var n = i; n <= j; n++) {
		var reverse = getReverse(n);
		var diff = Math.abs(n - reverse);
		if (diff % k === 0) {
			days++;
		}
	}

	return days;
}

function getReverse(n) {
	let numbers = n.toString().split('');
	const length = numbers.length;
	let reverse = '';
	for (var i = length - 1; i >= 0; i--) {
		reverse += numbers[i];
	}
	return parseInt(reverse);
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const ijk = readLine().split(' ');

	const i = parseInt(ijk[0], 10);

	const j = parseInt(ijk[1], 10);

	const k = parseInt(ijk[2], 10);

	let result = beautifulDays(i, j, k);

	ws.write(result + "\n");

	ws.end();
}