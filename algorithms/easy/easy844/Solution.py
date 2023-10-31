# 844: Backspace String Compare
# Last Updated: Oct 18, 2023
# Solve Time: 7 min & 29 sec
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        arrS, arrT = [], []

        for n in s:
            if n != '#': arrS.append(n)
            elif arrS: del arrS[-1]

        for n in t:
            if n != '#': arrT.append(n)
            elif arrT: del arrT[-1]
        return arrS == arrT

# My Original Solution
'''
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        arrS, arrT = [], []

        for n in s:
            if n == '#':
                if len(arrS) > 0: arrS.pop()
            else: arrS.append(n)

        for n in t:
            if n == '#':
                if len(arrT) > 0: arrT.pop()
            else: arrT.append(n)

        if len(arrS) != len(arrT): return False
        for i in range(len(arrS)):
            if arrS[i] != arrT[i]: return False
        return True
'''