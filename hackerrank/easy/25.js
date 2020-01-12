// Designer PDF Viewer
// When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle.
// In this PDF viewer, each word is highlighted independently.
// In this challenge, you will be given a list of letter heights in the alphabet and a string.
// Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.
// It should return an integer representing the size of the highlighted area.
// The first line contains 26 space-separated integers describing the respective heights of each consecutive lowercase English letter
// h: an array of integers representing the heights of each letter
// word: a string

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
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
	let letters = [];
	const length = word.length;
	for (var i = 0; i < length; i++) {
		// 문자열을 아스키코드로 변환
		// 아스키코드를 h 배열의 인덱스에 맞추기
		// a: 97, A: 65
		letters.push(word.charCodeAt(i) - 97);
	}
	let max = 1;
	letters.forEach(function (value) {
		if (h[value] > max) {
			max = h[value];
		}
	});
	let result = length * max;
	return result;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

	const word = readLine();

	let result = designerPdfViewer(h, word);

	ws.write(result + "\n");

	ws.end();
}