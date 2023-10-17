from ast import List
import bisect

# 2251: Number of Flowers in Full Bloom
# Last Updated: Oct 11, 2023
class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        bloom, wilt = [], []
        for b, w in flowers:
            bloom.append(b)
            wilt.append(w + 1)

        bloom.sort()
        wilt.sort()
        for i in range(len(people)):
            t = people[i]
            people[i] = bisect.bisect_right(bloom, t) - bisect.bisect_right(wilt, t)
        return people