# 1420: Build Array Where You Can Find The Maximum Exactly K Comparisons
# Last Updated: Oct 7, 2023
class Solution:
    def numOfArrays(self, n: int, m: int, k: int) -> int:
        if m < k: return 0
        mod, dp, tot = 10 ** 9 + 7, [[1] * m], 0
        for _ in range(k - 1): dp += [[0] * m]
        for _ in range(n - 1):
            for i in range(k):
                cnt = 0
                for j in range(m):
                    dp[k - i - 1][j] = (dp[k - i - 1][j] * (j + 1) + cnt) % mod
                    if (k - i - 1) != 0: cnt = (cnt + dp[k - i - 2][j]) % mod
        for num in dp[-1]: tot += num
        return tot % mod