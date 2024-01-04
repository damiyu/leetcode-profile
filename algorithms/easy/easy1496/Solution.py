# 1496: Path Crossing
# Last Updated: Dec 23, 2023
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        s, x, y = set(), 0, 0

        s.add((0, 0))
        for d in path:
            if d == 'N': y += 1
            elif d == 'S': y -= 1
            elif d == 'E': x += 1
            else: x -= 1

            if (x, y) in s: return True
            s.add((x, y))
        return False