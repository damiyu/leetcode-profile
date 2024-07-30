#include <iostream>
#include <algorithm>
#include <vector>
#include <unordered_map>
using namespace std;

/*
 * 1481: Least Number of Unique Integers after K Removals
 * Last Updated: Feb 15, 2024
 * Solve Time: 8 min & 42 sec 
 */
class Solution {
public:
    int findLeastNumOfUniqueInts(vector<int>& arr, int k) {
        unordered_map<int, int> cnts;
        int n = arr.size();

        for (int i = 0; i < n; i++) cnts[arr[i]]++;

        n = cnts.size();
        int* freq = (int*) malloc(n * sizeof(int));
        auto it = cnts.begin();
        for (int i = 0; i < n; i++, it++) freq[i] = (it->second);

        int removed = 0;
        sort(freq, freq + n);
        for (int i = 0, j = 0; i < n && j < k; i++) {
            if (j + freq[i] <= k) removed++;
            j += freq[i];
        }

        free(freq);
        return n - removed;
    }
};