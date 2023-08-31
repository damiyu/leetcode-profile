package easy.easy20;
import java.util.*;

/*
 * 20: Valid Parentheses
 * Last Updated: Aug 20, 2023
 */
public class Solution {
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
}