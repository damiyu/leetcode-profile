package easy.easy9;

/*
 * 9: Palindrome Number
 * Last Updated: Aug 8, 2023
 */
public class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;

        int num = x;
        byte len = 0;
        while (num > 0) {
            num /= 10;
            len++;
        }

        byte[] digits = new byte[len];
        for (byte i = 0; i < len; i++, x /= 10) digits[i] = (byte) (x % 10);
        for (byte i = 0; i < len / 2; i++) if (digits[i] != digits[len - 1 - i]) return false;
        return true;
    }
}