from ast import List

# 456: 132 Pattern
# Last Updated: Sep 30, 2023
class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        front, mid = [], -1000000001
        while nums:
            n = nums.pop()
            if n < mid:
                return True
            while front and front[-1] < n:
                mid = front.pop()
            front.append(n)
        return False