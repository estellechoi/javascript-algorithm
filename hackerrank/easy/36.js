// Append and Delete
// You have a string of lowercase English alphabetic letters. You can perform two types of operations on the string:
// 1. Append a lowercase English alphabetic letter to the end of the string.
// 2. Delete the last character in the string. Performing this operation on an empty string results in an empty string.
// Given an integer, k, and two strings, s and t,
// determine whether or not you can convert s to t by performing exactly k of the above operations on s.
// If it's possible, print Yes. Otherwise, print No.

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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
	const init = s.split("");
	const wanted = t.split("");

	/*
    let i = null;
    const isDiff = init.some((item, index) => {
        i = index - 1; // same letter index
        return wanted[index] && item !== wanted[index];
    });

    if (!isDiff) {
        if (wanted.length > init.length) {
            i = init.length - 1;
        }
    }
*/

	let i = -1;
	const isDiff = init.some((item, index) => {
		if (wanted[index]) {
			if (item !== wanted[index]) {
				i = index - 1;
				return true;
			}
		} else {
			i = index - 1;
			return true;
		}
	});

	if (!isDiff) i = init.length - 1;

	const deleteCount = init.length - (i + 1);
	const insertCount = wanted.length - (i + 1);
	const count = deleteCount + insertCount;

	let result = "Yes";
	if (count < k) {
		if (i !== -1) {
			// 더 수정해야하는 횟수
			const extra = k - count;
			if (extra % 2 !== 0) {
				// 일치하는 문자의 수 : i + 1
				if (extra < (i + 1) * 2) {
					result = "No";
				}
			}
		}
	} else if (count > k) {
		result = "No";
	}

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const t = readLine();

	const k = parseInt(readLine(), 10);

	let result = appendAndDelete(s, t, k);

	ws.write(result + "\n");

	ws.end();
}
