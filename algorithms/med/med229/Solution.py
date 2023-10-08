from ast import List

# 229: Majority Element II
# Last Updated: Oct 5, 2023
# Solve Time: 3 min & 45 sec
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        cnt, major = len(nums) // 3, []
        for num in set(nums):
            if (nums.count(num) > cnt):
                major.append(num)
        return major