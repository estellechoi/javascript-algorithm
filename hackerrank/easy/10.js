// Maria plays college basketball and wants to go pro.
// Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record for most points and least points in a game.
// Points scored in the first game establish her record for the season, and she begins counting from there.
// It must return an integer array containing the numbers of times she broke her records.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
	let count = [0, 0];
	let max = 0;
	let min = 0;
	scores.forEach(function (score, i) {
		if (i === 0) {
			max = score;
			min = score;
			return;
		}
		if (score > max) {
			max = score;
			count[0] += 1;
		} else if (score < min) {
			min = score;
			count[1] += 1;
		}
	});

	return count;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

	const result = breakingRecords(scores);

	ws.write(result.join(' ') + '\n');

	ws.end();
}