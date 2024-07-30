#include <iostream>
#include <vector>
using namespace std;

/* 
 * 1291: Sequential Digits
 * Last Updated: Feb 22, 2024
 */
class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        int start = myBST(0, 36, low), end = myBST(0, 36, high);
        vector<int> digits;

        for (int i = start; i < end; i++) digits.push_back(allDigits[i]);
        if (end < 36 && high == allDigits[end]) digits.push_back(allDigits[end]);
        return digits;
    }
private:
    int allDigits[36] = {12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345,
                3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678,
                456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789};

    int myBST(int left, int right, int target) {
        int mid = (left + right) / 2;

        while (left < mid) {
            if (allDigits[mid] < target) {
                left = mid;
                mid = (left + right) / 2;
            } else if (allDigits[mid] > target) {
                mid = (mid + left) / 2;
            } else {
                break;
            }
        }

        if (allDigits[mid] == target) return mid;
        return allDigits[mid] < target ? mid + 1 : mid;
    }
};

// My Original Solution
/*class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        int startingPoints[] = {12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789};
        int adderPoints[] = {11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111};
        int pointCounts[] = {8, 7, 6, 5, 4, 3, 2, 1};
        vector<int> digits;

        int startIdx = 0;
        for (int i = 0; i < 8; i++) if (low > startingPoints[i]) startIdx = i;
        
        int curVal = startingPoints[startIdx], adder = adderPoints[startIdx], cnt = pointCounts[startIdx++];         
        while (curVal <= high && cnt-- > 0) {
            if (curVal >= low) digits.push_back(curVal);

            curVal += adder;
            if (cnt == 0 && startIdx < 8) {
                curVal = startingPoints[startIdx];
                adder = adderPoints[startIdx];
                cnt = pointCounts[startIdx++];
            }
        }
        return digits;
    }
};*/