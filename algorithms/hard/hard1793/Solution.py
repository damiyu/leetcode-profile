from typing import List

# 1793: Maximum Score of a Good Subarray
# Last Updated: Oct 22, 2023
class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n, left, right = len(nums), k, k
        maxPnts, curPnts = nums[left], nums[right]
        
        while left > 0 or right < n - 1:
            if (nums[left - 1] if left else 0) < (nums[right + 1] if right < n - 1 else 0):
                right += 1
                curPnts = nums[right] if nums[right] < curPnts else curPnts
            else:
                left -= 1
                curPnts = nums[left] if nums[left] < curPnts else curPnts
            maxPnts = curPnts * (right - left + 1) if maxPnts < curPnts * (right - left + 1) else maxPnts
        return maxPnts