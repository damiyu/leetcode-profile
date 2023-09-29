package med.med688;

/*
 * 688: Knight Probability in Chessboard
 * Last Updated: Sep 3, 2023
 */
public class Solution {
    public static double knightProbability(int n, int k, int row, int column) {
        if (k == 0) return 1.0;
        int[] moves = {-1,-2,-2,-1,-2,1,-1,2,1,-2,2,-1,2,1,1,2};
        double[][][] dp = new double[k + 1][n][n];
        double p = 0.0;
        int oldX, oldY;

        dp[0][row][column] = 1.0;
        for (byte i = 1; i <= k; i++) {
            for (byte x = 0; x < n; x++) {
                for (byte y = 0; y < n; y++) {
                    for (byte j = 0; j < 16; j += 2) {
                        oldX = x - moves[j];
                        oldY = y - moves[j + 1];

                        if (oldX >= 0 && oldX < n && oldY >= 0 && oldY < n) {
                            dp[i][x][y] += dp[i - 1][oldX][oldY] / 8.0;
                        }
                    }
                }
            }
        }

        for (byte x = 0; x < n; x++) for (byte y = 0; y < n; y++) p += dp[k][x][y];
        return p;
    }
}