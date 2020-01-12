// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
// hh:mm:ssAM -> hh:mm:ss

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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
	// hh:mm:ssAM
	var time = s.match(/[A,P]M/)[0];
	var hhmmss = s.match(/\d\d:\d\d:\d\d/)[0];
	var arr = hhmmss.split(":");
	var hh = arr[0];
	if (time === "AM" && hh === "12") {
		arr[0] = "00";
	}
	if (time === "PM") {
		if (hh === "12") {
			arr[0] = hh;
		} else {
			arr[0] = parseInt(hh) + 12;
		}
	}

	var result = arr[0] + ":" + arr[1] + ":" + arr[2];
	return result;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	let result = timeConversion(s);

	ws.write(result + "\n");

	ws.end();
}