package medium.med6;

/*
 * 6: Zigzag Conversion
 * Last Updated: Jul 21, 2023
 */
public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello: " + convert("PAYPALISHIRING",4));
    }

    public static String convert(String s, int numRows) {
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }

        char[] result = new char[s.length()];
        boolean time = true;
        int spot = 0;

        for (int i = 0, j = 0; i < s.length(); i++) {
            if (spot >= s.length()) {
                j++;
                spot = j;
                time = true;
            }

            result[i] = s.charAt(spot);
            if (j == numRows - 1) {
                spot += 2 * (numRows - 1);
            } else {
                spot += time || 2 * j == 0 ? 2 * (numRows - j - 1) : 2 * j;
            }
            time = !time;
        }

        return new String(result);
    }
}