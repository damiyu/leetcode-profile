#include <stddef.h>

/*
 * 237: Delete Node in a Linked List
 * Last Updated: May 5, 2024
 * Solve Time: 16 min & 39 sec
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        ListNode* cur = node;

        while (cur->next->next != NULL) {
            cur->val = cur->next->val;
            cur = cur->next;
        }

        cur->val = cur->next->val;
        cur->next = NULL;
    }
};

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};