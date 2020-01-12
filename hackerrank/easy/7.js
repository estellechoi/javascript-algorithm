// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x - axis.
// A negative value of d means the fruit fell d units to the tree 's left,
// and a positive value of d means it falls d units to the tree 's right.
// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam 's house.
// apples: integer array, distances at which each apple falls from the tree.

'use strict';

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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	var apple = 0;
	var orange = 0;

	apples.forEach(function (d) {
		if (d <= 0) return;
		if (a + d >= s && a + d <= t) {
			apple++
		}
	});
	oranges.forEach(function (d) {
		if (d >= 0) return;
		if (b + d <= t && b + d >= s) {
			orange++
		}
	});

	process.stdout.write(apple + "\n");
	process.stdout.write(orange + "\n");
}



function main() {
	const st = readLine().split(' ');

	const s = parseInt(st[0], 10);

	const t = parseInt(st[1], 10);

	const ab = readLine().split(' ');

	const a = parseInt(ab[0], 10);

	const b = parseInt(ab[1], 10);

	const mn = readLine().split(' ');

	const m = parseInt(mn[0], 10);

	const n = parseInt(mn[1], 10);

	const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

	const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

	countApplesAndOranges(s, t, a, b, apples, oranges);
}