#include <iostream>
#include <vector>
using namespace std;

/*
 * 1530: Number of Good Leaf Nodes Pairs
 * Last Updated: Jul 17, 2024
 */
class Solution {
public:
    int countPairs(TreeNode* root, int distance) {
        int cnt = 0;

        search(root, distance, cnt);

        return cnt;
    }
    
private:
    vector<int> search(TreeNode* node, int distance, int& cnt) {
        if (!node->left && !node->right) return {1};

        vector<int> left, right;

        if (node->left) left = search(node->left, distance, cnt);
        if (node->right) right = search(node->right, distance, cnt);

        const int m = left.size(), n = right.size();

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (left[i] + right[j] <= distance) ++cnt;
            }
        }

        vector<int> pathCosts;
        for (int i = 0; i < m; i++) if (left[i] + 1 < distance) pathCosts.push_back(left[i] + 1);
        for (int i = 0; i < n; i++) if (right[i] + 1 < distance) pathCosts.push_back(right[i] + 1);

        return pathCosts;
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