from ast import List

# 119: Pascal's Triangle II
# Last Updated: Oct 15, 2023
# Solve Time: 9 min & 15
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        tri = [[1],[1,1]]
        for i in range(2, rowIndex + 1):
            prev, row = tri[i - 1], [1]
            for j in range(1, i): row.append(prev[j - 1] + prev[j])
            row.append(1)
            tri.append(row)
        return tri[rowIndex]