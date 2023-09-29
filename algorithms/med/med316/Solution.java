package med.med316;
import java.util.*;

/*
 * 316: Remove Duplicate Letters
 * Last Updated: Sep 26, 2023
 */
public class Solution {
    public String removeDuplicateLetters(String s) {
        Stack<Integer> idxs = new Stack<>();
        boolean[] hasChar = new boolean[26];
        int[] endIdx = new int[26];
        char[] str = s.toCharArray();
        int len = str.length, c, posLen;

        for (int i = 0; i < len; i++) endIdx[str[i] - 'a'] = i;
        for (int i = 0; i < len; i++) {
            c = str[i] - 'a';

            if (!hasChar[c]) {
                while (!idxs.isEmpty() && c < idxs.peek() && i < endIdx[idxs.peek()]) {
                    hasChar[idxs.pop()] = false;
                }

                idxs.push(c);
                hasChar[c] = true;
            }
        }

        posLen = idxs.size();
        char[] strNew = new char[posLen];
        for (int i = posLen - 1; i > -1; i--) strNew[i] = (char) ('a' + idxs.pop());
        return new String(strNew);
    }
}