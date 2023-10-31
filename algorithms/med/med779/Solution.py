# 779: K-th Symbol in Grammar
# Last Updated: Oct 26, 2023
class Solution:
    def kthGrammar(self, n: int, k: int) -> int:
        sym, s = 0, 2 ** (n - 1)

        for _ in range(1, n):
            side = k / s

            if side <= 0.5: sym = 0 if sym == 0 else 1
            else:
                sym = 1 if sym == 0 else 0
                k = (side - 0.5) * s
            s >>= 1
        return sym