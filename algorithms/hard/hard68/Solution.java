package hard.hard68;
import java.util.*;

/*
 * 68: Text Justification
 * Last Updated: Aug 24, 2023
 * Solve Time: 56 min & 26 sec
 */
public class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> match = new ArrayList<>();
        StringBuilder str = new StringBuilder();
        int lineCnt = 0, wordCnt = 0, wordLen;

        for (String s : words) {
            wordLen = s.length();

            if (lineCnt + wordLen <= maxWidth) {
                str.append(s);
                lineCnt += wordLen;
                wordCnt++;

                if (lineCnt < maxWidth) {
                    str.append(' ');
                    lineCnt++;
                }
            } else {
                if (wordCnt != 1 && str.charAt(lineCnt - 1) == ' ') str.deleteCharAt(lineCnt-- - 1);
                for (int i = 0; lineCnt < maxWidth; i++) {
                    if (str.charAt(i) == ' ') {
                        str.insert(i, ' ');
                        lineCnt++;

                        while (++i < lineCnt) if (str.charAt(i) != ' ') break;
                    }

                    if (i >= lineCnt - 1) i = 0;
                }
                match.add(str.toString());

                str = new StringBuilder();
                str.append(s);
                lineCnt = wordLen;
                wordCnt = 1;
                if (lineCnt < maxWidth) {
                    str.append(' ');
                    lineCnt++;
                }
            }
        }

        while (lineCnt++ < maxWidth) str.append(' ');
        match.add(str.toString());
        return match;
    }
}