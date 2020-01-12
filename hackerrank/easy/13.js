// You have been asked to help study the population of birds migrating across the continent.
// Each type of bird you are interested in will be identified by an integer value.
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
	// arr.sort();
	// 오름차순, ASCII 문자 순서
	// ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
	// arr.sort().reverse(); 내림차순

	// 숫자 오름차순
	arr.sort(function (a, b) {
		// 반환값 (+, -, 0)에 따라 위치 결정
		// 반환값 (a - b)이 음수이면, a < b 라고 판단하여 a -> b 순으로 정렬시킨다.
		return a - b;
	});

	let max = 1;
	let count = 1;
	let result = 0;
	arr.forEach(function (id, i) {
		if (i === 0) return;
		if (id === arr[i - 1]) {
			count++;
			if (count > max) {
				max = count;
				result = id;
			}
		} else {
			count = 1;
		}
	});

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arrCount = parseInt(readLine().trim(), 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);

	ws.write(result + '\n');

	ws.end();
}