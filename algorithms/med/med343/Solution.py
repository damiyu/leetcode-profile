# 343: Integer Break
# Last Updated: Oct 6, 2023
# Solve Time: 56 min & 17 sec
class Solution:
    def integerBreak(self, n: int) -> int:
        if (n == 2): return 1
        elif (n == 3): return 2
        
        cnt = n // 3
        if (3 * cnt == n): return 3 ** cnt
        elif (3 * cnt == n - 1): return (3 ** (cnt - 1)) << 2
        return (3 ** cnt) << 1