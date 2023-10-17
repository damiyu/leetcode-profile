# 1269: Number of Ways to Stay in the Same Place After Some Steps
# Last Updated: Oct 15, 2023
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        s = arrLen if arrLen < (steps // 2) + 1 else (steps // 2) + 1
        prevTab, idxs = [1, 1] + [0] * (s - 2), range(s)

        for _ in range(steps - 1):
            curTab = [0] * s
            for i in idxs:
                prevStep = prevTab[i]
                if prevStep == 0: break
                if i - 1 > -1: curTab[i - 1] += prevStep
                if i < s: curTab[i] += prevStep
                if i + 1 < s: curTab[i + 1] += prevStep
            prevTab = curTab
        return prevTab[0] % (10 ** 9 + 7)

# My Original Solution
'''
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        prevTab, idxs = [1 , 1] + [0] * (arrLen - 2), range(arrLen)

        for _ in range(steps - 1):
            curTab = [0] * arrLen
            for i in idxs:
                prevStep = prevTab[i]
                if prevStep == 0: break
                if i - 1 > -1: curTab[i - 1] += prevStep
                if i < arrLen: curTab[i] += prevStep
                if i + 1 < arrLen: curTab[i + 1] += prevStep
            prevTab = curTab
        return prevTab[0] % (10 ** 9 + 7)
'''