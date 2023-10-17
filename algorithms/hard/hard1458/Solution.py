from ast import List

# 1458: Max Dot Product of Two Subsequences
# Last Updated: Oct 8, 2023
class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        if max(nums1) < 0 and min(nums2) > 0: return max(nums1) * min(nums2)
        if min(nums1) > 0 and max(nums2) < 0: return min(nums1) * max(nums2)
        
        len1, len2 = len(nums1) - 1, len(nums2) + 1
        dp, oldDot = [0] * len2, [0] * len2
        for i in range(len1, -1, -1):
            dp = [0] * len2
            for j in range(len2 - 2, -1, -1):
                curDot = (nums1[i] * nums2[j]) + oldDot[j + 1]
                dp[j] = max(curDot, oldDot[j], dp[j + 1])
            oldDot = dp
        return dp[0]