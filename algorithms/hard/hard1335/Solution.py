from types import List

# 1335: Minimum Difficulty of a Job Schedule
# Last Updated: Dec 30, 2023
class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)
        if n < d: return -1

        prev, cur = [10000] * n, [10000] * n
        for i in range(d):
            idxs = []

            for j in range(i, n):
                if j == 0: cur[j] = jobDifficulty[0]
                else: cur[j] = prev[j - 1] + jobDifficulty[j]

                while idxs and jobDifficulty[idxs[-1]] <= jobDifficulty[j]:
                    idx = idxs.pop()
                    diff_incr = jobDifficulty[j] - jobDifficulty[idx]
                    cur[j] = min(cur[j], cur[idx] + diff_incr)

                if idxs: cur[j] = cur[j] if cur[j] < cur[idxs[-1]] else cur[idxs[-1]]
                idxs.append(j)
            prev, cur = cur, prev
        return prev[-1]