from ast import List

# 746: Min Cost Climbing Stairs
# Last Updated: Oct 13, 2023
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        for i in range(2, n, 1): cost[i] = min(cost[i - 1], cost[i - 2]) + cost[i]
        return min(cost[n - 2], cost[n - 1])