// Bon Appétit
// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.
// Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item.
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
// Complete the bonAppetit function in the editor below.
// It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

'use strict';

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

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
	let total = 0;
	bill.some(function (price, i) {
		if (i === k) return false;
		total += price;
	});

	const anna = total / 2;
	let result;
	if (b === anna) {
		result = "Bon Appetit";
	} else {
		result = (b - anna) + "";
	}

	process.stdout.write(result);

}

function main() {
	const nk = readLine().replace(/\s+$/g, '').split(' ');

	const n = parseInt(nk[0], 10);

	const k = parseInt(nk[1], 10);

	const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

	const b = parseInt(readLine().trim(), 10);

	bonAppetit(bill, k, b);
}