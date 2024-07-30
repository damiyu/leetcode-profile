#include <iostream>
using namespace std;

/*
 * 231: Power of Two
 * Last Updated: Feb 19, 2024
 * Solve Time: 7 min and 22 sec
 */
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return n > 0 && ceil(log2(n)) == floor(log2(n));
    }
};

// My Original Solution
/*class Solution {
public:
    bool isPowerOfTwo(int n) {
        if (n < 1) return false;
        if (n == 1) return true;

        while (n > 1) {
            if (n % 2 == 1) return false;
            n /= 2;
        }
        return true;
    }
};*/