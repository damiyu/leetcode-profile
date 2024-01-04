# 1531: String Compression II
# Last Updated: Dec 28, 2023
class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        def encodeCnt(m: int) -> int:
            if m == 1: return 0
            elif m < 10: return 1
            elif m < 100: return 2
            return 3 if m == 100 else -1

        n = len(s)
        dp = [[n] * (k + 1) for _ in range(n + 1)]

        dp[0][0] = 0
        for i in range(1, n + 1):
            for j in range(k + 1):
                if j > 0 and dp[i - 1][j - 1] < dp[i][j] : dp[i][j] = dp[i - 1][j - 1]

                totalCnt, removeCnt = 0, 0
                for h in range(i, 0, -1):
                    if s[h - 1] == s[i - 1]: totalCnt += 1
                    else: removeCnt += 1
                    
                    removed = 1
                    if j >= removeCnt:
                        removed += dp[h - 1][j - removeCnt] + encodeCnt(totalCnt)
                        if removed < dp[i][j]: dp[i][j] = removed
        return dp[n][k]