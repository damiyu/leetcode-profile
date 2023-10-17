from ast import List

# 2742: Painting the Walls
# Last Updated: Oct 14, 2023
class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(time)
        curTab, prevTab = [], [5e8 for _ in range(n + 1)]

        prevTab[0] = 0
        for i in range(n):
            curTab = [0 for _ in range(n + 1)]

            for j in range(1, n + 1):
                curCost = cost[i] + prevTab[0 if j - 1 - time[i] < 0 else j - 1 - time[i]]
                curTab[j] = curCost if curCost < prevTab[j] else prevTab[j]
            prevTab = curTab
        return curTab[n]