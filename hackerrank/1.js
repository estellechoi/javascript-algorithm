// Complete the plusMinus function in the editor below.
// It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
// plusMinus has the following parameter(s):
// arr: an array of integers

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

// Complete the plusMinus function below.
function plusMinus(arr) {
	var zero = 0;
	var positive = 0;
	var negative = 0;
	arr.forEach(function (value) {
		if (value > 0) {
			positive++;
		} else if (value < 0) {
			negative++;
		} else {
			zero++;
		}
	});
	var length = positive + negative + zero;
	var count = [];
	count.push(positive / length);
	count.push(negative / length);
	count.push(zero / length);
	// toFixed()
	count.forEach(function (value) {
		process.stdout.write(value.toFixed(6) + "\n");
	});
}

function main() {
	const n = parseInt(readLine(), 10);

	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	plusMinus(arr);
}