#include <iostream>
#include <map>
#include <vector>
using namespace std;

/*
 * 2225: Find Players With Zero or One Losses
 * Last Updated: Jan 15, 2024
 */
class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>> &matches) {
        int n = matches.size(), winner = 0, loser = 0;

        map<int, int> loseCnt;
        map<int, int>::iterator loseIter = loseCnt.begin();
        for (int i = 0; i < n; i++) {
            winner = matches[i][0], loser = matches[i][1];

            if (loseCnt.find(winner) == loseCnt.end()) {
                loseCnt.insert(pair<int, int> (winner, 0));
            }

            loseIter = loseCnt.find(loser);
            if (loseIter == loseCnt.end()) {
                loseCnt.insert(pair<int, int> (loser, 1));
            } else {
                loseIter->second++;
            }
        }

        vector<vector<int>> answer(2);
        loseIter = loseCnt.begin();
        while (loseIter != loseCnt.end()) {
            int player = loseIter->first, loses = loseIter->second;
            
            if (loses == 0) answer[0].push_back(player);
            else if (loses == 1) answer[1].push_back(player);
            loseIter++;
        }
        return answer;
    }
};