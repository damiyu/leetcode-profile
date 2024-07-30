#include <iostream>
#include <vector>
using namespace std;

/*
 * 786: K-th Smallest Prime Fraction
 * Last Updated: Jul 9, 2024
 */
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        const int n = arr.size();
        double left = 0, right = 1, mid = 0.5;

        while (left <= right) {
            int j = 1, error = 0, val1 = 0, val2 = 0;
            double maxVal = 0;

            mid = left + (right - left) / 2;
            for (int i = 0; i < n; ++ i) {
                while (j < n && arr[i] >= arr[j] * mid) j++;
                
                error += n - j;
                if (j < n && maxVal < (double) arr[i] / arr[j]) {
                    maxVal = (double) arr[i] / arr[j];
                    val1 = arr[i];
                    val2 = arr[j];
                }
            }

            if (error == k) return vector<int>{val1, val2};
            else if (error > k) right = mid;
            else left = mid;
        }

        return vector{arr[0], arr[1]};
    }
};