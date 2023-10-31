import math

# 458: Poor Pigs
# Last Updated: Oct 28, 2023
# Solve Time: 26 min & 49 sec
class Solution:
    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:
        return math.ceil(math.log10(buckets) / math.log10(minutesToTest // minutesToDie + 1))