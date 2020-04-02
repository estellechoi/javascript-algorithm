// Library Fine
// Your local library needs your help! Given the expected and actual return dates for a library book,
// create a program that calculates the fine (if any). The fee structure is as follows:
// 1. If the book is returned on or before the expected return date, no fine will be charged
// 2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, the fine = 15 * (the number of days late)
// 3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 * (the number of months late)
// 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000
// Charges are based only on the least precise measure of lateness.
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
	inputString += inputStdin;
});

process.stdin.on("end", _ => {
	inputString = inputString
		.replace(/\s*$/, "")
		.split("\n")
		.map(str => str.replace(/\s*$/, ""));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the libraryFine function below.
// 1: returned actually  - 2 7 1014
// 2: due - 1 1 1015
function libraryFine(d1, m1, y1, d2, m2, y2) {
	const mFine = (m1 - m2) * 500;
	const dFine = (d1 - d2) * 15;

	if (y1 < y2) return 0;
	if (y1 > y2) return 10000;

	if (m1 < m2) return 0;
	if (m1 > m2) return mFine;

	if (d1 > d2) return dFine;

	return 0;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const d1M1Y1 = readLine().split(" ");

	const d1 = parseInt(d1M1Y1[0], 10);

	const m1 = parseInt(d1M1Y1[1], 10);

	const y1 = parseInt(d1M1Y1[2], 10);

	const d2M2Y2 = readLine().split(" ");

	const d2 = parseInt(d2M2Y2[0], 10);

	const m2 = parseInt(d2M2Y2[1], 10);

	const y2 = parseInt(d2M2Y2[2], 10);

	let result = libraryFine(d1, m1, y1, d2, m2, y2);

	ws.write(result + "\n");

	ws.end();
}
