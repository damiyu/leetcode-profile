#include <iostream>
using namespace std;

/*
 * 70: Climbing Stairs
 * Last Updated: Jan 17, 2024
 */
class Solution {
public:
    int climbStairs(int n) {
        return round(pow((1 + sqrt(5)) / 2, n + 1) / sqrt(5));
    }
};

// My Original Solution
/*
class Solution {
public:
    int climbStairs(int n) {
        int prev = 1, cur = 1, temp = 0;

        for (int i = 1; i < n; i++) {
            temp = cur;
            cur += prev;
            prev = temp;
        }
        return cur;
    }
};
*/