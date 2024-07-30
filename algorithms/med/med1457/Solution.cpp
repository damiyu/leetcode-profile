#include <iostream>
#include <vector>
using namespace std;

/*
 * 1457: Pseudo-Palindromic Paths in a Binary Tree
 * Last Updated: Jan 23, 2024
 * Solve Time: 43 min & 25 sec
 */
class Solution {
public:
    int pseudoPalindromicPaths (TreeNode* root) {
        vector<int> cnts(10, 0);
        vector<vector<int>> paths, leaves = getLeafPaths(root, paths, cnts);
        int n = leaves.size(), cnt = 0;

        for (int i = 0; i < n; i++) {
            int oddCnt = 0;

            for (int j = 0; j < 10; j++) if (leaves[i][j] % 2 == 1) oddCnt++;
            if (oddCnt < 2) cnt++;
        }
        return cnt;
    }

    vector<vector<int>> getLeafPaths(TreeNode* node, vector<vector<int>> paths, vector<int> cnts) {
        cnts[node->val]++;

        if (node->left == nullptr && node->right == nullptr) {
            paths.push_back(cnts);
            return paths;
        } else if (node->left == nullptr) {
            return getLeafPaths(node->right, paths, cnts);
        } else if (node->right == nullptr) {
            return getLeafPaths(node->left, paths, cnts);
        }

        vector<vector<int>> left = getLeafPaths(node->left, paths, cnts);
        vector<vector<int>> right = getLeafPaths(node->right, paths, cnts);
        left.insert(left.end(), right.begin(), right.end());
        return left;
    }
};

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};