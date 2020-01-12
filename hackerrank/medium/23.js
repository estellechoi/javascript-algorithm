// Climbing the Leaderboard
// Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking.
// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// It should return an integer array where each element res[j] represents Alice's rank after the jth game.
// parameter(s):
// scores: an array of integers that represent leaderboard scores
// alice: an array of integers that represent Alice's scores

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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
	let res = [];
	const slength = scores.length;

	// 중복원소가 제거된 점수배열 만들기
	let temp = scores[0];
	let arr = [temp];
	scores.forEach(function (score, i) {
		if (i === slength - 1) return true;
		// 중복원소 제거
		if (score !== scores[i + 1]) {
			temp = scores[i + 1];
			arr.push(temp);
		}
	});

	let arrlength = arr.length;
	alice.forEach(function (ali, j) {
		arr.some(function (value, i) {
			if (ali >= value) {
				res.push(i + 1); // 순위 : index + 1
				return true; // break
			}
			// Alice가 마지막 순위일 때
			if (i === arrlength - 1) {
				res.push(i + 2);
				return true;
			}
		});
	});
	return res;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const scoresCount = parseInt(readLine(), 10);

	const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

	const aliceCount = parseInt(readLine(), 10);

	const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

	let result = climbingLeaderboard(scores, alice);

	ws.write(result.join("\n") + "\n");

	ws.end();
}