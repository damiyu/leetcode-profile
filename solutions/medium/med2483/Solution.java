package medium.med2483;

/*
 * 2483: Minimum Penalty for a Shop
 * Last Updated: Aug 29, 2023
 */
class Solution {
    public int bestClosingTime(String customers) {
        char[] arrive = customers.toCharArray();
        int len = customers.length(), prevPen = 0, bestPen = 0, bestHour = 0;

        bestPen = prevPen;
        for (int i = 0; i < len; i++) {
            prevPen += arrive[i] == 'Y' ? -1 : 1;

            if (prevPen < bestPen) {
                bestHour = i + 1;
                bestPen = prevPen;
            }
        }

        return bestHour;
    }
}