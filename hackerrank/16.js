// Sock Merchant
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

	// sorting
	ar.sort(function (a, b) {
		return a - b;
	});

	let count = 1;
	let pairs = 0;
	ar.some(function (color, i) {
		if (i === 0) return false;
		if (color === ar[i - 1]) {
			count++;
			if (i === n - 1) {
				// JS의 타입은 실행시 결정되므로, 소수점 제거 처리를 반드시 해주어야 한다.
				pairs += Math.floor(count / 2);
			}
		} else {
			pairs += Math.floor(count / 2);
			count = 1;
		}
	});

	return pairs;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

	let result = sockMerchant(n, ar);

	ws.write(result + "\n");

	ws.end();
}