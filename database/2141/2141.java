class Solution {
    public long maxRunTime(int n, int[] batteries) {
        long max = 0;
        for (int b : batteries) {
            max += b;
        }
        long l = 1, r = max / n;
        
        while (l < r){
            long mid = r + (l - r) / 2, off = 0;
            
            for (int b : batteries) {
                off += Math.min(b, mid);
            }

            if (n * mid <= off) l = mid;
            else r = mid - 1;
        }
        return l;
    }
}