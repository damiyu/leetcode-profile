#include <iostream>
#include <set>
using namespace std;

/*
 * 380: Insert Delete GetRandom O(1)
 * Last Updated: Jan 17, 2024
 */
class RandomizedSet {
public:
    set<int> mySet;
    int size;

    RandomizedSet() {
        size = 0;
    }
    
    bool insert(int val) {
        if (mySet.find(val) != mySet.end()) return false;
        mySet.insert(val);
        size++;
        return true;
    }
    
    bool remove(int val) {
        if (mySet.find(val) == mySet.end()) return false;
        mySet.erase(val);
        size--;
        return true;
    }
    
    int getRandom() {
        int ran = rand() % size;
        set<int>::iterator it = mySet.begin();

        for (int i = 0; i < ran; i++) it++;
        return *it;
    }
};