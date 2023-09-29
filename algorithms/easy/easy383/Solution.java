package easy.easy383;

/*
 * 383: Ransom Note
 * Last Updated: Aug 6, 2022
 */
public class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] cnt = new int[26];

        for (char c : magazine.toCharArray()) cnt[c - 97]++;
        for (char c : ransomNote.toCharArray()) {
            if (cnt[c - 97] == 0) return false;
            cnt[c - 97]--;
        }
        return true;
    }
}