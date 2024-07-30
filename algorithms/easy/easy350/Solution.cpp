#include <iostream>
#include <vector>
using namespace std;

/*
 * 350: Intersection of Two Arrays II
 * Last Updated: Jul 1, 2024
 * Solve Time: 6 min & 53 sec
 */
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        vector<int> intersect;
        int same[1001];

        for (const int val : nums1) same[val]++;
        for (const int val : nums2) {
            if (same[val] > 0) {
                intersect.push_back(val);
                same[val]--;
            }
        }

        return intersect;
    }
};