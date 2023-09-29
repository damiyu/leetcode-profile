package hard.hard847;
import java.util.*;

/*
 * 847: Shortest Path Visiting All Nodes
 * Last Updated: Sep 18, 2023
 */
public class Solution {
    public int shortestPathLength(int[][] graph) {
        int len = graph.length, finalMask = (1 << len) - 1, curMask;
        boolean[][] path = new boolean[len][1 << len];
        Queue<int[]> nextMove = new ArrayDeque<>();

        for (int i = 0; i < len; i++) {
            nextMove.offer(new int[]{i, 1 << i});
            path[i][1 << i] = true;
        }

        int[] curNode;
        int cnt = 0, left;
        while (!nextMove.isEmpty()) {
            left = nextMove.size();

            for (int i = 0; i < left; i++) {
                curNode = nextMove.poll();
                if (curNode[1] == finalMask) return cnt;

                for (int n : graph[curNode[0]]) {
                    curMask = curNode[1] | (1 << n);

                    if (!path[n][curMask]) {
                        nextMove.offer(new int[]{n, curMask});
                        path[n][curMask] = true;
                    }
                }
            }

            cnt++;
        }

        return cnt;
    }
}