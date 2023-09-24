package med.med12;

/*
 * 12: Integer to Roman
 * Last Updated: Aug 14, 2023
 * Solve Time: 25 min & 44 sec
 */
public class Solution {
    public String intToRoman(int num) {
        String[] def = {"M","D","C","L","X","V","I"}, cus = {"CD","CM","XL","XC","IV","IX"};
        String roman = String.valueOf(num);
        byte[] nums = new byte[roman.length()];
        byte idx = 0, val;

        for (char c : roman.toCharArray()) nums[idx++] = (byte) (c - 48);
        roman = "";
        idx = 0;

        for (byte i = 4; i > 0; i--, idx += 2) {
            if (nums.length >= i) {
                val = nums[nums.length - i];

                if (val == 4 || val == 9) {
                    roman += val > 5 ? cus[idx - 1] : cus[idx - 2];
                } else {
                    if (val > 4) {
                        roman += def[idx - 1];
                        val -= 5;
                    }
                    for (byte j = 0; j < val; j++) roman += def[idx];
                }
            }
        }

        return roman;
    }
}