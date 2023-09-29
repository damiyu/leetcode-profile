from ast import List

# 905: Sort Array By Parity
# Last Updated: Sep 27, 2023
# Solve Time: 2 min & 47 sec
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        return [even for even in nums if not even % 2] + [odd for odd in nums if odd % 2]

# My Original Solution
'''
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        evenNums, oddNums = [], []
        for n in nums:
            if (n % 2 == 0):
                evenNums.append(n)
            else:
                oddNums.append(n)
        return evenNums + oddNums
'''