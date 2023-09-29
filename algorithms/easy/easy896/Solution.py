from ast import List

# 896: Monotonic Array
# Lasted Updated: Sep 28, 2023
# Solve Time: 6 min 49 sec
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        n, x = len(nums) - 1, False
        for i in range(n):
            if nums[i + 1] > nums[i]:
                x = True
                break
        if (x):
            for i in range(n):
                if nums[i + 1] < nums[i]:
                    return False
        return True