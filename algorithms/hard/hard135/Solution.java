package hard.hard135;

/*
 * 135: Candy
 * Last Updated: Sep 13, 2023
 * Solve Time: 32 min & 56 sec
 */
public class Solution {
    public int candy(int[] ratings) {
        int len = ratings.length, totalCnt = len;
        int[] cnts = new int[totalCnt];

        for (int i = 1; i < len; i++) {
            if (ratings[i] > ratings[i - 1]) cnts[i] = cnts[i - 1] + 1;
        }

        for (int i = len - 2; i > -1; i--) {
            if (ratings[i] > ratings[i + 1] && cnts[i] <= cnts[i + 1]) {
                cnts[i] = cnts[i + 1] + 1;
            }
        }

        for (int n : cnts) totalCnt += n;
        return totalCnt;
    }
}

// My Original Solution
/*class Solution {
    public int candy(int[] ratings) {
        int len = ratings.length, totalCnt = len, cnt = 0;
        if (len == 1) return totalCnt;

        int[] cnts = new int[len];
        int curRating, prevRating, nextRating;
        boolean giveCandy = true;
        while (giveCandy) {
            if (ratings[0] > ratings[1] && cnts[0] <= cnts[1]) {
                cnt++;
                cnts[0]++;
            }
            if (ratings[len - 1] > ratings[len - 2] && cnts[len - 1] <= cnts[len - 2]) {
                cnt++;
                cnts[len - 1]++;
            }

            for (int i = 1; i < len - 1; i++) {
                curRating = ratings[i];
                prevRating = ratings[i - 1];
                nextRating = ratings[i + 1];

                if (curRating > prevRating && cnts[i] <= cnts[i - 1]) {
                    cnt++;
                    cnts[i]++;
                } else if (curRating > nextRating && cnts[i] <= cnts[i + 1]) {
                    cnt++;
                    cnts[i]++;
                }
            }

            giveCandy = cnt > 0;
            totalCnt += cnt;
            cnt = 0;
        }

        return totalCnt;
    }
}*/