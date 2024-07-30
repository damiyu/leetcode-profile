import java.util.*;

/*
 * 752: Open the Lock
 * Last Updated: Apr 21, 2024
 */
class Solution {
    public int openLock(String[] deadends, String target) {
        Queue<String> codes = new LinkedList<>();
        Set<Integer> avoid = new HashSet<>();
        int cost = 0, t = Integer.valueOf(target);

        for (String val : deadends) avoid.add(Integer.valueOf(val));
        if (avoid.contains(0)) return -1;

        codes.add("0000");
        while (!codes.isEmpty()) {
            int n = codes.size();

            for (int i = 0; i < n; i++) {
                String code = codes.poll();
                if (Integer.valueOf(code) == t) return cost;
        
                for (int j = 0; j < 4; j++) {
                    char[] com1 = code.toCharArray(), com2 = code.toCharArray();
        
                    com1[j] = com1[j] == '9' ? '0' : ++com1[j];
                    com2[j] = com2[j] == '0' ? '9' : --com2[j];
        
                    Integer s1 = Integer.valueOf(new String(com1)), s2 = Integer.valueOf(new String(com2));
                    if (!avoid.contains(s1)) {
                        codes.add(new String(com1));
                        avoid.add(s1);
                    }
                    if (!avoid.contains(s2)) {
                        codes.add(new String(com2));
                        avoid.add(s2);
                    }
                }
            }

            cost++;
        }
    
        return -1;
    }
}