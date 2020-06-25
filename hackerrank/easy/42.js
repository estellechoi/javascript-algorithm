// Jumping on the Clouds
// Emma is playing a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
// She must avoid the thunderheads.
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
// It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered 0 if they are safe or 1if they must be avoided.
// For example, c = [0,0,1,1,0]

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on("end", (_) => {
	inputString = inputString
		.replace(/\s*$/, "")
		.split("\n")
		.map((str) => str.replace(/\s*$/, ""));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
	let jumpCnt = 0;
	let currentIndex = 0;

	const clouds = c.length;

	while (currentIndex < clouds - 1) {
		if (c[currentIndex + 2] === 1 && c[currentIndex + 1] !== 1)
			currentIndex += 1;
		else currentIndex += 2;

		jumpCnt += 1;
	}

	return jumpCnt;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const c = readLine()
		.split(" ")
		.map((cTemp) => parseInt(cTemp, 10));

	let result = jumpingOnClouds(c);

	ws.write(result + "\n");

	ws.end();
}
