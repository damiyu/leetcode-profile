from ast import List

# 2009: Minimum Number of Operations to Make Array Continuous
# Last Updated: Oct 10, 2023
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n, minCnt = len(nums), 1000000000

        nums = list(set(nums))
        nums.sort()
        l = len(nums)
        for i in range(l):
            top, mid, tar = i, (i + l) >> 1, (n - 1) + nums[i]

            while top < mid:
                if nums[mid] < tar:
                    top = mid
                    mid = (mid + l) >> 1
                elif nums[mid] > tar:
                    mid = (mid + top) >> 1
                else:
                    break
            minCnt = minCnt if minCnt < (n - 1) - (mid - i) else (n - 1) - (mid - i)
        return minCnt
