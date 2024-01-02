/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const symbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	const resArr = s.split("").map((rom) => symbols[rom]);

	return resArr;
};

console.log(romanToInt("MCMXCIV"));
