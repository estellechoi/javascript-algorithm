// Angry Professor
// A Discrete Mathematics professor has a class of students.
// Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts.
// Arrival times go from on time to arrived late.
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.
// Non-positive arrival times indicate the student arrived early or on time;
// positive arrival times indicate the student arrived a[i] minutes late.
// For each test case, print the word YES if the class is canceled or NO if it is not.

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

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
	let isCanceled = 'NO';
	let students = 0;
	a.forEach(function (time) {
		if (time <= 0) {
			students++;
		}
	});

	if (students < k) {
		isCanceled = 'YES';
	}

	return isCanceled;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const nk = readLine().split(' ');

		const n = parseInt(nk[0], 10);

		const k = parseInt(nk[1], 10);

		const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

		let result = angryProfessor(k, a);

		ws.write(result + "\n");
	}

	ws.end();
}