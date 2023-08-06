package easy.easy412;
import java.util.*;

/*
 * 412: Fizz Buzz
 * Last Updated: Dec 23, 2022
 */
public class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> out = new ArrayList<String>();

        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                out.add("FizzBuzz");
            } else if (i % 5 == 0) {
                out.add("Buzz");
            } else if (i % 3 == 0) {
                out.add("Fizz");
            } else {
                out.add(String.valueOf(i));
            }
        }

        return out;
    }
}