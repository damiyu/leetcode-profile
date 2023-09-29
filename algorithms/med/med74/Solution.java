package med.med74;

/*
 * 74: Search a 2D Matrix
 * Last Updated: Aug 6, 2023
 */
public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int len = matrix[0].length, cells = matrix.length * len, top = 0, mid = cells >> 1;

        while (top != mid) {
            System.out.println(mid);
            if (target < matrix[mid / len][mid % len]) {
                mid = (mid + top) >> 1;
            } else {
                top = mid;
                mid = (mid + cells) >> 1;
            }
        }
        
        return target == matrix[mid / len][mid % len] ? true : false;
    }
}