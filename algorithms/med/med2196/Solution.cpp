#include <iostream>
#include <unordered_map>
#include <set>
#include <vector>
using namespace std;

/*
 * 2196: Create Binary Tree From Descriptions
 * Last Updated: Jul 14, 2024
 * Solve Time: 16 min & 27 sec
 */
class Solution {
public:
    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {
        const int n = descriptions.size();
        unordered_map<int, TreeNode*> nodes;
        set<int> children;

        for (int i = 0; i < n; i++) {
            const int parVal = descriptions[i][0], chiVal = descriptions[i][1], isLeft = descriptions[i][2];

            TreeNode* parent = nodes.find(parVal) != nodes.end() ? nodes[parVal] : new TreeNode(parVal);
            TreeNode* child = nodes.find(chiVal) != nodes.end() ? nodes[chiVal] : new TreeNode(chiVal);
            children.insert(chiVal);

            if (isLeft) parent->left = child;
            else parent->right = child;

            nodes[parVal] = parent;
            nodes[chiVal] = child;
        }

        for (int i = 0; i < n; i++) if (children.find(descriptions[i][0]) == children.end()) return nodes[descriptions[i][0]];

        return new TreeNode(0);
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