package easy.easy1337;

/*
 * 1337: The K Weakest Rows in a Matrix
 * Last Updated: Dec 24, 2022
 */
public class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        byte[] soldCnt = new byte[mat.length];
        int[] soldRowIdx = new int[k];

        for (byte i = 0; i < mat.length; i++) {
            byte cnt = 0;

            for (byte j = 0; j < mat[0].length; j++) {
                if (mat[i][j] == 1) {
                    cnt++;
                    continue;
                }
                
                break;
            }

            soldCnt[i] = cnt;
        }

        for (byte i = 0; i < (byte)k; i++) {
            byte minIdx = 0;

            for (byte j = 1; j < soldCnt.length; j++) {
                if (soldCnt[j] < soldCnt[minIdx]) {
                    minIdx = j;
                }
            }

            soldRowIdx[i] = minIdx;
            soldCnt[minIdx] = (byte)101;
        }

        return soldRowIdx;
    }
}