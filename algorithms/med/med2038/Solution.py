# 2038: Remove Colored Pieces if Both Neighbors are the Same Color
# Last Updated: Oct 2, 2023
# Solve Time: 14 min & 43 sec
class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        n, a, c, turn = len(colors), 0, 0, colors[0] == 'A'
        for i in range(n):
            if colors[i] == 'A':
                if (not turn):
                    turn = True
                    c = 0
                c += 1
                if c > 2: a += 1
            else:
                if (turn):
                    turn = False
                    c = 0
                c += 1
                if c > 2: a -= 1
        return a > 0

# My Original Solution
'''
class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        par, n = colors.split("B"), 0
        for a in par:
            l = len(a)
            if (l > 2): n += l - 2
        par = colors.split("A")
        for b in par:
            l = len(b)
            if (l > 2): n -= l - 2
        return n > 0
'''