#include <iostream>
#include <vector>
using namespace std;

/*
 * 2192: All Ancestors of a Node in a Directed Acyclic Graph
 * Last Updated: Jun 29, 2024
 */
class Solution {
public:
    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {
        vector<vector<int>> direct(n), ancestors(n);
        const int m = edges.size();

        for (int i = 0; i < m; i++) direct[edges[i][0]].push_back(edges[i][1]);
        for (int i = 0; i < n; i++) traverse(direct, ancestors, i, i);

        return ancestors;
    }

private:
    void traverse(vector<vector<int>> &dir, vector<vector<int>> &anc, int node, int source) {
        for (int i : dir[node]) {
            if (anc[i].empty() || anc[i].back() != source) {
                anc[i].push_back(source);
                traverse(dir, anc, i, source);
            }
        }
    }
};