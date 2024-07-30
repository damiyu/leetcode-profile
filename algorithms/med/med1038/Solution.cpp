#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    TreeNode* bstToGst(TreeNode* root) {
        int sum = 0;
        traverse(root, sum);
        return root;
    }
private:
    void traverse(TreeNode* node, int &sum) {
        if (node == nullptr) return;
        traverse(node->right, sum);
        node->val += sum;
        sum = node->val;
        traverse(node->left, sum);
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

// My Original Solution
/*class Solution {
public:
    TreeNode* bstToGst(TreeNode* root) {
        TreeNode* curNode = root;
        vector<int> order;

        traverse(curNode, order);
        sort(order.begin(), order.end());

        curNode = root;
        update(curNode, order);

        return root;
    }
private:
    void traverse(TreeNode* node, vector<int>& list) {
        if (node->left != nullptr) traverse(node->left, list);
        if (node->right != nullptr) traverse(node->right, list);
        list.push_back(node->val);
    }

    void update(TreeNode* node, vector<int>& list) {
        int val = node->val;
        auto it = find(list.begin(), list.end(), val);

        while (++it != list.end()) val += *it;
        node->val = val;

        if (node->left != nullptr) update(node->left, list);
        if (node->right != nullptr) update(node->right, list);
    }
};*/