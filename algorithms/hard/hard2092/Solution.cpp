#include <iostream>
#include <vector>
#include <queue>
using namespace std;

/*
 * 2092: Find All People With Secret
 * Last Updated: Jul 29, 2024
 */
class Solution {
public:
    vector<int> findAllPeople(int n, vector<vector<int>>& meetings, int firstPerson) { 
        vector<vector<pair<int, int>>> graph(n);
        for (int i = 0; i < meetings.size(); i++) {
            graph[meetings[i][0]].push_back({meetings[i][1],meetings[i][2]});
            graph[meetings[i][1]].push_back({meetings[i][0],meetings[i][2]});
        }

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> order;
        order.push({0, firstPerson});
        order.push({0, 0});

        vector<bool> visit(n,false);

        while (!order.empty()) {
            const int t = order.top().first, p = order.top().second;
            order.pop();
			
            if (visit[p]) continue;
            visit[p] = true;
			
            for(pair<int,int> neigh : graph[p]){
                if (!visit[neigh.first] && t <= neigh.second) order.push({neigh.second,neigh.first});
            }
        }

        vector<int> known;
        for (int i = 0; i < n ; i++) if (visit[i]) known.push_back(i);

        return known;
    }
};