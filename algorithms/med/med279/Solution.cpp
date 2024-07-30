#include <iostream>
using namespace std;

/*
 * 279: Perfect Squares
 * Last Updated: Feb 9, 2024
 */
class Solution {
public:
    int numSquares(int n) {
        int num_sqrts = sqrt(n);
        int* sqrts = (int*) calloc(num_sqrts, sizeof(int));
        int* min_cnts = (int*) calloc(n + 1, sizeof(int));

        for (int i = 1; i < num_sqrts + 1; i++) sqrts[i - 1] = i * i;
        for (int i = 1; i < n + 1; i++) min_cnts[i] = INT_MAX;
        for (int i = 1; i < n + 1; i++) {
            for (int j = 0; j < num_sqrts; j++) {
                if (sqrts[j] <= i) min_cnts[i] = min(min_cnts[i - sqrts[j]] + 1, min_cnts[i]);
            }
        }

        int min = min_cnts[n];
        free(sqrts);
        free(min_cnts);
        return min;
    }
};