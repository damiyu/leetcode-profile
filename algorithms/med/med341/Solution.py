from typing import Union, List

# 341: Flatten Nested List Iterator
# Last Updated: Oct 19, 2023
# Solve Time: 35 min 28 sec
class NestedIterator:
    def __init__(self, nestedList: ['NestedInteger']):
        order, temp = [], []

        order.append(nestedList)
        while order:
            lst = order.pop()

            while lst:
                vals = lst.pop()

                if vals.isInteger():
                    temp.append(vals.getInteger())
                else:
                    order.append(lst)
                    order.append(vals.getList())
                    break
        
        self.idx = 0
        self.size = len(temp)
        self.arr = temp[::-1]
    
    def next(self) -> int:
        num = self.arr[self.idx]
        self.idx += 1
        return num
    
    def hasNext(self) -> bool:
        return self.idx < self.size

class NestedInteger:
        def __init__(self, nested: Union(int, List[int])):
            self.nest = nested

        def isInteger(self) -> bool:
            return isinstance(self.nest, int)

        def getInteger(self) -> int:
            if isinstance(self.nest, int): return self.nest

        def getList(self) -> ['NestedInteger']:
            if isinstance(self.nest, List[int]): return self.nest