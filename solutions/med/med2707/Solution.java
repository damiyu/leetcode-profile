package med.med2707;

/*
 * 2707: Extra Characters in a String
 * Last Updated: Sep 2, 2023
 */
public class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        int len = s.length(), wordLen;
        int[] minCnts = new int[len + 1];
        
        for (int i = 1; i <= len; i++) {
            minCnts[i] = minCnts[i - 1] + 1;
            
            for (String word : dictionary) {
                wordLen = word.length();

                if (i >= wordLen && s.substring(i - wordLen, i).equals(word)
                    && minCnts[i - wordLen] < minCnts[i]) {
                        minCnts[i] = minCnts[i - wordLen];
                }
            }
        }
        
        return minCnts[len];
    }
}