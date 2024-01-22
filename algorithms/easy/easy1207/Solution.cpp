#include <iostream>
#include <vector>
#include <map>
#include <set>
using namespace std;

/*
 * 1207: Unique Number of Occurrences
 * Last Updated: Jan 17, 2024
 * Solve Time: 11 min & 22 sec
 */
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        map<int, int> cnts;
        int n = arr.size();
        
        map<int, int>::iterator numIter;
        for (int i = 0; i < n; i++) {
            numIter = cnts.find(arr[i]);

            if (numIter == cnts.end()) cnts.insert(pair<int, int>(arr[i], 1));
            else numIter->second++;
        }

        set<int> occur;
        numIter = cnts.begin();
        while(numIter != cnts.end()) {
            if (occur.find(numIter->second) != occur.end()) return false;
            else occur.insert(numIter->second);
            numIter++;
        }
        return true;
    }
};