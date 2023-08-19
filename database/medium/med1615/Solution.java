package medium.med1615;

/*
 * 1615: Maximal Network Rank
 * Last Updated: Aug 18, 2023
 */
public class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        short[] cnt = new short[n];
        int top = 0, sub = 0, max = 0, cur = 0;

        for (int[] r : roads) {
            cnt[r[0]]++;
            cnt[r[1]]++;
        }

        for (int num : cnt) {
            if (top < num) {
                sub = top;
                top = num;
            } else if (sub < num) sub = num;
        }

        for (short i = 0; i < n; i++) if (cnt[i] == top) max++;
        if (max == 1) {
            for (short i = 0; i < n; i++) if (cnt[i] == sub) max++;
            for (int[] r : roads) {
                if (cnt[r[0]] == top && cnt[r[1]] == sub) cur++;
                if (cnt[r[0]] == sub && cnt[r[1]] == top) cur++;
            }
            return cur < max - 1 ? top + sub : top + sub - 1;
        }

        for (int[] r : roads) if (cnt[r[0]] == top && cnt[r[1]] == top) cur++;
        max = (max * (max - 1)) >> 1;
        return cur < max ? top << 1 : (top << 1) - 1;
    }
}