// If the difference between the  and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

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

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
	var five = 5;
	var passCut = 40;
	var arr = grades.map(function (grade) {
		var rounded = 0;
		// Math.floor(); 소수점 버림
		var a = Math.floor(grade / 10);
		var b = grade % 10;
		if (grade < passCut - 2) {
			rounded = grade;
		} else if (b % five === 0 || b % five < 3) {
			rounded = grade;
		} else if (b % five >= 3) {
			if (b < 5) {
				b = 5;
			} else if (b > 5) {
				b = 0;
				a++;
			}
			rounded = (a * 10) + b;
		}
		return rounded;
	});

	return arr;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const gradesCount = parseInt(readLine().trim(), 10);

	let grades = [];

	for (let i = 0; i < gradesCount; i++) {
		const gradesItem = parseInt(readLine().trim(), 10);
		grades.push(gradesItem);
	}

	const result = gradingStudents(grades);

	ws.write(result.join('\n') + '\n');

	ws.end();
}