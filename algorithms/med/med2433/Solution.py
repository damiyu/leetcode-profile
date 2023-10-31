from typing import List

# 2433: Find The Original Array of Prefix Xor
# Last Updated: Oct 30, 2023
# Solve Time: 11 min & 46
class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        val, arr = 0, []
        for p in pref:
            x = val ^ p
            val ^= x
            arr.append(x)
        return arr