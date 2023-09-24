package med.med1658;

/*
 * 1658: Minimum Operations to Reduce X to Zero
 * Last Updated: Sep 20, 2023
 */
public class Solution {
    public int minOperations(int[] nums, int x) {
        int len = nums.length, minMoves = 100001, total = -x, curNum = 0;

        for (int n : nums) total += n;
        if (total == 0) return len;

        int left = 0, right = 0, moves;
        do {
            curNum += nums[right];
            while (left <= right && curNum > total) curNum -= nums[left++];
            moves = len - (right - left + 1);
            if (curNum == total && moves < minMoves) minMoves = moves;
        } while (++right < len);

        return minMoves == 100001 ? -1 : minMoves;
    }
}

// My Original Solution
/*class Solution {
    public int minOperations(int[] nums, int x) {
        int len = nums.length, minMoves = 100001, moves = 0, curNum = 0, left = 0, right = len;

        for (int n : nums) {
            curNum += n;
            left++;
            moves++;
            if (curNum == x) {
                minMoves = moves;
                break;
            } else if (curNum > x) break;
        }

        if (left-- == right && curNum < x) return -1;
        while (left > -1) {
            curNum -= nums[left--];
            if (--moves < minMoves && curNum == x) minMoves = moves;
            while (curNum < x) {
                curNum += nums[--right];
                if (++moves < minMoves && curNum == x) {
                    minMoves = moves;
                    break;
                } else if (curNum >= x) break;
            }
        }

        return minMoves == 100001 ? -1 : minMoves;
    }
}*/