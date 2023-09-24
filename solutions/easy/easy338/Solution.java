package easy.easy338;

/*
 * 338: Counting Bits
 * Last Updated: Sep 9, 2023
 * Solve Time: 5 min & 40 sec
 */
public class Solution {
    public int[] countBits(int n) {
        int[] bits = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            bits[i] = bits[i >> 1] + (i & 1);
        }

        return bits;
    }
}

// My Original Solution
/*class Solution {
    public int[] countBits(int n) {
        int[] bits = new int[n + 1];
        int num, cnt;

        for (int i = 1; i <= n; i++) {
            cnt = 0;
            num = i;

            while (num != 0) {
                if (num % 2 == 1) cnt++;
                num >>= 1;
            }

            bits[i] = cnt;
        }

        return bits;
    }
}*/