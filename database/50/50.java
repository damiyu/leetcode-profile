class Solution {
    public static void main(String[] args) {
        System.out.println("Answer: " + myPow(100, -1));
    }

    public static double myPow(double x, int n) {
        if (n < 0) {
            n = (-1 ^ n) + 1;
            x = 1 / x;
        }
        
        double ans = 1.0;
        while (n != 0) {
            if ((n & 1) != 0) {
                ans *= x;
            } 
                
            x *= x;
            n >>>= 1;
            
        }
        
        return ans;
    }
}
