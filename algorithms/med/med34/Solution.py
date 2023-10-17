from ast import List

# 34: Find First and Last Position of Element in Sorted Array
# Last Updated: Oct 8, 2023
# Solve Time: 16 min & 1 sec
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        top, mid = 0, n >> 1

        while top < mid:
            if nums[mid] < target:
                top = mid
                mid = (mid + n) >> 1
            elif nums[mid] > target:
                mid = (mid + top) >> 1
            else:
                break
        if n == 0 or nums[mid] != target: return [-1, -1]

        beg, end = mid, mid
        while beg > -1:
            if nums[beg] == target: beg -= 1
            else: break
        while end < n:
            if nums[end] == target: end += 1
            else: break
        return [beg + 1, end - 1]