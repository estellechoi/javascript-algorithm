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
	let moneySpent = 0;
	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			// 모든 가격을 하나씩 짝지어본다. (정렬도 필요없게되는 것 ...)
			let amount = keyboards[i] + drives[j];
			// 예산 내의 값이면서, 최대 값을 구하면 된다.
			if (amount <= b && amount > moneySpent) {
				moneySpent = amount;
			}
		}
	}
	// 모든 값이 예산 밖이라면 -1 반환
	if (moneySpent === 0) {
		return -1;
	} else {
		return moneySpent;
	}

	// sorting desc
	// keyboards.sort(function (a, b) {
	// 	return b - a;
	// });
	// drives.sort(function (a, b) {
	// 	return b - a;
	// });
	//
	// let moneySpent = -1;
	// const k = keyboards.length - 1;
	// const d = drives.length - 1;
	// if (keyboards[k] + drives[d] > b) {
	// 	return moneySpent;
	// }
	//
	// let i = 0;
	// let j = 0;
	// moneySpent = keyboards[i] + drives[j];
	//
	// while (moneySpent > b) {
	// 	if (i === k) {
	// 		j++;
	// 	} else if (j === d) {
	// 		i++;
	// 	} else {
	// 		var diffK = keyboards[i] - keyboards[i + 1];
	// 		var diffD = drives[j] - drives[j + 1];
	// 		if (diffK < diffD) {
	// 			i++;
	// 		} else {
	// 			j++;
	// 		}
	// 	}
	// 	moneySpent = keyboards[i] + drives[j];
	// }
	//
	// return moneySpent;
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