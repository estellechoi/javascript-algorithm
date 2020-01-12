// Save the Prisoner!
// A jail has a number of prisoners and a number of treats to pass out to them.
// Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs.
// A chair number will be drawn from a hat.
// Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.
// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful.
// Determine the chair number occupied by the prisoner who will receive that candy.

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

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
	// who will get the last candy ?

	for (var i = 0; i < m; i++) {
		// 0 3 / 1 3 / 2 3 / 3 3 : 3 -2 / 4 -2 / 5 -2 / 6 -2/ 7 -2/ 8 -2: 8 -7/
		if (i + s > n) {
			s = s - n;
		}
		if (i === m - 1) {
			return i + s;
		}
	}

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const nms = readLine().split(' ');

		const n = parseInt(nms[0], 10);

		const m = parseInt(nms[1], 10);

		const s = parseInt(nms[2], 10);

		let result = saveThePrisoner(n, m, s);

		ws.write(result + "\n");
	}

	ws.end();
}