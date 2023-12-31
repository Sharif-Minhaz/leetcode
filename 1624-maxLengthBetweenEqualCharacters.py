""" Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.

Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.
 """

class Solution:
	def maxLengthBetweenEqualCharacters(self, s: str) -> int:
		string = s.lower()
		res = []
		for i in range(len(string)):
			count = 0
			char = string[i]
			for j in range(i + 1, len(string)):
				if char == string[j]:
					res.append(count)
					count = count + 1
				else:
					count = count + 1
			res.append(-1)
		return max(res)


solution_instance = Solution()
print(solution_instance.maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrvt"))
