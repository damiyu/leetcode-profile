package med.med22;
import java.util.*;

/*
 * 22: Generate Parentheses
 * Last Updated: Sep 25, 2023
 */
class Solution {
    public List<String> generateParenthesis(int n) {
        StringBuilder parPat = new StringBuilder();
        List<String> finalCombs = new ArrayList<>();
        back(finalCombs, parPat, n, n);
        return finalCombs;
    }

    public void back(List<String> combs, StringBuilder pars, int left, int right) {
        if (left == 0 && right == 0) {
            combs.add(new String(pars));
            return;
        }

        if (left > 0) {
            pars.append('(');
            back(combs, pars, left - 1, right);
            pars.deleteCharAt(pars.length() - 1);
        }
        if (left < right) {
            pars.append(')');
            back(combs, pars, left, right - 1);
            pars.deleteCharAt(pars.length() - 1);
        }
    }
}

// My Original Solution
/*class Solution {
    public List<String> generateParenthesis(int n) {
        Set<String> finalCombs = new HashSet<>();
        Stack<String> oldCombs = new Stack<>();
        String curStr = "", makeStr = "";
        char[] tempStr;
        char temp;

        for (int i = 0; i < n; i++) curStr += "()";

        finalCombs.add(curStr);
        oldCombs.push(curStr);
        while (!oldCombs.isEmpty()) {
            curStr = oldCombs.pop();

            for (int j = 1; j < curStr.length(); j++) {
                tempStr = curStr.toCharArray();

                for (int k = j + 1; k < tempStr.length - 1; k++) {
                    if (tempStr[j] != tempStr[k]) {
                        temp = tempStr[j];
                        tempStr[j] = tempStr[k];
                        tempStr[k] = temp;

                        makeStr = new String(tempStr);
                        if (!finalCombs.contains(makeStr) && isValid(makeStr)) {
                            finalCombs.add(makeStr);
                            oldCombs.add(makeStr);
                        }
                    }
                }
            }
        }
        
        return Arrays.asList(finalCombs.toArray(new String[]{}));
    }

    public boolean isValid(String s) {
        Stack<Integer> open = new Stack<>();
        short size = 0;

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                open.push(c == '(' ? c + 1 : c + 2);
                size++;
            } else if (size-- < 1 || open.pop() != c) {
                return false;
            } 
        }

        return size == 0;
    }
}*/