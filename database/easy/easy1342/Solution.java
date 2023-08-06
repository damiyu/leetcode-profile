package easy.easy1342;

/*
 * 1342: Number of Steps to Reduce a Number to Zero
 * Last Updated: Dec 25, 2022
 */
public class Solution {
    public int numberOfSteps(int num) {
        int steps = 0;

        while (num != 0) {
            steps += 1;
            if (num % 2 == 0) {
                num /= 2;
                continue;
            }

            num -= 1;
        }

        return steps;
    }
}