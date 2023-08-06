class Solution {
    public static void main(String[] args) {
        int arr[] = {1,5,7,8,5,3,4,2,1};
        int difference = -2;

        int ret = longestSubsequence(arr, difference);
        System.out.println("Hi: " + ret);
    }

    static int longestSubsequence(int[] arr, int difference) {
        int curNum = 0;
        int curMax = 0;
        int max = 0;

        for (int i = 0; i < arr.length - 1; i++) {
            curNum = arr[i];
            curMax = 0;

            if (curNum == 10001) {
                continue;
            }

            for (int j = i + 1; j < arr.length; j++) {
                if (curNum + difference == arr[j]) {
                    curNum = arr[j];
                    curMax++;

                    if (curMax > max) {
                        arr[j] = 10001;
                        System.out.println(curNum);
                    }
                }

                if (curMax > max) {
                    max = curMax;
                }
            }

            if (curMax > max) {
                max = curMax;
            }
        }

        return max + 1;
    }
}