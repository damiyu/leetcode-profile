package test;
import java.util.*;

public class Test {
    public static void main(String[] args) {
        ArrayList<Integer[]> nums = new ArrayList<>(Arrays.asList(new Integer[][]{{1,2}}));
        Set<Integer[]> s = new HashSet<>();
        Integer[] a = new Integer[]{1,2};

        s.add(a);
        a[0] = 10;
        if (s.contains(a)) {
            System.out.println("Worked");
        } else {
            System.out.println("No");
        }
    }
    
    public static int rng(int min, int max) {
        return (int) Math.floor((Math.random() * (max - min + 1.0) + min));
    }

    public static int[] rngArray(int min, int max, int size) {
        int[] array = new int[size];

        for (int i = 0; i < size; i++) {
            array[i] = rng(min, max);
        }

        return array;
    }

    public static String rngLine(int min, int max, int size, char delim) {
        int [] array = rngArray(min, max, size);
        String line = "";

        line += array[0];
        for (int i = 1; i < size; i++) {
            line = line + delim + array[i];
        }

        return line;
    }
}