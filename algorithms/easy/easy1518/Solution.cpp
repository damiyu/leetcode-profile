#include <iostream>
using namespace std;

/*
 * 1518: Water Bottles
 * Last Updated: Jul 6, 2024
 * Solve Time: 8 min & 39 sec
 */
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        return (numBottles * numExchange - 1) / (numExchange - 1);
    }
};

// My Original Solution
/*class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int prev = 0, empty = 0, sum = 0;

        while (numBottles > 0) {
            sum += numBottles;
            prev = numBottles;
            numBottles = (empty + numBottles) / numExchange;
            empty = (empty + prev) % numExchange;
        }

        return sum;
    }
};*/