// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .

'use strict';

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

// Complete the staircase function below.
function staircase(n) {
	for (var i = 1; i <= n; i++) {
		var space = '';
		var hash = '';
		for (var k = 0; k < i; k++) {
			hash += '#';
		}
		for (var j = 0; j < n - i; j++) {
			space += ' ';
		}
		var result = space + hash;
		process.stdout.write(result + '\n');
	}

}

function main() {
	const n = parseInt(readLine(), 10);

	staircase(n);
}