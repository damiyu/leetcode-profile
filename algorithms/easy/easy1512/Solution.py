from ast import List

# 1512: Number of Good Pairs
# Last Updated: Oct 2, 2023
# Solve Time: 6 min & 31
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        uni, cnt = set(nums), 0
        for num in uni:
            val = nums.count(num) - 1
            cnt += (val * (val + 1)) >> 1
        return int(cnt)

# My Original Solution:
'''
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        n, cnt = len(nums), 0
        for i in range(n):
            j = i + 1
            while j < n:
                if nums[i] == nums[j]:
                    cnt += 1
        return cnt
'''