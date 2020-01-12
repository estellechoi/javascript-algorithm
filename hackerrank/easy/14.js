// Day of the Programmer (256th day)


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

// Complete the dayOfProgrammer function below.
// 256th day of year
function dayOfProgrammer(year) {
	let monthly = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let feb = 28;
	if (year <= 1917) {
		if (year % 4 === 0) {
			feb = 29;
		}
	} else if (year >= 1919) {
		if (year % 4 === 0 && year % 100 !== 0) {
			feb = 29;
		} else if (year % 400 === 0) {
			feb = 29;
		}
	} else {
		//  - 13 days
		if (year % 4 === 0 && year % 100 !== 0) {
			feb = 29;
		} else if (year % 400 === 0) {
			feb = 29;
		}
		feb -= 13;
	}
	monthly[1] = feb;

	let mm = 1;
	let dd = 1;

	let days = 0;
	monthly.some(function (thisMonth, i) {
		if (days + thisMonth < 256) {
			days += thisMonth;
		} else if (days + thisMonth === 256) {
			dd = thisMonth;
			mm = i + 1;
			return true;
			// return true; 는 JAVA의 break 역할 (반복문 중단)
			// return false; 는 JAVA의 continue 역할 (현재 턴 중단하고 다음 턴 시작)
		} else {
			dd = 256 - days;
			mm = i + 1;
			return true;
		}
	});

	if (dd < 10) {
		dd = "0" + dd;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}

	return dd + "." + mm + "." + year;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const year = parseInt(readLine().trim(), 10);

	const result = dayOfProgrammer(year);

	ws.write(result + '\n');

	ws.end();
}