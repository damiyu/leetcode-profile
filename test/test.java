package leetcode.test;
import java.util.*;

class Test {
    public static void main(String[] args) {
        System.out.println(rngLineSort(1,10,50,'+',false));
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

    public static String rngLineSort(int min, int max, int size, char delim, boolean isAscending) {
        int [] array = rngArray(min, max, size);
        Arrays.sort(array);
        String line = "";

        if (isAscending) {
            line += array[0];
            for (int i = 1; i < size; i++) {
                line = line + delim + array[i];
            }
            return line;
        }

        ArrayList<Integer> des = new ArrayList<Integer>();
        for (int num : array) des.add(num);
        Collections.sort(des, Collections.reverseOrder());
        line += des.get(0);
        for (int i = 1; i < size; i++) {
            line = line + delim + des.get(i);
        }

        return line;
    }
}