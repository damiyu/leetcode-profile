package easy.easy383;

/*
 * 383: Ransom Note
 * Last Updated: Dec 15, 2022
 */
public class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int ranSize = ransomNote.length();
        int magaSize = magazine.length();
        boolean swap = false;

        for (int i = 0; i < ranSize; i++) {
            for (int j = 0; j < magaSize; j++) {
                if (ransomNote.charAt(i) == magazine.charAt(j)) {
                    magazine = magazine.replaceFirst(ransomNote.substring(i, i+1), " ");
                    swap = true;
                    break;
                }
            }

            if (!swap) {
                return false;
            }

            swap = false;
        }

        return true;
    }
}