package med.med1584;
import java.util.*;

/*
 * 1584: Min Cost to Connect All Points
 * Last Updated: Sep 15, 2023
 */
class Solution {
    public int minCostConnectPoints(int[][] points) {
        PriorityQueue<int[]> pairs = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        Map<Integer, Set<Integer>> MST = new HashMap<>();
        int len = points.length, cnt = 1, total = 0;
        int[] dist;

        for (int i = 0; i < len; i++) {
            MST.put(i, new HashSet<>());
            for (int j = i + 1; j < len; j++) {
                pairs.add(new int[]{i, j, Math.abs(points[i][0] - points[j][0])
                                        + Math.abs(points[i][1] - points[j][1])});
            }
        }

        while (cnt < len) {
            dist = pairs.poll();
            if (!searchMST(MST, new HashSet<>(), dist[0], dist[1])) {
                MST.get(dist[0]).add(dist[1]);
                MST.get(dist[1]).add(dist[0]);
                total += dist[2];
                cnt++;
            }
        }

        return total;
    }
    public boolean searchMST(Map<Integer, Set<Integer>> MST, Set<Integer> visited, Integer in, Integer look) {
        Set<Integer> connect = MST.get(in);
        if (connect.contains(look)) return true;
        visited.add(in);

        for (Integer n : connect) {
            if (!visited.contains(n) && searchMST(MST, visited, n, look)) return true;
        }
        return false;
    }
}