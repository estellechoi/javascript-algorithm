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
	// 1) 좌석의 숫자가 무한대라고 가정하고, 마지막 캔디가 주어지는 좌석의 숫자를 구하면 m - 1 + s
	// 2) 가상의 마지막 좌석의 숫자 -> 총 좌석수로 나누어 떨어지지 않으면, 그 나머지 숫자가 당첨 좌석.
	// 3) 가상의 마지막 좌석의 숫자 -> 총 좌석수로 나누어 떨어지면 마지막 좌석이 당첨. 

	return (m - 1 + s) % n || n;

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