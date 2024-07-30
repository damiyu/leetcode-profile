#include <iostream>
#include <stack>
using namespace std;

/*
 * 232: Implement Queue using Stacks
 * Last Updated: Jan 29, 2024
 */
class MyQueue {
private:
    stack<int> front, back;
    bool isFront;
    int head;
public:
    MyQueue() {
        isFront = true;
        head = NULL;
    }
    
    void push(int x) {
        if (isFront) {
            if (front.size() == 0) head = x;
            front.push(x);
        } else {
            if (back.size() == 0) head = x;

            int n = back.size();
            for (int i = 0; i < n; i++) {
                front.push(back.top());
                back.pop();
            }

            front.push(x);
            isFront = true;
        }
    }
    
    int pop() {
        int val;

        if (isFront) {
            int n = front.size() - 1;

            for (int i = 0; i < n; i++) {
                back.push(front.top());
                front.pop();
            }

            val = front.top();
            front.pop();
            isFront = false;
        } else {
            val = back.top();
            back.pop();
        }

        if (back.size() > 0) head = back.top();
        return val;
    }
    
    int peek() {
        return head;
    }
    
    bool empty() {
        return (isFront && front.size() == 0) || (!isFront && back.size() == 0);
    }
};