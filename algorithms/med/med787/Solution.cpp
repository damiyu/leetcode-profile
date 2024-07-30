#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
using namespace std;

/*
 * 787: Cheapest Flights Within K Stops
 * Last Updated: Feb 23, 2024
 */
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        unordered_map<int, vector<pair<int, int>>> price_map(n);
        vector<int> path_mins(n, INT_MAX);
        queue<pair<int, int>> next_flight;
        int cur_stops = 0;

        next_flight.push({src, 0});
        for (auto flight : flights) price_map[flight[0]].push_back({flight[1], flight[2]});
        while(!next_flight.empty() && cur_stops <= k){
            int size = next_flight.size();

            while (size--) {
                auto [cur_stop, cur_cost] = next_flight.front();
                next_flight.pop();

                for (auto [next_stop, next_cost] : price_map[cur_stop]) {
                    if (cur_cost + next_cost < path_mins[next_stop]){
                        path_mins[next_stop] = cur_cost + next_cost;
                        next_flight.push({next_stop, path_mins[next_stop]});
                    }
                }
            }
            cur_stops++;
        }

        if(path_mins[dst] == INT_MAX) return -1;
        return path_mins[dst];
    }
};