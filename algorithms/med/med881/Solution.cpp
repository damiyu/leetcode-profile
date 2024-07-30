#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 881: Boats to Save People
 * Last Updated: Jul 3, 2024
 * Solve Time: 14 min & 52 sec
 */
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        const int n = people.size();
        int cnt = 0;

        sort(people.begin(), people.end());
        for (int i = n - 1, j = 0; j <= i; i--) {
            if (people[i] + people[j] <= limit) j++;
            cnt++;
        }

        return cnt;
    }
};