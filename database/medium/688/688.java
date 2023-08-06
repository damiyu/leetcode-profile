import java.util.*;
class Solution {
    public static void main(String[] args) {
        System.out.println("Test: " + knightProbability(10, 12, 0, 0));
    }

    public static double knightProbability(int n, int k, int row, int column) {
        if (k == 0) {
            return 1.0;
        }

        int[] moves = {-1,-2,-2,-1,-2,1,-1,2,1,-2,2,-1,2,1,1,2};
        Queue<Integer> curPos = new LinkedList<Integer>();
        curPos.add(row);
        curPos.add(column);
        int cnt = 0;

        for (int i = 0; i < k; i++) {
            int size = curPos.size() / 2;
            System.out.println("Size: " + size);

            for (int j = 0; j < size; j++) {
                int curRow = curPos.remove();
                int curCol = curPos.remove();

                for (int t = 0; t < 16; t += 2) {
                    if (curRow + moves[t] >= 0 && curCol + moves[t + 1] >= 0 && curRow + moves[t] < n && curCol + moves[t + 1] < n) {
                        if (i == k - 1) {
                            cnt++;
                        }
                        curPos.add(curRow + moves[t]);
                        curPos.add(curCol + moves[t + 1]);
                    }
                }
            }
        }
        return cnt / Math.pow(8, k);
    }
}
