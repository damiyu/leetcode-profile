from typing import Optional, List

# 515: Find Largest Value in Each Tree Row
# Last Updated: Oct 24, 2023
class Solution:
    def largestValues(self, root: Optional['TreeNode']) -> List[int]:
        if root == None: return []
        curNodes, maxVals = [root], [root.val]

        while curNodes:
            curVals, newNodes = [], []

            while curNodes:
                node = curNodes.pop()

                if node.left != None:
                    newNodes.append(node.left)
                    curVals.append(node.left.val)
                if node.right != None:
                    newNodes.append(node.right)
                    curVals.append(node.right.val)

            curNodes = newNodes
            if curVals: maxVals.append(max(curVals))
        return maxVals

class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right