#include <iostream>
#include <vector>
using namespace std;

/*
 * 1598: Crawler Log Folder
 * Last Updated: Jul 9, 2024
 * Solve Time: 6 min & 37 sec
 */
class Solution {
public:
    int minOperations(vector<string>& logs) {
        const int n = logs.size();
        int depth = 0;

        for (int i = 0; i < n; i++) {
            if (logs[i] == "./") continue;
            else if (logs[i] == "../") depth = depth == 0 ? 0 : depth - 1;
            else depth++;
        }

        return depth;
    }
};