// Utopian Tree
// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
// How tall will her tree be after n growth cycles?
// It should return the integer height of the tree after the input number of growth cycles.

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

// Complete the utopianTree function below.
function utopianTree(n) {
	let height = 1;
	for (var i = 0; i < n; i++) {
		if (i % 2 === 0) {
			height = height * 2;
		} else {
			height = height + 1;
		}
	}
	return height;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const n = parseInt(readLine(), 10);

		let result = utopianTree(n);

		ws.write(result + "\n");
	}

	ws.end();
}