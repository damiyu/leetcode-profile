package med.med646;
import java.util.*;

/*
 * 646: Maximum Length of Pair Chain
 * Last Updated: Aug 26, 2023
 */
public class Solution {
    public int findLongestChain(int[][] pairs) {
        PriorityQueue<int[]> order = new PriorityQueue<>((p1, p2) -> p1[1] - p2[1]);
        for (int[] pair : pairs) order.add(pair);
        int max = 0, top = -1001;

        int[] pair;
        while (!order.isEmpty()) {
            pair = order.poll();

            if (top < pair[0]) {
                top = pair[1];
                max++;
            }
        }

        return max;
    }
}