// Electronics Shop
// Monica wants to buy a keyboard and a USB drive from her favorite electronics store.
// The store has several models of each. Monica wants to spend as much as possible for the 2 items, given her budget.
// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend.
// If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

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
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
	// sorting
	keyboards.sort(function (a, b) {
		return a - b;
	});
	drives.sort(function (a, b) {
		return a - b;
	});

	let moneySpent = -1;
	if (keyboards[0] + drives[0] > b) {
		return moneySpent;
	}

	let k = keyboards.length - 1;
	let d = drives.length - 1;
	moneySpent = keyboards[k] + drives[d];
	while (moneySpent > b) {
		if (k !== 0) {
			k--;
			moneySpent = keyboards[k] + drives[d];
			if (moneySpent <= b) {
				break;
			}
		}
		if (d !== 0) {
			d--;
			moneySpent = keyboards[k] + drives[d];
			if (moneySpent <= b) {
				break;
			}
		}
	}

	return moneySpent;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const bnm = readLine().split(' ');

	const b = parseInt(bnm[0], 10);

	const n = parseInt(bnm[1], 10);

	const m = parseInt(bnm[2], 10);

	const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

	const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

	/*
	 * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
	 */

	let moneySpent = getMoneySpent(keyboards, drives, b);

	ws.write(moneySpent + "\n");

	ws.end();
}