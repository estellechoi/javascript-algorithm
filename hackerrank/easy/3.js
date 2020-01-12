// Print the minimum sum and maximum sum of array.
// given five positive integers, print the sum of four items.
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	var min = arr[0];
	var max = arr[0];
	arr.forEach(function (value, i) {
		if (i === 0) return;
		if (value < min) {
			min = value;
		} else if (value > max) {
			max = value;
		}
	});

	var minSum = 0;
	var maxSum = 0;
	var minCount = 0;
	var maxCount = 0;
	arr.forEach(function (value) {
		if (value === min) {
			minCount++;
			if (minCount > 1) {
				maxSum += value;
			}
		} else {
			maxSum += value;
		}
	});
	arr.forEach(function (value) {
		if (value === max) {
			maxCount++;
			if (maxCount > 1) {
				minSum += value;
			}
		} else {
			minSum += value;
		}
	});

	process.stdout.write(minSum + ' ' + maxSum);


}

function main() {
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	miniMaxSum(arr);
}