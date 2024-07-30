#include <iostream>
using namespace std;

/*
 * 2816: Double a Number Represented as a Linked List
 * Last Updated: Jul 3, 2024
 * Solve Time: 8 min & 27 sec
 */
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        ListNode* curNode = head, *prevNode;

        int headVal = curNode->val << 1;
        if (headVal > 9) {
            headVal -= 10;
            head = new ListNode(1, curNode);
        }
        curNode->val = headVal;
        prevNode = curNode;
        curNode = curNode->next;

        while (curNode != nullptr) {
            int val = curNode->val << 1;

            if (val > 9) {
                val -= 10;
                prevNode->val++;
            }

            curNode->val = val;
            prevNode = curNode;
            curNode = curNode->next;
        }

        return head;
    }
};

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};