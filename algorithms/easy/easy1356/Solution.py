from typing import List

# 1356: Sort Integers by The Number of 1 Bits
# Last Updated: Oct 29, 2023
# Solve Time: 13 and 17 sec
class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        arr.sort(key = lambda n: (n.bit_count(), n))
        return arr

# My Original Solution
'''
class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        cnt = [n.bit_count() for n in arr]
        arr = list(zip(arr, cnt))
        arr, cnt = zip(*sorted(arr, key = lambda n: (n[1], n[0])))
        return arr
'''