from typing import List

# 1425: Constrained Subsequence Sum
# Last Updated: Oct 21, 2023
class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        queue, n = [], len(nums)

        dp = [0] * n
        for i in range(n):
            if queue and (i - queue[0]) > k: del queue[0]
            dp[i] = (dp[queue[0]] if queue else 0) + nums[i]
            while queue and dp[queue[-1]] < dp[i]: del queue[-1]
            if dp[i] > 0: queue.append(i)
        return max(dp)