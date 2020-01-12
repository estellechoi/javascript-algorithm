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
		var page = 1;
		while (page < p) {
			flip++;
			page += 2;
		}
	}
	// from the last
	else {
		var page = n;
		if (n % 2 !== 0) {
			page = page - 1; // 책장을 넘겼을 때 페이지 중 숫자가 더 작은 페이지
		}
		while (page > p) {
			flip++;
			page -= 2;
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