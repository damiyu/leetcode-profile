from ast import List
from collections import defaultdict, deque

# 2050: Parallel Courses III
# Last Updated: Oct 18, 2023
class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        graph, courses, rank, tot = defaultdict(list), deque(), [0] * n, [0] * n

        for r in relations:
            graph[r[0] - 1].append(r[1] - 1)
            rank[r[1] - 1] += 1
        
        for i in range(n):
            if rank[i] == 0:
                courses.append(i)
                tot[i] = time[i]

        while courses:
            c = courses.pop()

            for p in graph[c]:
                rank[p] -= 1
                tot[p] = tot[p] if tot[p] > tot[c] + time[p] else tot[c] + time[p]
                if rank[p] == 0: courses.append(p)
        return max(tot)