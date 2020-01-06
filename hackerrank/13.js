// Each time a particular kind of bird is spotted, its id number will be added to your array of sightings.
// You would like to be able to find out which type of bird is most common given a list of sightings.
// Your task is to print the type number of that bird and
// if two or more types of birds are equally common, choose the type with the smallest ID number.
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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
	let types = [];
	let max = 0;
	arr.forEach(function (bird, index) {
		if (index === 0) {
			types.push({
				id: bird,
				number: 1
			}); // add as a new
			max = 1;
			return;
		}
		types.forEach(function (type) {
			if (type.id === bird) {
				type.number += 1;
				if (type.number > max) {
					max = type.number;
				}
			} else {
				types.push({
					id: bird,
					number: 1
				}); // add as a new
			}
		});
	});
	var ids = [];
	types.forEach(function (type) {
		if (type.number === max) {
			ids.push(type.id);
		}
	});

	var idMin = 0;
	ids.forEach(function (id, index) {
		if (index === 0) {
			idMin = ids[0];
			return;
		}
		if (id < idMin) {
			idMin = id;
		}
	});

	return idMin;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arrCount = parseInt(readLine().trim(), 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);

	ws.write(result + '\n');

	ws.end();
}