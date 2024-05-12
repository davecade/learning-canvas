const num = [-10, -10, 5, 2];

const sorted = num.sort((a, b) => a - b);
console.log("sorted > ", sorted);
const largestThree =
	sorted[sorted.length - 1] *
	sorted[sorted.length - 2] *
	sorted[sorted.length - 3];

const lagestAndSmallest = sorted[sorted.length - 1] * sorted[0] * sorted[1];

console.log("ASNSWER : ", Math.max(largestThree, lagestAndSmallest));
