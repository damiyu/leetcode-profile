package hard.hard403;
import java.util.*;

/*
 * 403: Frog Jump
 * Last Updated: Aug 27, 2023;
 */
public class Solution {
    public boolean canCross(int[] stones) {
        Map<Integer, Set<Integer>> lookUp = new HashMap<>();
        for (int s : stones) lookUp.put(s, new HashSet<>());
        lookUp.get(0).add(0);

        for (int s : stones) {
            for (int r : lookUp.get(s)) {
                for (int j = -1; j < 2; j++) {
                    if (r + j > 0 && lookUp.containsKey(s + r + j)) {
                        lookUp.get(s + r + j).add(r + j);
                    }
                }
            }
        }
        
        return !lookUp.get(stones[stones.length - 1]).isEmpty();
    }
}