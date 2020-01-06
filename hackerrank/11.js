// Lily has a chocolate bar that she wants to share it with Ron for his birthday.
// Each of the squares has an integer on it.
// She decides to share a contiguous segment of the bar selected
// such that the length of the segment matches Ron's birth month and
// the sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(s, d, m) {
	let way = 0;
	s.forEach(function (value, index) {
		// m 개만 연속 사용 가능
		var sum = 0;
		for (var i = 0; i < m; i++) {
			sum += s[index + i];
		}
		if (sum === d) way++;
	});

	return way;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

	const dm = readLine().replace(/\s+$/g, '').split(' ');

	const d = parseInt(dm[0], 10);

	const m = parseInt(dm[1], 10);

	const result = birthday(s, d, m);

	ws.write(result + '\n');

	ws.end();
}