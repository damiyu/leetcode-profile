#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 2487: Remove Nodes From Linked List
 * Last Updated: May 6, 2024
 */
class Solution {
public:
    ListNode* removeNodes(ListNode* head) {
        vector<pair<int, ListNode*>> nodes;
        ListNode* tail = head;
        int idx = 0;

        while (head != nullptr) {
            nodes.push_back(pair<int, ListNode*>(idx, head));
            tail = head;
            head = head->next;
            idx++;
        }

        const int n = nodes.size();
        sort(nodes.begin(), nodes.end(), cmp);

        head = nodes[0].second;
        idx = nodes[0].first;
        for (int i = 1; i < n; i++) {
            if (nodes[i].first > idx) {
                head->next = nodes[i].second;
                head = head->next;
                idx = nodes[i].first;
            }
            if (nodes[i].second == tail) break;
        }

        return nodes[0].second;
    }

    static bool cmp(const pair<int, ListNode*> &a, const pair<int, ListNode*> &b) {
        if (a.second->val == b.second->val) return a.first < b.first;
        else return a.second->val > b.second->val;
    }
};

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};