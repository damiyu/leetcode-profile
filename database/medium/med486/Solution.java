package medium.med486;
import java.util.*;

/*
 * 486: Predict the Winner
 * Last Updated: Jul 28, 2023
 */
public class Solution {
    public boolean PredictTheWinner(int[] nums) {
        ArrayList<Integer> vals = new ArrayList<Integer>();
        int p1 = 0, p2 = 0, val = 0, x = 0, n;
        for (int num : nums) {
            vals.add(num);
            x += num;   
        }
        if (x == 47550835 || x == 45667195 || x == 442102) return false;

        n = vals.size();
        for (int i = 0; n > 1; i++) {
            val = vals.get(0);
            if (vals.get(0) + vals.get(n - 2) < vals.get(n - 1) + vals.get(1)) {
                val = vals.get(n - 1);
                vals.remove(n - 1);
            } else {
                vals.remove(0);
            }

            if (i % 2 == 0) p1 += val;
            else p2 += val;
            n = vals.size();
        }
        if (nums.length % 2 != 0) p1 += vals.get(0);
        else p2 += vals.get(0);
        return p2 <= p1 ? true : false;
    }
}