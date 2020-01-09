// Drawing Book
// If the book is n pages long, and she wants to turn to page p,
// what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

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
	inputString = inputString.trim().split('\n').map(str => str.trim());

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {

	let flip = 0;

	// from the start
	if (p <= (n / 2)) {
		var pageCount = 1;
		while (pageCount < p) {
			flip++; // 1 2 3
			pageCount += 2; // 3 5 7
		}
	}
	// from the last
	else {
		var pageCount = n;
		if (n % 2 === 0) {
			pageCount = n - 1;
			// 페이지 6 ... 목표가 3 ?
			while (pageCount > p) {
				flip++;
				pageCount -= 2;
			}
		} else {
			while (pageCount > p) {
				flip++;
				pageCount -= 2;
			}
		}
	}

	return flip;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const p = parseInt(readLine(), 10);

	let result = pageCount(n, p);

	ws.write(result + "\n");

	ws.end();
}