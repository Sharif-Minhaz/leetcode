/* 9. Palindrome Number

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string? */

// solution without converting the number into string
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let reversed = 0,
		num = x;

	if (num < 0) {
		return false;
	}

	while (num !== 0) {
		reversed = reversed * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return reversed === x;
};

console.log(isPalindrome(91219));

// solution with conversion
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
	return x.toString().split("").reverse().join("") === x.toString();
};

console.log(isPalindrome2(91219));
