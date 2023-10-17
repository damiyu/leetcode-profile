from typing import List

# 1361: Validate Binary Tree Nodes
# Last Updated: Oct 16, 2023
class Solution:
    def validateBinaryTreeNodes(self, n: int, leftChild: List[int], rightChild: List[int]) -> bool:
        parent = [-1] * n

        for i in range(n):
            left, right, pnt = leftChild[i], rightChild[i], i

            if left == -1:
                if right == -1: continue
                elif parent[right] != -1: return False
                while pnt != -1:
                    pnt = parent[pnt]
                    if (pnt == right): return False
                parent[right] = i
            elif right == -1:
                if parent[left] != -1: return False
                while pnt != -1:
                    pnt = parent[pnt]
                    if (pnt == left): return False
                parent[left] = i
            elif parent[right] != -1 or parent[left] != -1: return False
            elif left == right: return False
            else:
                while pnt != -1:
                    pnt = parent[pnt]
                    if (pnt == left): return False
                pnt = i
                while pnt != -1:
                    pnt = parent[pnt]
                    if (pnt == right): return False

                parent[left] = i
                parent[right] = i
        return parent.count(-1) == 1