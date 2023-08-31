package easy.easy13;

/*
 * 13: Roman to Integer
 * Last Updated: Dec 13, 2022
 */
public class Solution {
    public int romanToInt(String s) {
        int total = 0;
        int strLen = s.length();

        for (int i = 0; i < strLen; i++) {
            char piece = s.charAt(i);

            if (i + 1 < strLen && (piece == 'I' || piece == 'X' || piece == 'C')) {
                char nextPiece = s.charAt(i+1);
                if (piece == 'I' && nextPiece == 'V') {
                    total += 4;
                    i++;
                    continue;
                } else if (piece == 'I' && nextPiece == 'X') {
                    total += 9;
                    i++;
                    continue;
                } else if (piece == 'X' && nextPiece == 'L') {
                    total += 40;
                    i++;
                    continue;
                } else if (piece == 'X' && nextPiece == 'C') {
                    total += 90;
                    i++;
                    continue;
                } else if (piece == 'C' && nextPiece == 'D') {
                    total += 400;
                    i++;
                    continue;
                } else if (piece == 'C' && nextPiece == 'M') {
                    total += 900;
                    i++;
                    continue;
                }
            }

            switch(piece) {
                case 'I':
                    total += 1;
                    continue;
                case 'V':
                    total += 5;
                    continue;
                case 'X':
                    total += 10;
                    continue;
                case 'L':
                    total += 50;
                    continue;
                case 'C':
                    total += 100;
                    continue;
                case 'D':
                    total += 500;
                    continue;
                case 'M':
                    total += 1000;
                    continue;
                default:
                    break;
            }
        }

        return total;
    }
}