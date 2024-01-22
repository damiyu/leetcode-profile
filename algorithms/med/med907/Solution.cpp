#include <iostream>
#include <vector>
#include <stack>
using namespace std;

/*
 * 907: Sum of Subarray Minimums
 * Last Updated: Jan 21, 2024
 */
class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
        int n = arr.size(), mod = 1000000007, sumOfMinimums = 0;
        stack<int> idxs;

        for (int i = 0; i < n + 1; i++) {
            while (!idxs.empty() && (i == arr.size() || arr[idxs.top()] >= arr[i])) {
                int idx = idxs.top();
                idxs.pop();
                int min = idxs.empty() ? -1 : idxs.top();

                long count = (idx - min) * (i - idx) % mod;
                sumOfMinimums = (sumOfMinimums + ((count * arr[idx]) % mod)) % mod;
            }
            idxs.push(i);
        }

        return sumOfMinimums;
    }
};

// My Original Solution
/*class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
        int n = arr.size(), mod = 1000000007, cnt = 0;

        for (int i = 0; i < n; i++) {
            int curSmall = arr[i];

            for (int j = i; j > -1; j--) {
                curSmall = min({curSmall, arr[j]});
                cnt += curSmall;
            }
            cnt %= mod;
        }
        return cnt;
    }
};*/