# 557: Reverse Words in a String III
# Last Updated: Oct 1, 2023
# Solve Time: 6 min & 38 sec
class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split(" ")
        n = len(words)
        for i in range(n):
            words[i] = words[i][::-1]
        return ' '.join(words)