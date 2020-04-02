// Non-Divisible Subset
// Given a set of distinct integers,
// print the size of a maximal subset of S where the sum of any  numbers in S' is not evenly divisible by k.
/*
const s = [1, 7, 2, 4];
const k = 3;

let suspect = {};
s.forEach(item => (suspect[item + ""] = 0));

s.forEach((item, index) => {
	for (let i = index + 1; i < s.length; i++) {
		if ((item + s[i]) % k === 0) {
			suspect[item + ""] += 1;
			suspect[s[i]] += 1;
		}
	}
});

const result = Object.keys(suspect).filter(item => suspect[item] <= 1).length;
*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function() {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s

 * 1 7 2 4

    1 + 7 = 8
    1 + 2 = 3 !!!
    1 + 4 = 5
    7 + 2 = 9 !!!
    7 + 4 = 11
    2 + 4 = 6 !!!

    suspect = {
        1: 1,
        7: 1,
        2: 3,
        4: 1
    }
 */

function nonDivisibleSubset(k, s) {
	let isDivisible = true;
	let test = s;
	while (isDivisible) {
		isDivisible = test.some((item, index) => {
			for (let i = index + 1; i < test.length; i++) {
				return (item + s[i]) % k === 0;
			}
		});
		if (!isDivisible) break;

		// test 조작...
		test = s.slice(0, 1);
	}

	return test.length;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const firstMultipleInput = readLine()
		.replace(/\s+$/g, "")
		.split(" ");

	const n = parseInt(firstMultipleInput[0], 10);

	const k = parseInt(firstMultipleInput[1], 10);

	const s = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map(sTemp => parseInt(sTemp, 10));

	const result = nonDivisibleSubset(k, s);

	ws.write(result + "\n");

	ws.end();
}
