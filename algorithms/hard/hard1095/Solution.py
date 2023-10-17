# 1095: Find in Mountain Array
# Last Updated: Oct 11, 2023
class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        n = mountain_arr.length()
        top, end, mid = 0, n - 1, n >> 1
        while top < end:
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1): top = mid + 1
            else: end = mid
            mid = (top + end) >> 1

        peak, idx1, top = top, top >> 1, 0
        while top < idx1:
            if mountain_arr.get(idx1) < target:
                top = idx1
                idx1 = (idx1 + peak) >> 1
            elif mountain_arr.get(idx1) > target:
                idx1 = (idx1 + top) >> 1
            else:
                break
        if mountain_arr.get(idx1) == target: return idx1

        idx2 = (peak + n) >> 1
        while peak < idx2:
            if mountain_arr.get(idx2) < target:
                n = idx2
                idx2 = (idx2 + peak) >> 1
            elif mountain_arr.get(idx2) > target:
                peak = idx2
                idx2 = (idx2 + n) >> 1
            else:
                break
        return idx2 if mountain_arr.get(idx2) == target else -1


class MountainArray:
    def __init__(self):
        self.arr = []

    def get(self, index: int) -> int:
        return self.arr[index]

    def length(self) -> int:
        return len(self.arr)