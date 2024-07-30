#include <iostream>
#include <vector>
using namespace std;

/*
 * 1791: Find Center of Star Graph
 * Last Updated: Jun 26, 2024
 */
class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        const int a = edges[0][0], b = edges[0][1], c = edges[1][0], d = edges[1][1];
        return a == c || a == d ? a : b;
    }
};