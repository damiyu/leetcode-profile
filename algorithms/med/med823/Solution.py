from typing import List

# 823: Binary Trees With Factors
# Last Updated: Oct 26, 2023
class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        arr.sort()

        dct = {num: 1 for num in arr}
        for n in arr:
            for a in arr:
                if a == n: break
                if n % a == 0 and (n // a) in dct: dct[n] += dct[a] * dct[n // a]
        return sum(dct.values()) % (10 ** 9 + 7)