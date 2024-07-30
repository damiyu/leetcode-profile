#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 1382: Balance a Binary Search Tree
 * Last Updated: Jun 26, 2024
 */
class Solution {
public:
    TreeNode* balanceBST(TreeNode* root) {
        vector<int> order;
        getNodes(root, order);
        sort(order.begin(), order.end());

        return balance(order, 0, order.size());
    }
private:
    void getNodes(TreeNode* node, vector<int> &order) {
        if (node->left != nullptr) getNodes(node->left, order);
        if (node->right != nullptr) getNodes(node->right, order);
        order.push_back(node->val);
    }

    TreeNode* balance(vector<int> &order, int left, int right) {
        const int mid = (left + right) >> 1, val = order[mid];
        if (!order[mid]) return nullptr;

        order[mid] = 0;
        TreeNode* node = new TreeNode(val, balance(order, left, mid), balance(order, mid, right));

        return node;
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