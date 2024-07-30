#include <iostream>
#include <vector>
#include <queue>
using namespace std;

/*
 * 1642: Furthest Building You Can Reach
 * Last Updated: Feb 16, 2024
 * Solve Time: 43 mins & 12 sec
 */
class Solution {
public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        priority_queue<int> crossed;
        int n = heights.size() - 1, idx = 0;
        int* diff = (int*) malloc(n * sizeof(int));

        for (int i = 0; i < n; i++) diff[i] = heights[i + 1] - heights[i];
        for (int i = 0; i < n; i++) {
            if (diff[i] <= 0) {
                idx++;
                continue;
            } else if (bricks - diff[i] >= 0) {
                bricks -= diff[i];
                crossed.push(diff[i]);
            } else if (ladders > 0) {
                int largest_diff = crossed.empty() ? 0 : crossed.top();

                ladders--;
                if (largest_diff > diff[i]) {
                    bricks += largest_diff - diff[i];
                    crossed.pop();
                    crossed.push(diff[i]);
                }
            } else {
                break;
            }

            idx++;
        }

        free(diff);
        return idx;
    }
};