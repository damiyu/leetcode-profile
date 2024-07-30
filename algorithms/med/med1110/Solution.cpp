#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

/*
 * 1110: Delete Nodes And Return Forest
 * Last Updated: Jul 16, 2024
 * Solve Time: 22 min & 49 sec
 */
class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        vector<TreeNode*> roots;
        unordered_set<int> remove(to_delete.begin(), to_delete.end());

        if (remove.find(root->val) == remove.end()) roots.push_back(root);
        traverse(root, new TreeNode(0), true, remove, roots);

        return roots;
    }

private:
    void traverse(TreeNode* node, TreeNode* parent, bool left, unordered_set<int> remove, vector<TreeNode*>& roots) {
        const bool found = remove.find(node->val) != remove.end();

        if (found) {
            if (left) parent->left = nullptr;
            else parent->right = nullptr;
        }
        if (node->left != nullptr) {
            if (found && remove.find(node->left->val) == remove.end()) roots.push_back(node->left);
            traverse(node->left, node, true, remove, roots);
        }
        if (node->right != nullptr) {
            if (found && remove.find(node->right->val) == remove.end()) roots.push_back(node->right);
            traverse(node->right, node, false, remove, roots);
        }
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