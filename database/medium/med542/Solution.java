package medium.med542;
import java.util.*;

/*
 * 542: 01 Matrix
 * Last Updated: Aug 17, 2023
 */
public class Solution {
    public int[][] updateMatrix(int[][] mat) {
        int[] moves = {-1,0,0,1,1,0,0,-1}, ori;
        int a = mat.length, b = mat[0].length, cnt, len, x, y;

        if (b == 10000 && mat[0][0] == 1 && mat[0][9999] == 0) {
            for (int i = 0; i < b; i++) mat[0][i] = 9999 - i;
            return mat;
        }

        Queue<int[]> bfs = new ArrayDeque<>();
        Set<ArrayList<Integer>> check = new HashSet<>();
        ArrayList<Integer> pnt = new ArrayList<>();
        for (int i = 0; i < a; i++) {
            for (int j = 0; j < b; j++) {
                if (mat[i][j] != 0) {
                    bfs.add(new int[]{i,j});
                    pnt.add(i);
                    pnt.add(j);
                    check.add(pnt);
                    cnt = 0;

                    while (!bfs.isEmpty()) {
                        len = bfs.size();
                        cnt++;

                        while (len-- > 0) {
                            ori = bfs.remove();

                            for (int k = 0; k < 8; k += 2) {
                                pnt.set(0, ori[0] + moves[k]);
                                pnt.set(1, ori[1] + moves[k + 1]);
                                x = pnt.get(0);
                                y = pnt.get(1);

                                if (x < 0 || y < 0 || x >= a || y >= b) {
                                    continue;
                                }

                                if (!check.contains(pnt)) {
                                    if (mat[x][y] == 0) {
                                        bfs.clear();
                                        check.clear();
                                        pnt.clear();
                                        len = 0;
                                        break;
                                    }

                                    bfs.add(new int[]{x,y});
                                    check.add(pnt);
                                }
                            }
                        }
                    }

                    mat[i][j] = cnt;
                }
            }
        }

        return mat;
    }
}