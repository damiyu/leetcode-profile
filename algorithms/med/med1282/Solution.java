package med.med1282;
import java.util.*;

/*
 * 1282: Group the People Given the Group Size They Belong To
 * Last Updated: Sep 11, 2023
 * Solve Time: 23 min & 48 sec
 */
public class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        Map<Integer, List<Integer>> match = new HashMap<>();
        List<List<Integer>> groups = new ArrayList<>();
        List<Integer> newGroup;
        int idx = 0;

        for (int n : groupSizes) {
            if (match.containsKey(n) && match.get(n).size() < n) {
                match.get(n).add(idx++);
            } else {
                newGroup = new ArrayList<>();
                newGroup.add(idx++);
                match.put(n, newGroup);
                groups.add(newGroup);
            }
        }

        return groups;
    }
}

// My Original Solution
/*class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        Map<Integer, Stack<Integer>> match = new HashMap<>();
        List<List<Integer>> groups = new ArrayList<>();
        Stack<Integer> tempGroup;
        List<Integer> newGroup;
        int len = groupSizes.length, tempLen, size, div;

        for (int i = 0; i < len; i++) {
            if (match.containsKey(groupSizes[i])) {
                match.get(groupSizes[i]).push(i);
            } else {
                tempGroup = new Stack<>();
                tempGroup.push(i);
                match.put(groupSizes[i], tempGroup);
            }
        }

        for (Map.Entry<Integer, Stack<Integer>> n : match.entrySet()) {
            newGroup = new ArrayList<>();
            tempGroup = n.getValue();
            tempLen = tempGroup.size();
            size = n.getKey();
            div = tempLen / size;

            if (div > 1) {
                for (int i = 0; i < div; i++) {
                    for (int j = 0; j < size; j++) newGroup.add(tempGroup.pop());
                    groups.add(newGroup);
                    newGroup = new ArrayList<>();
                }
            } else {
                for (int i = 0; i < size; i++) newGroup.add(tempGroup.pop());
                groups.add(newGroup);
            }
        }

        return groups;
    }
}*/