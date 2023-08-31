package easy.easy168;

/*
 * 168: Excel Sheet Column Title
 * Last Updated: Aug 22, 2023
 * Solve Time: 17 min & 41 sec
 */
class Solution {
    public String convertToTitle(int columnNumber) {
        String[] alpha = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
        String title = "";

        while (columnNumber-- != 0) {
        title = alpha[(columnNumber % 26)] + title;
        columnNumber /= 26;
        }

        return title;

        // This version should be more memory efficient
        /*char[] title;
        int len = 0, temp = columnNumber;

        while (temp-- != 0) {
            temp /= 26;
            len++;
        }

        title = new char[len];
        for (int i = len - 1; i >= 0; i--, columnNumber--) {
            title[i] = (char) (64 + columnNumber % 26);
            columnNumber /= 26;
        }

        return new String(title);*/
    }
}