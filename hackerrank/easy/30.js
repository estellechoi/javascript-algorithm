// Save the Prisoner!
// A jail has a number of prisoners and a number of treats to pass out to them.
// Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs.
// A chair number will be drawn from a hat.
// Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.
// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful.
// Determine the chair number occupied by the prisoner who will receive that candy.
// https://www.hackerrank.com/challenges/save-the-prisoner/problem

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

    let current = s;
	
	// 캔디의 수만큼 반복하면서 현재 좌석의 숫자를 구했다....ㅠ
    for (let i = 1; i <= m; i++) {
        // give candy at current position.
		if (i === m) return current;
		
		// get next seat no.
        if (current >= n) current = 1;
        else current += 1;
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