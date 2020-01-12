// Viral Advertising
// HackerLand Enterprise is adopting a new viral advertising strategy.
// When they launch a new product, they advertise it to exactly 5 people on social media.
// On the first day, half of those 5 people (floor(5/2) = 2) like the advertisement and
// each shares it with 3 of their friends.
// At the beginning of the second day, people receive the advertisement.
// Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day.
// Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
// n: the integer number of days

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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
	let recipients = 5;
	let totalLikes = 0;
	for (var i = 1; i <= n; i++) {
		var likes = Math.floor(recipients / 2);
		recipients = likes * 3;
		totalLikes += likes;
	}

	return totalLikes;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	let result = viralAdvertising(n);

	ws.write(result + "\n");

	ws.end();
}