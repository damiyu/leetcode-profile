# 706: Design HashMap
# Last Updated: Oct 3, 2023
# Solve Time: 8 min & 32 sec
class MyHashMap:
    def __init__(self):
        self.dict = {}

    def put(self, key: int, value: int) -> None:
        self.dict[key] = value

    def get(self, key: int) -> int:
        return self.dict[key] if key in self.dict else -1

    def remove(self, key: int) -> None:
        if key in self.dict: self.dict.pop(key)

# My Original Solution:
'''
class MyHashMap:
    array = []

    def __init__(self):
        self.array = [-1] * (10 ** 6 + 1)

    def put(self, key: int, value: int) -> None:

        self.array[key] = value

    def get(self, key: int) -> int:
        return self.array[key]

    def remove(self, key: int) -> None:
        self.array[key] = -1
'''