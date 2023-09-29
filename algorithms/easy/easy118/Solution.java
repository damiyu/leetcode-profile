package easy.easy118;
import java.util.*;

/*
 * 118: Pascal's Triangle
 * Last Updated: Sep 8, 2023
 * Solve Time: 11 min & 1 sec
 */
public class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pasNums = new ArrayList<>();
        List<Integer> newCom = new ArrayList<>();

        for (int i = 1; i <= numRows; i++) {
            for (int j = 1, n = 1; j <= i; n = n * (i - j) / j, j++) newCom.add(n);
            pasNums.add(newCom);
            newCom = new ArrayList<>();
        }

        return pasNums;
    }
}

// My Original Solution
/*class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pasNums = new ArrayList<>();
        List<Integer> newCom = new ArrayList<>(), oldCom;

        newCom.add(1);
        pasNums.add(newCom);   
        for (int i = 1; i < numRows; i++) {
            newCom = new ArrayList<>();
            oldCom = pasNums.get(i - 1);

            newCom.add(1);
            for (int j = 0; j < i - 1; j++) {
                newCom.add(oldCom.get(j) + oldCom.get(j + 1));
            }
            newCom.add(1);
            pasNums.add(newCom);
        }

        return pasNums;
    }
}*/