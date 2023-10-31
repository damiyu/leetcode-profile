# 1220: Count Vowels Permutation
# Last Updated: Oct 27, 2023
# Solve Time: 18 min & 12 sec
class Solution:
    def countVowelPermutation(self, n: int) -> int:
        a, e, i, o, u, MOD = 1, 1, 1, 1, 1, 10 ** 9 + 7

        for _ in range(1, n):
            a, e, i, o, u = (e + i + u) % MOD, (a + i) % MOD, (e + o) % MOD, i, (i + o) % MOD
        return (a + e + i + o + u) % MOD

# My Original Solution
'''
class Solution:
    def countVowelPermutation(self, n: int) -> int:
        cnts = [1] * 5

        for _ in range(1, n):
            a, e, i, o, u = cnts[0], cnts[1], cnts[2], cnts[3], cnts[4]
            cnts = [e + i + u, a + i, e + o, i, i + o]
        return sum(cnts) % (10 ** 9 + 7)
'''