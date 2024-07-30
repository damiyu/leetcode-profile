#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

/*
 * 857: Minimum Cost to Hire K Workers
 * Last Updated: Jul 9, 2024
 */
class Solution {
public:
    double mincostToHireWorkers(vector<int> quality, vector<int> wage, int k) {
        vector<vector<double>> list;
        priority_queue<int> order;

        for (int i = 0; i < quality.size(); i++) {
            list.push_back({(double) wage[i] / quality[i], (double) quality[i]});
        }
        sort(list.begin(), list.end());

        double minCost = DBL_MAX, curCost = 0;

        for (auto worker : list) {
            curCost += worker[1], order.push(worker[1]);

            if (order.size() > k) {
                curCost -= order.top();
                order.pop();
            }
            if (order.size() == k) minCost = min(minCost, curCost * worker[0]);
        }

        return minCost;
    }
};