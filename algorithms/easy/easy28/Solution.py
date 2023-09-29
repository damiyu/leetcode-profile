# 28: Find the Index of the First Occurrence in a String
# Last Updated: Sep 26, 2023
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle in haystack:
            return haystack.index(needle)
        return -1

# My Original Solution
'''
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        hayLen = len(haystack)
        needLen = len(needle)

        if (needLen > hayLen):
            return -1

        for n in range(hayLen):
            i = n
            j = 0

            while j < needLen:
                if i == hayLen:
                    return -1
                elif haystack[i] == needle[j]:
                    i += 1
                    j += 1
                else:
                    break
                if j == needLen:
                    return i - j

        return -1
'''