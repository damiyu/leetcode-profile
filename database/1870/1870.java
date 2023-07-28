class Solution {
    public static void main(String[] args) {
        int[] nums = {1,1,100000};
        System.out.println("Answer: " + minSpeedOnTime(nums, 2.01));
    }
    public static int minSpeedOnTime(int[] dist, double hour) {
        if (hour <= dist.length - 1) return -1;
        double t1 = 0, t2 = 0;
        int m = 5000000, l = 10000001, p = 0;

        while (m != 0) {
            for (int i = 0; i < dist.length - 1; i++) {
                t1 += Math.ceil((double) dist[i] / m);
                t2 += Math.ceil((double) dist[i] / (m - 1));
            }
            t1 += (double) dist[dist.length - 1] / m;
            t2 += (double) dist[dist.length - 1] / (m - 1);

            if (hour < t1) {
                p = m;
                m = (m + l) >> 1;
            }
            else if (t1 <= hour && t2 <= hour) {
                l = m;
                m = (m + p) >> 1;
            }
            else return m;
            t1 = 0;
            t2 = 0;
        }

        return -1;
    }
}
