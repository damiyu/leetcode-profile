# 342: Power of Four
# Last Updated: Oct 22, 230
# Solve Time: 4 min & 54 sec
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        f = 1
        while f < n: f <<= 2
        return f == n